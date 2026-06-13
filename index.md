---
layout: home
title: Startseite
nav_order: 1
permalink: /
---
<div class="np-home np-home-v2">

<section class="np-hero np-hero-v2">
  <div class="np-hero-content">
    <h1>
      <span class="np-hero-title-main">NewPath</span>
      <span class="np-hero-title-sub">Echoes of the Wild</span>
    </h1>

    <div class="np-hero-highlight">
      <span class="np-hero-highlight-intro">
        Ein atmosphärisches Minecraft-Modpack mit Fokus auf Immersion, Erkundung,
        Gemeinschaft und entschleunigten Fortschritt.
      </span>
      <strong>NewPath – Echoes of the Wild</strong> verbindet Natur, Technik,
      Abenteuer und Community zu einer stimmigen Minecraft-Erfahrung.
      <br>
      Kein klassisches „Everything-Pack“, sondern eine lebendige Welt mit klarer
      Richtung, Atmosphäre und gemeinschaftlichem Fortschritt.
    </div>

    <div class="np-hero-actions np-hero-actions-server">
      <button
        class="np-server-copy-hero-button"
        type="button"
        data-server-ip="newpath.minecraft.best"
        onclick="navigator.clipboard.writeText(this.dataset.serverIp); this.querySelector('.np-server-copy-hero-label').textContent='IP kopiert'; setTimeout(() => this.querySelector('.np-server-copy-hero-label').textContent='Server-IP kopieren', 1800);">
        <span class="np-server-copy-hero-icon" aria-hidden="true"></span>
        <span class="np-server-copy-hero-label">Server-IP kopieren</span>
      </button>
      <p class="np-server-copy-hint">Whitelist über Discord erforderlich.</p>
    </div>

  </div>

  <div class="np-hero-logo" aria-label="NewPath – Echoes of the Wild Logo">
    <img
      src="{{ site.baseurl }}/assets/images/logo.png"
      alt="NewPath – Echoes of the Wild Logo"
      width="512"
      height="512"
      decoding="async">
  </div>
</section>

<section class="np-status-bar np-status-bar-v2 np-status-bar-showcase" aria-label="NewPath Kurzinfos">
  <div class="np-status-item">
    <span class="np-status-icon np-status-icon-block" aria-hidden="true"></span>
    <span>
      <small>Minecraft</small>
      <strong>26.1.2</strong>
    </span>
  </div>

  <div class="np-status-item">
    <span class="np-status-icon np-status-icon-forge" aria-hidden="true"></span>
    <span>
      <small>Modloader</small>
      <strong>NeoForge</strong>
    </span>
  </div>

  <div class="np-status-item">
    <span class="np-status-icon np-status-icon-pack" aria-hidden="true"></span>
    <span>
      <small>Modpack</small>
      <strong>CurseForge</strong>
    </span>
  </div>

  <div class="np-status-item">
    <span class="np-status-icon np-status-icon-survival" aria-hidden="true"></span>
    <span>
      <small>Spielmodus</small>
      <strong>Survival</strong>
    </span>
  </div>

  <div class="np-status-item">
    <span class="np-status-icon np-status-icon-platform" aria-hidden="true"></span>
    <span>
      <small>Plattform</small>
      <strong>PC / Java</strong>
    </span>
  </div>
</section>

<div class="np-home-section-separator" aria-hidden="true"></div>

<section class="np-panel np-pathfinder" aria-label="ECHO – Wegbegleiter und Einstieg">
  <div class="np-pathfinder-echo">
    <div class="np-pathfinder-image">
      <img
        src="{{ site.baseurl }}/assets/images/echo/start.png"
        alt="ECHO – Der Wegbegleiter"
        width="512"
        height="512"
        loading="lazy"
        decoding="async">
    </div>
    <div class="np-pathfinder-copy">
      <p class="np-section-kicker">ECHO – Der Wegbegleiter</p>
      <h2>Wähle deinen Pfad.</h2>
      <p>
        ECHO führt dich direkt zu dem Bereich, der gerade zu deiner Situation passt:
        Einstieg, Mitspielen, technische Hilfe oder die Idee hinter NewPath.
      </p>
    </div>
  </div>

  <div class="np-pathfinder-routes">
    <a class="np-route-card" href="{{ site.baseurl }}/faq.html">
      <span class="np-card-icon np-card-icon-blue">?</span>
      <span class="np-route-title">Neu hier</span>
      <span class="np-route-text">Kurze Antworten und Grundlagen.</span>
      <span class="np-route-link">Zum FAQ →</span>
    </a>

    <a class="np-route-card" href="{{ site.baseurl }}/modpack-hilfe.html#installation-setup">
      <span class="np-card-icon np-card-icon-green">◆</span>
      <span class="np-route-title">Mitspielen</span>
      <span class="np-route-text">Installation, Zugang und Start.</span>
      <span class="np-route-link">Zur Hilfe →</span>
    </a>

    <a class="np-route-card" href="{{ site.baseurl }}/modpack-hilfe.html">
      <span class="np-card-icon np-card-icon-gold">⚙</span>
      <span class="np-route-title">Technische Hilfe</span>
      <span class="np-route-text">RAM, Voice Chat, Fehler und Mods.</span>
      <span class="np-route-link">Zur Modpack Hilfe →</span>
    </a>

    <a class="np-route-card" href="{{ site.baseurl }}/philosophie.html">
      <span class="np-card-icon np-card-icon-purple">✦</span>
      <span class="np-route-title">NewPath verstehen</span>
      <span class="np-route-text">Philosophie, Richtung und Atmosphäre.</span>
      <span class="np-route-link">Zur Philosophie →</span>
    </a>
  </div>
</section>

<div class="np-home-section-separator" aria-hidden="true"></div>

<section class="np-panel np-history-panel np-history-panel-compact" aria-label="Entstehungsgeschichte von NewPath">
  <div class="np-history-intro">
    <p class="np-section-kicker">Entstehungsgeschichte</p>
    <h2>Der Weg zu NewPath.</h2>
    <p>
      NewPath ist über viele Jahre aus öffentlichen Minecraft-Projekten entstanden:
      von gemeinsamen Vanilla-Welten über Rebrandings bis hin zum eigenen Modpack mit
      klarer Identität, Atmosphäre und Community-Fokus.
    </p>
  </div>

  <div class="np-history-horizontal" aria-label="Horizontaler NewPath Zeitstrahl">
    <div class="np-history-track" aria-hidden="true"></div>

    <details class="np-history-event" open>
      <summary>
        <span class="np-history-year">seit 2017</span>
        <span class="np-history-node" aria-hidden="true"></span>
        <span class="np-history-title">Öffentliche Minecraft-Projekte</span>
      </summary>
      <div class="np-history-event-body">
        <p>
          M4ximum_ startet und begleitet seit 2017 öffentliche Minecraft-Projekte.
          Diese Zeit bildet die Grundlage für alles, was später zu NewPath werden sollte.
        </p>
      </div>
    </details>

    <details class="np-history-event">
      <summary>
        <span class="np-history-year">2022</span>
        <span class="np-history-node" aria-hidden="true"></span>
        <span class="np-history-title">S.O.O.M. Community Server</span>
      </summary>
      <div class="np-history-event-body">
        <p>
          Gründung des S.O.O.M. Community Servers als Vanilla-Minecraft-Projekt mit
          Plugins. SarahdasFaultier, OutTerror, Ossifant und M4ximum_ waren die
          Initiatoren und Namensgeber des Projektes.
        </p>
      </div>
    </details>

    <details class="np-history-event">
      <summary>
        <span class="np-history-year">2024</span>
        <span class="np-history-node" aria-hidden="true"></span>
        <span class="np-history-title">TriPath</span>
      </summary>
      <div class="np-history-event-body">
        <p>
          Durch den zeitlich bedingten Weggang von Ossifant entsteht TriPath.
          Der Name steht für drei Personen, drei Wege und eine gemeinsame Richtung.
        </p>
      </div>
    </details>

    <details class="np-history-event">
      <summary>
        <span class="np-history-year">25.11.2024</span>
        <span class="np-history-node" aria-hidden="true"></span>
        <span class="np-history-title">NewPath – ein neuer Weg</span>
      </summary>
      <div class="np-history-event-body">
        <p>
          NewPath wird geboren. Aus dem Wunsch nach Rebranding, einem eigenen Modpack
          und dem Schritt weg von reinem Vanilla-Minecraft entsteht ein neues Projekt
          auf Minecraft 1.21.1.
        </p>
      </div>
    </details>

    <details class="np-history-event">
      <summary>
        <span class="np-history-year">22.12.2024</span>
        <span class="np-history-node" aria-hidden="true"></span>
        <span class="np-history-title">Release NewPath 1.0</span>
      </summary>
      <div class="np-history-event-body">
        <p>
          NewPath 1.0 erscheint sechs Tage vor dem geplanten Start und markiert die
          erste eigene Modpack-Version des Projektes.
        </p>
      </div>
    </details>

    <details class="np-history-event">
      <summary>
        <span class="np-history-year">05.12.2025</span>
        <span class="np-history-node" aria-hidden="true"></span>
        <span class="np-history-title">NewPath – Beyond Lands</span>
      </summary>
      <div class="np-history-event-body">
        <p>
          Mit Version 5.0 bekommt NewPath ein weiteres Rebranding, viele Neuerungen
          und macht einen großen Schritt in Richtung eigener Projektidentität.
        </p>
      </div>
    </details>

    <details class="np-history-event np-history-event-future">
      <summary>
        <span class="np-history-year">Q4 2026</span>
        <span class="np-history-node" aria-hidden="true"></span>
        <span class="np-history-title">NewPath – Echoes of the Wild</span>
      </summary>
      <div class="np-history-event-body">
        <p>
          Modpack und Konzept werden komplett neu gedacht. NewPath entsteht in
          Minecraft 26.1.2 von Grund auf neu – atmosphärischer, klarer und
          konsequenter als zuvor.
        </p>
      </div>
    </details>
  </div>
</section>

</div>
