#!/usr/bin/env python3
"""Erzeugt eine kleine JSON-Datei mit den zuletzt geänderten Regelwerk-Passagen.

Gedacht für GitHub Actions:
- Quelle bleibt regelwerk.md
- Ausgabe landet in assets/data/rule-changes.json
- Die Website markiert die Stellen später per JavaScript
"""

from __future__ import annotations

import argparse
import datetime as dt
import html
import json
import re
import subprocess
from dataclasses import dataclass
from difflib import SequenceMatcher
from pathlib import Path
from typing import Iterable

RULE_SECTION_START = '<section class="np-page-section np-rules-section"'
RULE_SECTION_END = '</section>'
RULE_BLOCK_START = '<article class="np-rule-block"'

IGNORED_TEXT_FRAGMENTS = (
    'AUTO_UPDATED_START',
    'AUTO_UPDATED_END',
    'Zuletzt aktualisiert:',
)

STRUCTURAL_LINE_STARTS = (
    '<section', '</section', '<article', '</article', '<header', '</header',
    '<ol', '</ol', '<ul', '</ul', '<div', '</div', '<span', '</span',
)


@dataclass(frozen=True)
class LineEntry:
    line_number: int
    raw: str
    text: str


def run_git_show(ref: str, file_path: str) -> str:
    """Liest eine Datei aus einem Git-Ref. Gibt leeren Text zurück, falls nicht vorhanden."""
    if not ref or set(ref) == {'0'}:
        return ''

    result = subprocess.run(
        ['git', 'show', f'{ref}:{file_path}'],
        check=False,
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
        text=True,
        encoding='utf-8',
    )
    return result.stdout if result.returncode == 0 else ''


def extract_rule_section(markdown: str) -> str:
    """Beschränkt den Vergleich auf die tatsächlichen Regelblöcke.

    Wichtig:
    Die Regelwerksseite enthält vor den eigentlichen Regeln noch Header,
    ECHO-Box, Änderungsübersicht und den großen Abschnittstitel
    wie z. B. "Serverregelwerk".

    Für die Änderungslogik sollen aber nur die echten Regeln zählen.
    Deshalb wird zuerst der Regelwerksbereich gesucht und danach auf den
    ersten `<article class="np-rule-block">` innerhalb dieses Bereichs
    gesprungen. Alles davor wird ignoriert.
    """
    section_start = markdown.find(RULE_SECTION_START)
    if section_start == -1:
        return markdown

    section_end = markdown.find(RULE_SECTION_END, section_start)
    if section_end == -1:
        section = markdown[section_start:]
    else:
        section = markdown[section_start:section_end + len(RULE_SECTION_END)]

    first_rule_block = section.find(RULE_BLOCK_START)
    if first_rule_block == -1:
        return section

    return section[first_rule_block:]


def visible_text(line: str) -> str:
    """Reduziert Markdown/HTML auf sichtbaren Text, damit JS ihn später findet."""
    line = line.strip()
    line = re.sub(r'<!--.*?-->', '', line)
    line = re.sub(r'<br\s*/?>', ' ', line, flags=re.IGNORECASE)
    line = re.sub(r'</(li|p|h\d)>', ' ', line, flags=re.IGNORECASE)
    line = re.sub(r'<[^>]+>', ' ', line)
    line = re.sub(r'[`*_~]+', '', line)
    line = html.unescape(line)
    line = re.sub(r'\s+', ' ', line).strip()
    return line


def is_relevant_text(raw: str, text: str) -> bool:
    if not text:
        return False

    if len(text) < 12:
        return False

    if any(fragment in raw or fragment in text for fragment in IGNORED_TEXT_FRAGMENTS):
        return False

    stripped = raw.strip()
    if stripped.startswith(STRUCTURAL_LINE_STARTS) and visible_text(stripped) == '':
        return False

    # Nur echte lesbare Inhalte, keine reinen Zeichen/IDs.
    if not re.search(r'[A-Za-zÄÖÜäöüß]', text):
        return False

    return True


def collect_entries(markdown: str) -> list[LineEntry]:
    section = extract_rule_section(markdown)
    entries: list[LineEntry] = []

    for index, raw_line in enumerate(section.splitlines(), start=1):
        text = visible_text(raw_line)
        if is_relevant_text(raw_line, text):
            entries.append(LineEntry(index, raw_line.rstrip(), text))

    return entries


def compact_changes(entries: Iterable[LineEntry], change_type: str) -> list[dict[str, object]]:
    """Verhindert doppelte Einträge, wenn derselbe Text mehrfach auftaucht."""
    seen: set[str] = set()
    changes: list[dict[str, object]] = []

    for entry in entries:
        key = re.sub(r'\s+', ' ', entry.text.casefold()).strip()
        if key in seen:
            continue
        seen.add(key)
        changes.append({
            'type': change_type,
            'text': entry.text,
            'line': entry.line_number,
        })

    return changes



def similarity(left: str, right: str) -> float:
    """Berechnet, ob zwei sichtbare Textzeilen eher eine Änderung derselben Regel sind."""
    left_norm = re.sub(r'\s+', ' ', left.casefold()).strip()
    right_norm = re.sub(r'\s+', ' ', right.casefold()).strip()

    if not left_norm or not right_norm:
        return 0.0

    if left_norm == right_norm:
        return 1.0

    # Wenn eine Fassung die andere enthält, ist das fast immer eine Bearbeitung
    # derselben Regel, z. B. wenn nur "TEST TEST" eingefügt wurde.
    if left_norm in right_norm or right_norm in left_norm:
        shorter = min(len(left_norm), len(right_norm))
        longer = max(len(left_norm), len(right_norm))
        return max(0.72, shorter / longer)

    return SequenceMatcher(a=left_norm, b=right_norm, autojunk=False).ratio()


def split_replace_block(
    before_block: list[LineEntry],
    after_block: list[LineEntry],
    edit_threshold: float = 0.55,
) -> tuple[list[LineEntry], list[LineEntry], list[LineEntry]]:
    """Teilt einen replace-Block in echte neue, geänderte und entfernte Zeilen auf.

    SequenceMatcher meldet normale Textänderungen als:
    - alte Zeile entfernt
    - neue Zeile hinzugefügt

    Für das Regelwerk wollen wir solche Fälle aber als "geändert" zählen,
    damit nicht fälschlich eine rote "entfernt"-Box erscheint.
    """
    added: list[LineEntry] = []
    edited: list[LineEntry] = []
    removed: list[LineEntry] = []

    unmatched_before = set(range(len(before_block)))
    unmatched_after = set(range(len(after_block)))
    pairs: list[tuple[float, int, int]] = []

    for before_index, before_entry in enumerate(before_block):
        for after_index, after_entry in enumerate(after_block):
            score = similarity(before_entry.text, after_entry.text)
            if score >= edit_threshold:
                pairs.append((score, before_index, after_index))

    # Beste Treffer zuerst, damit jede alte/neue Zeile nur einmal verwendet wird.
    pairs.sort(reverse=True, key=lambda item: item[0])

    for score, before_index, after_index in pairs:
        if before_index not in unmatched_before or after_index not in unmatched_after:
            continue

        edited.append(after_block[after_index])
        unmatched_before.remove(before_index)
        unmatched_after.remove(after_index)

    # Wenn die Blockgrößen identisch sind, die Texte aber stärker umformuliert wurden,
    # behandeln wir die übrigen Paare positionsbasiert ebenfalls als "geändert".
    while len(unmatched_before) == len(unmatched_after) and unmatched_before and unmatched_after:
        before_index = min(unmatched_before)
        after_index = min(unmatched_after)
        edited.append(after_block[after_index])
        unmatched_before.remove(before_index)
        unmatched_after.remove(after_index)

    for after_index in sorted(unmatched_after):
        added.append(after_block[after_index])

    for before_index in sorted(unmatched_before):
        removed.append(before_block[before_index])

    return added, edited, removed


def build_changes(before_text: str, after_text: str) -> dict[str, object]:
    before_entries = collect_entries(before_text)
    after_entries = collect_entries(after_text)

    before_lines = [entry.text for entry in before_entries]
    after_lines = [entry.text for entry in after_entries]

    matcher = SequenceMatcher(a=before_lines, b=after_lines, autojunk=False)

    added: list[LineEntry] = []
    edited: list[LineEntry] = []
    removed: list[LineEntry] = []

    for tag, i1, i2, j1, j2 in matcher.get_opcodes():
        if tag == 'equal':
            continue

        if tag == 'insert':
            added.extend(after_entries[j1:j2])
            continue

        if tag == 'delete':
            removed.extend(before_entries[i1:i2])
            continue

        if tag == 'replace':
            block_added, block_edited, block_removed = split_replace_block(
                before_entries[i1:i2],
                after_entries[j1:j2],
            )
            added.extend(block_added)
            edited.extend(block_edited)
            removed.extend(block_removed)

    generated_at = dt.datetime.now(dt.timezone.utc).isoformat(timespec='seconds')

    return {
        'generated_at': generated_at,
        'source_file': 'regelwerk.md',
        'added': compact_changes(added, 'added'),
        'edited': compact_changes(edited, 'edited'),
        'removed': compact_changes(removed, 'removed'),
    }


def main() -> int:
    parser = argparse.ArgumentParser(description='Erzeugt Änderungsdaten für das Regelwerk.')
    parser.add_argument('--before', required=True, help='Git-Ref vor der Änderung')
    parser.add_argument('--after', required=True, help='Git-Ref nach der Änderung')
    parser.add_argument('--file', default='regelwerk.md', help='zu vergleichende Markdown-Datei')
    parser.add_argument('--output', default='assets/data/rule-changes.json', help='Ausgabedatei')
    args = parser.parse_args()

    before_text = run_git_show(args.before, args.file)
    after_text = run_git_show(args.after, args.file)

    if not after_text:
        print(f'Keine aktuelle Datei gefunden: {args.file}')
        return 0

    changes = build_changes(before_text, after_text)
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(changes, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

    print(f'Änderungsdaten geschrieben: {output_path}')
    print(f"Neu: {len(changes['added'])}, geändert: {len(changes['edited'])}, entfernt: {len(changes['removed'])}")
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
