# NewPath Docs

Dieses Repository enthält die öffentliche Dokumentation und GitHub-Pages-Webseite für **NewPath – Echoes of the Wild**.

Die Webseite ist hier erreichbar:

https://www.newpath-mc.de/

---

## Inhalte

Die Dokumentation umfasst aktuell folgende Bereiche:

- **Startseite** – Überblick über NewPath, ECHO, Projektbereiche, Ecosystem, Entstehungsgeschichte und Logo-Evolution
- **Regelwerk** – öffentliches Serverregelwerk mit automatischer Änderungsmarkierung
- **Philosophie** – Grundgedanke, Spieltempo, Community-Anspruch und Projektidentität
- **FAQ** – häufige Fragen rund um Zugang, Installation, Technik, Voice Chat und Servergrundlagen
- **Modpack Hilfe** – Hilfen zu Installation, CurseForge, RAM-Zuweisung, Voice Chat, ersten Schritten und später einzelnen Mod-Guides
- **Team** – Vorstellung des Projektteams
- **Streamer** – Informationen und Assets für NewPath-Streamer
- **Galerie** – Bildsammlung mit Kategorien und Lightbox
- **Geheime NewPath-Ente** – kleines Easter Egg der Webseite

---

## Wichtige Dateien und Ordner

```text
.
├─ index.md                         # Startseite
├─ regelwerk.md                     # Regelwerk
├─ philosophie.md                   # Philosophie
├─ faq.md                           # FAQ
├─ modpack-hilfe.md                 # Modpack-Hilfe
├─ team.md                          # Teamseite
├─ streamer.md                      # Streamer-Seite
├─ galerie.md                       # Galerie
├─ ente.md                          # Easter Egg
│
├─ _includes/
│  ├─ head_custom.html              # Header, Navigation, Mobile Header/Footer, Script-Einbindungen
│  └─ footer_custom.html            # Footer und globale Script-Einbindungen
│
├─ _data/
│  ├─ gallery.yml                   # Kategorien und Bilder der Galerie
│  └─ logo-evolution.yml            # Logos der Logo-Evolution auf der Startseite
│
├─ assets/
│  ├─ css/
│  │  └─ newpath.css                # Hauptstylesheet der Webseite
│  ├─ js/
│  │  ├─ np-gallery.js              # Galerie-Filter, Vorschau und Lightbox
│  │  ├─ np-logo-evolution.js       # Logo-Evolution-Lightbox
│  │  ├─ np-rule-changes.js         # Regelwerksänderungen auf der Webseite markieren
│  │  └─ search-jump.js             # Such-/Sprunglogik
│  ├─ data/
│  │  └─ rule-changes.json          # Generierte Änderungsdaten für das Regelwerk
│  └─ images/
│     ├─ echo/                      # ECHO-Bilder
│     ├─ gallery/                   # Galerie-Bilder
│     └─ logo-evolution/            # Logos der NewPath-Entwicklung
│
└─ scripts/
   └─ generate_rule_changes.py      # Generator für Regelwerksänderungen
```

---

## Galerie pflegen

Die Galerie wird über folgende Datei gesteuert:

```text
_data/gallery.yml
```

Bilder liegen unter:

```text
assets/images/gallery/
```

Empfohlene Struktur:

```text
assets/images/gallery/
├─ archiv/
├─ events/
└─ eotw/
```

Die Bilder sollten möglichst als `.webp` gespeichert werden, um Ladezeiten gering zu halten.

Die Galerie zeigt pro Kategorie zunächst eine kompakte Vorschau. Weitere Bilder können über den Button **„Alle Bilder anzeigen“** eingeblendet werden.

---

## Logo-Evolution pflegen

Die Logo-Evolution auf der Startseite wird über folgende Datei gesteuert:

```text
_data/logo-evolution.yml
```

Die Logos liegen unter:

```text
assets/images/logo-evolution/
```

Reihenfolge, Labels und Dateinamen können in `_data/logo-evolution.yml` angepasst werden.

Das aktuelle Branding wird über folgende Eigenschaft hervorgehoben:

```yml
current: true
```

---

## Regelwerksänderungen

Das Regelwerk besitzt ein System zur automatischen Änderungsmarkierung.

Relevante Dateien:

```text
scripts/generate_rule_changes.py
assets/js/np-rule-changes.js
assets/data/rule-changes.json
```

Die Änderungslogik soll nur echte Regelblöcke auswerten, also Inhalte innerhalb von:

```html
<article class="np-rule-block">
```

Nicht ausgewertet werden sollen Header, ECHO-Box, Seitentitel oder Änderungsübersicht.

Um die Änderungsdaten manuell zurückzusetzen, kann `assets/data/rule-changes.json` auf folgenden Inhalt gesetzt werden:

```json
{
  "generated_at": null,
  "added": [],
  "edited": [],
  "removed": []
}
```

---

## Designsystem

Die Webseite nutzt ein eigenes NewPath-Designsystem mit folgenden Grundelementen:

- dunkle Petrol-/Nachtblau-Flächen
- Cyan-Glow als Tech-Akzent
- Gold-/Creme-Töne für Titel und wichtige Hervorhebungen
- ECHO als visueller Wegbegleiter
- einheitliche Karten, Panels, Akkordeons und Lightboxen
- mobil angepasste Layouts für Startseite, Unterseiten, Galerie und Footer

Zentrale Datei:

```text
assets/css/newpath.css
```

Beim Anpassen der Webseite sollte möglichst auf bestehende Klassen und Blöcke aufgebaut werden, damit das Design konsistent bleibt.

---

## GitHub Pages

Die Webseite wird über GitHub Pages veröffentlicht.

Die eigentliche Startseite liegt in:

```text
index.md
```

Änderungen werden nach Commit und Push automatisch durch GitHub Pages gebaut und veröffentlicht.

---

## Transparenzhinweis

Teile dieser Dokumentation, der Texte, Strukturvorschläge, Designideen und technischen Umsetzung wurden mit Unterstützung von KI erarbeitet.

Die Inhalte, das visuelle Konzept und die technische Weiterentwicklung entstehen dabei nicht automatisch, sondern in einem gemeinsamen Arbeitsprozess: Ideen, Anforderungen, Screenshots, Feedback und finale Entscheidungen kommen aus dem NewPath-Projektteam. KI wird unterstützend genutzt, um Texte zu strukturieren, Konzepte auszuarbeiten, Code vorzubereiten, Fehler zu analysieren und wiederkehrende Arbeiten effizienter umzusetzen.

Alle übernommenen Inhalte werden manuell geprüft, angepasst und bewusst in das Projekt integriert.

---

## Hinweis

Dieses Repository dient der öffentlichen Dokumentation des Projekts **NewPath – Echoes of the Wild**.

Interne Planungen, private Daten, nicht freigegebene Assets oder serverinterne Informationen gehören nicht in dieses Repository.
