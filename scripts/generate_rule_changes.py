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
    """Beschränkt den Vergleich auf den eigentlichen Regelwerk-Bereich."""
    start = markdown.find(RULE_SECTION_START)
    if start == -1:
        return markdown

    end = markdown.find(RULE_SECTION_END, start)
    if end == -1:
        return markdown[start:]

    return markdown[start:end + len(RULE_SECTION_END)]


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
        elif tag == 'delete':
            removed.extend(before_entries[i1:i2])
        elif tag == 'replace':
            edited.extend(after_entries[j1:j2])
            removed.extend(before_entries[i1:i2])

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
