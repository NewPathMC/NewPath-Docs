---
layout: default
title: Server & Welt
nav_order: 3
permalink: /server.html
---

<!-- AUTO_UPDATED_START -->
<p class="np-last-updated">Zuletzt aktualisiert: 17.06.2026 14:21 Uhr</p>
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

<section class="np-page-section np-server-section">
  <div class="np-section-header">
    <h1 class="np-title">Server & Welt</h1>
    <p class="np-section-lead">
      Diese Seite bündelt die wichtigsten Informationen zum aktiven NewPath-Server.
      Details zu Installation, RAM, Voice Chat und Fehlerbehebung findest du weiterhin in der Modpack Hilfe.
    </p>
  </div>

  <div class="np-server-overview">
    <article class="np-server-main-card">
      <p class="np-server-kicker">Zugang</p>
      <h2>Whitelist-Projekt</h2>
      <p>
        NewPath ist ein freigeschaltetes Community-Projekt. Die Server-IP wird nach erfolgreicher
        Whitelist im Discord bereitgestellt.
      </p>
      <ul>
        <li>Whitelist über Discord</li>
        <li>Server-IP im freigeschalteten Bereich</li>
        <li>Regeln werden mit der Whitelist akzeptiert</li>
      </ul>
    </article>

    <aside class="np-server-side-stack">
      <div class="np-server-mini-card np-server-live-card" data-np-server-status data-server-address="">
        <div class="np-server-live-head">
          <div>
            <p class="np-server-kicker">Status</p>
            <strong data-np-status-label>Wird geladen …</strong>
          </div>
          <span class="np-server-live-dot" data-np-status-dot aria-hidden="true"></span>
        </div>

        <span data-np-status-detail>Serveradresse noch nicht konfiguriert.</span>

        <div class="np-server-live-stats" aria-label="Serverstatus Details">
          <span>
            <small>Spieler</small>
            <strong data-np-status-players>–</strong>
          </span>
          <span>
            <small>Version</small>
            <strong data-np-status-version>–</strong>
          </span>
        </div>

        <button class="np-server-refresh" type="button" data-np-status-refresh>
          Status aktualisieren
        </button>
      </div>

      <div class="np-server-mini-card">
        <p class="np-server-kicker">Version</p>
        <strong>Minecraft 26.1.2</strong>
        <span>NeoForge · NewPath – Echoes of the Wild</span>
      </div>
    </aside>
  </div>

  <div class="np-server-info-grid">
    <article class="np-server-info-card">
      <p class="np-server-kicker">Neustarts</p>
      <h2>Automatische Restarts</h2>
      <p>
        Regelmäßige Neustarts helfen dabei, den Server langfristig stabil zu halten.
      </p>
      <ul>
        <li>05:00 Uhr</li>
        <li>17:00 Uhr</li>
      </ul>
    </article>

    <article class="np-server-info-card">
      <p class="np-server-kicker">Weltkarte</p>
      <h2>Webmap vorbereitet</h2>
      <p>
        Eine öffentliche Weltkarte ist später denkbar, zum Beispiel über eine geeignete Webmap-Lösung.
      </p>
      <div class="np-server-placeholder">Weltkarte folgt</div>
    </article>
  </div>
</section>


<script src="{{ site.baseurl }}/assets/js/np-server-status.js" defer></script>
