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

<!-- AUTO_UPDATED_START -->
<p class="np-last-updated">Zuletzt aktualisiert: 09.06.2026 16:29 Uhr</p>
<!-- AUTO_UPDATED_END -->
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

<section class="np-server-ip-strip" aria-label="NewPath Server-IP">
  <div class="np-server-ip-strip-copy">
    <p class="np-section-kicker">Serverzugang</p>
    <strong>Server-IP kopieren</strong>
    <span>Für den Beitritt ist eine erfolgreiche Whitelist über Discord erforderlich.</span>
  </div>

  <div class="np-server-ip-strip-action">
    <code id="np-server-ip">DEINE-SERVER-IP-HIER</code>
    <button
      class="np-server-copy-button"
      type="button"
      onclick="navigator.clipboard.writeText(document.getElementById('np-server-ip').textContent.trim()); this.textContent='Kopiert!'; setTimeout(() => this.textContent='IP kopieren', 1800);">
      IP kopieren
    </button>
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

<section class="np-panel np-history-panel" aria-label="Entstehungsgeschichte von NewPath">
  <div class="np-history-intro">
    <p class="np-section-kicker">Entstehungsgeschichte</p>
    <h2>Wie NewPath seinen eigenen Weg gefunden hat.</h2>
    <p>
      NewPath ist nicht als reine Modsammlung entstanden, sondern aus dem Wunsch nach
      einer Welt mit Richtung, Atmosphäre und Gemeinschaft. Jede neue Version hat geholfen,
      klarer zu verstehen, was NewPath ausmacht.
    </p>
  </div>

  <div class="np-history-timeline" aria-label="NewPath Zeitstrahl">
    <article class="np-history-step">
      <span class="np-history-dot" aria-hidden="true"></span>
      <p class="np-card-kicker">Ursprung</p>
      <h3>Eine gemeinsame Welt</h3>
      <p>
        Am Anfang stand die Idee, Minecraft wieder gemeinschaftlicher und persönlicher
        zu erleben – mit Orten, Geschichten und einem echten Gefühl von Zusammenhalt.
      </p>
    </article>

    <article class="np-history-step">
      <span class="np-history-dot" aria-hidden="true"></span>
      <p class="np-card-kicker">Erfahrung</p>
      <h3>Aus Versionen lernen</h3>
      <p>
        Mit jeder Projektphase wurde deutlicher, welche Inhalte NewPath stärken und
        welche nur Masse erzeugen. Daraus entstand eine bewusstere Richtung.
      </p>
    </article>

    <article class="np-history-step">
      <span class="np-history-dot" aria-hidden="true"></span>
      <p class="np-card-kicker">Echoes of the Wild</p>
      <h3>Ein klarerer Neuanfang</h3>
      <p>
        Echoes of the Wild verbindet Natur, Technik und Abenteuer stärker mit der
        Community-Idee und gibt NewPath eine eigene, wiedererkennbare Identität.
      </p>
    </article>
  </div>
</section>

</div>
