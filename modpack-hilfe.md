---
layout: default
title: Modpack Hilfe
nav_order: 5
permalink: /modpack-hilfe.html
---

<!-- AUTO_UPDATED_START -->
<p class="np-last-updated">Zuletzt aktualisiert: 09.06.2026 16:03 Uhr</p>
<!-- AUTO_UPDATED_END -->

<section class="echo-page-box echo-page-box-help">
  <div class="echo-page-image">
    <img
      src="{{ site.baseurl }}/assets/images/echo/mphelp.png"
      alt="ECHO hilft bei Modpack-Fragen"
      width="512"
      height="512"
      loading="lazy"
      decoding="async">
  </div>

  <div class="echo-page-content">
    <p class="echo-page-kicker">ECHO – Der Wegbegleiter</p>
    <h2>Modpack-Hilfe für Einstieg, Technik und einzelne Mods.</h2>
    <p>
      Hier sammelt ECHO alle wichtigen Hilfen rund um NewPath: Installation, RAM-Zuweisung,
      Voice Chat, typische Startprobleme und später auch kurze Guides zu einzelnen Mods.
    </p>
  </div>
</section>

<section class="np-page-section np-help-section">
  <div class="np-section-header">
    <p class="np-eyebrow">Modpack Hilfe</p>
    <h1 class="np-title">Alles Wichtige für Installation und Technik.</h1>
    <p class="np-lead">
      Die Modpack Hilfe ist die zentrale Hilfebibliothek für <strong>NewPath – Echoes of the Wild</strong>.
      Sie ersetzt keine Support-Tickets, soll aber die häufigsten Fragen so erklären, dass neue Spieler
      schnell selbst weiterkommen.
    </p>
  </div>

  <div class="np-note np-help-note">
    <strong>Hinweis:</strong> Die Bereiche sind bewusst aufklappbar. So bleibt die Seite übersichtlich,
    auch wenn später Bilder, Schritt-für-Schritt-Grafiken und einzelne Mod-Guides ergänzt werden.
  </div>

  <div class="np-card-grid np-card-grid-4 np-help-grid" id="mitspielen">
    <a class="np-info-card np-help-tile" href="#installation">
      <strong class="np-card-title">Installation</strong>
      <span class="np-card-text">NewPath über CurseForge installieren</span>
    </a>

    <a class="np-info-card np-help-tile" href="#ram">
      <strong class="np-card-title">RAM zuweisen</strong>
      <span class="np-card-text">Arbeitsspeicher im Launcher prüfen</span>
    </a>

    <a class="np-info-card np-help-tile" href="#voice-chat">
      <strong class="np-card-title">Voice Chat</strong>
      <span class="np-card-text">Mikrofon, Lautstärke und Gruppen</span>
    </a>

    <a class="np-info-card np-help-tile" href="#probleme">
      <strong class="np-card-title">Probleme & Support</strong>
      <span class="np-card-text">Startprobleme und typische Fehler</span>
    </a>
  </div>
</section>

<section class="np-page-section np-help-section np-help-module-section" id="installation-setup">
  <div class="np-section-header np-help-category-header">
    <p class="np-eyebrow">Kategorie 01</p>
    <h1 class="np-title">Installation und Setup</h1>
    <p class="np-lead">
      Alles rund um Installation, richtige Version, Speicherzuweisung und grundlegende Einrichtung.
      Die einzelnen Module sind so vorbereitet, dass links der Erklärungstext steht und rechts später Bilder
      oder Screenshots ergänzt werden können.
    </p>
  </div>

  <details id="installation" class="np-accordion np-help-details np-help-module" open>
    <summary>
      <span class="np-help-module-icon" aria-hidden="true"></span>
      <span class="np-help-module-title">NewPath über CurseForge installieren</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH: Hier später Erklärungstext ergänzen/anpassen -->
        <p>
          NewPath wird ausschließlich über CurseForge veröffentlicht. Suche im CurseForge Launcher nach
          <strong>NewPath</strong> und installiere die aktuell empfohlene Version.
        </p>

        <ol class="np-help-checklist">
          <li>CurseForge Launcher öffnen.</li>
          <li>Nach <strong>NewPath</strong> suchen.</li>
          <li>Das richtige NewPath-Projekt auswählen.</li>
          <li>Auf <strong>Installieren</strong> klicken.</li>
          <li>Nach der Installation RAM-Zuweisung prüfen.</li>
        </ol>

        <!-- HINWEISBOX: Für wichtige Hinweise. Klasse bei Bedarf ändern: np-help-callout-warning / np-help-callout-danger -->
        <div class="np-help-callout np-help-callout-warning">
          <strong>!</strong>
          <p>Achte darauf, nur die offizielle NewPath-Version zu installieren und keine eigenen Mods hinzuzufügen.</p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH: Platzhalter später durch <img src="..." alt="..."> ersetzen -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <p>CurseForge-Installationsgrafik später hier einfügen.</p>
        </div>
      </aside>
    </div>
  </details>

  <details id="ram" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon" aria-hidden="true"></span>
      <span class="np-help-module-title">RAM im CurseForge Launcher zuweisen</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          Nach der Installation solltest du prüfen, wie viel Arbeitsspeicher dem Modpack zugewiesen ist.
          Für NewPath empfehlen wir mindestens <strong>8 GB RAM</strong>. Je nach System, Shadern,
          Ressourcenauslastung und Version können auch mehr sinnvoll sein.
        </p>

        <ol class="np-help-checklist">
          <li>CurseForge Launcher öffnen.</li>
          <li>Links unten auf die Einstellungen gehen.</li>
          <li>Unter Minecraft die Java-/Speichereinstellungen öffnen.</li>
          <li>Den Regler für zugewiesenen Speicher prüfen.</li>
          <li>Mindestens <strong>8000 MB</strong> einstellen.</li>
        </ol>

        <!-- HINWEISBOX -->
        <div class="np-help-callout np-help-callout-danger">
          <strong>!</strong>
          <p>Zu wenig RAM kann dazu führen, dass das Spiel langsam startet, stark ruckelt oder beim Laden abstürzt.</p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <p>RAM-Zuweisungsgrafik später hier einfügen.</p>
        </div>
      </aside>
    </div>
  </details>

  <details id="version" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon" aria-hidden="true"></span>
      <span class="np-help-module-title">Richtige Modpack-Version finden</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          Achte darauf, dass du die aktuell empfohlene Version nutzt. Die aktive Version steht auf der Startseite
          und wird zusätzlich im Discord angekündigt.
        </p>

        <p>
          Wenn du unsicher bist, ob du die richtige Version installiert hast, vergleiche die Versionsnummer im
          CurseForge Launcher mit der Angabe auf der Startseite.
        </p>

        <!-- HINWEISBOX -->
        <div class="np-help-callout np-help-callout-warning">
          <strong>!</strong>
          <p>Bei Versionswechseln immer auf Discord-Ankündigungen und Hinweise im Changelog achten.</p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <p>Versionsvergleich oder CurseForge-Profil später hier einfügen.</p>
        </div>
      </aside>
    </div>
  </details>

  <details id="voice-chat" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon" aria-hidden="true"></span>
      <span class="np-help-module-title">Voice Chat einrichten</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          NewPath nutzt eine Voice-Chat-Mod. Damit du andere Spieler hören kannst und selbst gehört wirst,
          solltest du die Grundeinstellungen einmal prüfen.
        </p>

        <ul class="np-help-checklist">
          <li>Mikrofon und Ausgabegerät auswählen.</li>
          <li>Lautstärke einzelner Spieler prüfen.</li>
          <li>Push-to-Talk oder Sprachaktivierung einstellen.</li>
          <li>Gruppen erstellen oder bestehenden Gruppen beitreten.</li>
          <li>Testen, ob dein Mikrofon im Spiel korrekt erkannt wird.</li>
        </ul>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <p>Voice-Chat-Grafik später hier einfügen.</p>
        </div>
      </aside>
    </div>
  </details>
</section>

<section class="np-page-section np-help-section np-help-module-section" id="probleme-support">
  <div class="np-section-header np-help-category-header">
    <p class="np-eyebrow">Kategorie 02</p>
    <h1 class="np-title">Probleme und Support</h1>
    <p class="np-lead">
      Hilfe bei Startproblemen, Abstürzen, Voice-Chat-Problemen und typischen Fragen zum Supportweg.
      Nutze Hinweise im Modul, um besonders wichtige Punkte sichtbar hervorzuheben.
    </p>
  </div>

  <details id="probleme" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon" aria-hidden="true"></span>
      <span class="np-help-module-title">Spiel startet nicht oder stürzt ab</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>Wenn NewPath nicht startet, prüfe zuerst:</p>

        <ul class="np-help-checklist">
          <li>Ist genug RAM zugewiesen?</li>
          <li>Ist die richtige Modpack-Version installiert?</li>
          <li>Wurde der Download vollständig abgeschlossen?</li>
          <li>Wurde das Modpack manuell verändert?</li>
          <li>Gibt es eine konkrete Fehlermeldung oder einen Crash-Report?</li>
        </ul>

        <!-- HINWEISBOX -->
        <div class="np-help-callout np-help-callout-danger">
          <strong>!</strong>
          <p>Für Support im Discord helfen Screenshots, Fehlermeldungen und Logs enorm.</p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <p>Beispiel für Fehlermeldung, Log oder Crash-Report später hier einfügen.</p>
        </div>
      </aside>
    </div>
  </details>

  <details id="voice-chat-fehler" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon" aria-hidden="true"></span>
      <span class="np-help-module-title">Voice Chat funktioniert nicht</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>Wenn der Voice Chat nicht funktioniert, prüfe zuerst diese Punkte:</p>

        <ul class="np-help-checklist">
          <li>Ist das richtige Mikrofon ausgewählt?</li>
          <li>Ist das richtige Ausgabegerät ausgewählt?</li>
          <li>Ist die Mikrofonlautstärke nicht auf 0?</li>
          <li>Blockiert Windows oder ein anderes Programm das Mikrofon?</li>
          <li>Ist Push-to-Talk aktiviert und die Taste korrekt belegt?</li>
        </ul>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <p>Voice-Chat-Einstellungen später hier einfügen.</p>
        </div>
      </aside>
    </div>
  </details>

  <details id="support-ticket" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon" aria-hidden="true"></span>
      <span class="np-help-module-title">Wann sollte ich ein Support-Ticket öffnen?</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          Öffne ein Ticket, wenn du trotz Anleitung nicht weiterkommst, wenn ein Fehler mehrfach auftritt
          oder wenn du nicht sicher bist, ob ein Problem an deinem Client, am Modpack oder am Server liegt.
        </p>

        <!-- HINWEISBOX -->
        <div class="np-help-callout np-help-callout-warning">
          <strong>!</strong>
          <p>Beschreibe im Ticket möglichst genau, was passiert ist und welche Schritte du bereits getestet hast.</p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <p>Support-Ticket-Beispiel oder Checkliste später hier einfügen.</p>
        </div>
      </aside>
    </div>
  </details>
</section>

<section class="np-page-section np-help-section np-help-module-section" id="mod-anleitungen">
  <div class="np-section-header np-help-category-header">
    <p class="np-eyebrow">Kategorie 03</p>
    <h1 class="np-title">Mod Anleitungen</h1>
    <p class="np-lead">
      Platz für spätere Kurzguides zu einzelnen Mods, wichtigen Menüs, Tastenkürzeln und wiederkehrenden
      Gameplay-Fragen. Jedes Modul kann mit Text, Bildern und Hinweisboxen erweitert werden.
    </p>
  </div>

  <details id="mod-guides" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon" aria-hidden="true"></span>
      <span class="np-help-module-title">Einzelne Mods kurz erklärt</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          Dieser Bereich ist für kleine Anleitungen zu einzelnen Mods gedacht. Beispiele können später sein:
          wichtige Menüs, Tastenkürzel, Anfängerfragen oder besondere Funktionen.
        </p>

        <!-- HINWEISBOX -->
        <div class="np-help-callout np-help-callout-warning">
          <strong>!</strong>
          <p>Hier später modbezogene Sonderregeln oder wichtige Einschränkungen ergänzen.</p>
        </div>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <p>Screenshot der jeweiligen Mod später hier einfügen.</p>
        </div>
      </aside>
    </div>
  </details>

  <details id="tasten" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon" aria-hidden="true"></span>
      <span class="np-help-module-title">Wichtige Tastenkürzel und Menüs</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          Hier können häufig benötigte Tastenbelegungen und Menüfunktionen gesammelt werden.
          Besonders hilfreich ist das für Mods, die neue Oberflächen oder Spezialfunktionen hinzufügen.
        </p>

        <ul class="np-help-checklist">
          <li>Mod-Menü öffnen: Taste später ergänzen.</li>
          <li>Konfiguration öffnen: Taste später ergänzen.</li>
          <li>Wichtige Sonderfunktion: später ergänzen.</li>
        </ul>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <p>Tastenübersicht oder Menü-Screenshot später hier einfügen.</p>
        </div>
      </aside>
    </div>
  </details>

  <details id="claims-reisen" class="np-accordion np-help-details np-help-module">
    <summary>
      <span class="np-help-module-icon" aria-hidden="true"></span>
      <span class="np-help-module-title">Claims, Grundstücke und Reisen</span>
    </summary>

    <div class="np-help-module-content">
      <div class="np-help-module-text">
        <!-- TEXTBEREICH -->
        <p>
          Dieser Bereich ist für spätere Hilfen zu Claims, Grundstücken, Wegsteinen und Reisewegen gedacht.
          Die Inhalte werden ergänzt, sobald die finalen Serverregeln und Funktionen feststehen.
        </p>
      </div>

      <aside class="np-help-module-media">
        <!-- BILDBEREICH -->
        <div class="np-help-image-placeholder">
          <span>Bildplatzhalter</span>
          <p>Beispielgrafik zu Claims oder Wegsteinen später hier einfügen.</p>
        </div>
      </aside>
    </div>
  </details>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('details.np-help-details[open]').forEach(function (details) {
      details.removeAttribute('open');
    });
  });
</script>
