---
layout: default
title: Server & Welt
nav_order: 3
permalink: /server.html
---

<!-- AUTO_UPDATED_START -->
<<<<<<< HEAD
<p class="np-last-updated">Zuletzt aktualisiert: 17.06.2026</p>
=======
<p class="np-last-updated">Zuletzt aktualisiert: 17.06.2026 14:38 Uhr</p>
>>>>>>> c70f4f5c73ece6b4b0831c9fe09c9cb9874227aa
<!-- AUTO_UPDATED_END -->

<section class="echo-page-box echo-page-box-server">
  <div class="echo-page-image">
    <img
      src="{{ site.baseurl }}/assets/images/echo/echo-server.png"
      alt="ECHO erklärt Server und Welt von NewPath"
      width="512"
      height="512"
      loading="lazy"
      decoding="async">
  </div>

  <div class="echo-page-content">
    <p class="echo-page-kicker">ECHO – Der Wegbegleiter</p>
    <h2>Alles Wichtige zum laufenden Serverbetrieb.</h2>
    <p>
      Hier findest du die wichtigsten Informationen zum laufenden Serverbetrieb:
      Zugang, Versionen, Neustarts und später auch Live-Status oder Weltkarte.
    </p>
  </div>
</section>

<section class="np-page-section np-server-section np-server-dashboard">
  <div class="np-section-header">
    <h1 class="np-title">Server & Welt</h1>
  </div>

  <div class="np-server-dashboard-main-grid">
    <section class="np-server-status-hero" data-np-server-status data-server-address="newpath.minecraft.best" aria-label="Aktueller Serverstatus">
      <div class="np-server-status-hero-main">
        <p class="np-server-kicker">Live-Status</p>
        <div class="np-server-status-titleline">
          <h2 data-np-status-label>Wird geladen …</h2>
          <span class="np-server-live-dot" data-np-status-dot aria-hidden="true"></span>
        </div>
        <p data-np-status-detail>Serverstatus wird abgefragt.</p>
      </div>

      <div class="np-server-status-hero-stats">
        <span>
          <small>Spieler</small>
          <strong data-np-status-players>–</strong>
        </span>
        <span>
          <small>Serverantwort</small>
          <strong data-np-status-version>–</strong>
        </span>
        <span>
          <small>Modpack</small>
          <strong>Minecraft 26.1.2</strong>
        </span>
      </div>

      <button class="np-server-refresh" type="button" data-np-status-refresh>
        Status aktualisieren
      </button>
    </section>

    <article class="np-server-dashboard-card np-server-restart-card">
      <p class="np-server-kicker">Neustarts</p>
      <h2>Automatische Restarts</h2>
      <p>
        Regelmäßige Neustarts helfen dabei, den Server langfristig stabil zu halten.
      </p>

      <div class="np-server-time-list">
        <span>05:00 Uhr</span>
        <span>17:00 Uhr</span>
      </div>
    </article>
  </div>

  <article class="np-server-dashboard-card np-server-map-card">
    <p class="np-server-kicker">Weltkarte</p>
    <h2>BlueMap vorbereitet</h2>
    <p>
      Sobald BlueMap öffentlich erreichbar ist, kann die interaktive Weltkarte hier eingebunden werden.
    </p>
    <div class="np-server-map-placeholder">
      <span>BlueMap folgt</span>
      <small>Später als eingebettete Karte oder direkter Kartenlink</small>
    </div>
  </article>
</section>

<script src="{{ site.baseurl }}/assets/js/np-server-status.js" defer></script>
