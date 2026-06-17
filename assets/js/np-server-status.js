document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector("[data-np-server-status]");

  if (!card) {
    return;
  }

  /*
    Website-Version des Discord-Statusprinzips:
    - automatische Aktualisierung alle 10 Sekunden
    - gleiche Kernwerte wie im Discord-Embed
    - keine MOTD
    - keine technische Serverantwort
    - Button bleibt nur als manuelle Sofort-Aktualisierung
  */

  const FALLBACK_SERVER_ADDRESS = "newpath.minecraft.best";
  const FALLBACK_SERVER_PORT = "25565";
  const REFRESH_SECONDS = 10;

  const rawAddress = (card.dataset.serverAddress || FALLBACK_SERVER_ADDRESS || "").trim();
  const address = rawAddress.includes(":") ? rawAddress : rawAddress + ":" + FALLBACK_SERVER_PORT;

  const label = card.querySelector("[data-np-status-label]");
  const players = card.querySelector("[data-np-status-players]");
  const updated = card.querySelector("[data-np-status-updated]");
  const refreshButton = card.querySelector("[data-np-status-refresh]");

  let refreshTimer = null;
  let isLoading = false;

  function setState(state) {
    card.classList.remove("is-online", "is-offline", "is-loading", "is-error", "is-unconfigured");
    card.classList.add("is-" + state);
  }

  function formatTime(date) {
    return new Intl.DateTimeFormat("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(date).replace(",", " –");
  }

  function setUpdated(prefix = "Letzte Aktualisierung") {
    if (updated) {
      updated.textContent = prefix + ": " + formatTime(new Date()) + " · alle " + REFRESH_SECONDS + "s";
    }
  }

  function setButtonLoading(active) {
    if (!refreshButton) {
      return;
    }

    refreshButton.disabled = active;
    refreshButton.textContent = active ? "Prüft …" : "Aktualisieren";
  }

  function setLoading() {
    setState("loading");
    label.textContent = "Wird geprüft …";
    setButtonLoading(true);
  }

  function setUnconfigured() {
    setState("unconfigured");
    label.textContent = "Nicht konfiguriert";
    players.textContent = "–";
    setUpdated();
  }

  function setOffline() {
    setState("offline");
    label.textContent = "Offline";
    players.textContent = "0/0";
    setUpdated();
  }

  function setUnknown(error) {
    setState("error");
    label.textContent = "Unbekannt";
    players.textContent = "–";
    setUpdated();

    if (error) {
      console.warn("NewPath Serverstatus:", error);
    }
  }

  function readMcstatusIo(data) {
    if (!data || data.online !== true) {
      return null;
    }

    const onlinePlayers =
      data.players && typeof data.players.online === "number"
        ? data.players.online
        : 0;

    const maxPlayers =
      data.players && typeof data.players.max === "number"
        ? data.players.max
        : 0;

    return {
      online: true,
      playersOnline: onlinePlayers,
      playersMax: maxPlayers
    };
  }

  function renderOnline(status) {
    setState("online");
    label.textContent = "Online";
    players.textContent = status.playersOnline + "/" + status.playersMax;
    setUpdated();
  }

  async function fetchMcstatusIo() {
    const endpoint =
      "https://api.mcstatus.io/v2/status/java/" +
      encodeURIComponent(address) +
      "?_=" +
      Date.now();

    const response = await fetch(endpoint, {
      cache: "no-store",
      headers: {
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("mcstatus.io antwortet mit HTTP " + response.status);
    }

    const data = await response.json();
    return readMcstatusIo(data);
  }

  async function loadStatus({ silent = false } = {}) {
    if (isLoading) {
      return;
    }

    if (!address) {
      setUnconfigured();
      return;
    }

    isLoading = true;

    if (!silent) {
      setLoading();
    } else {
      setButtonLoading(true);
    }

    try {
      const status = await fetchMcstatusIo();

      if (status && status.online === true) {
        renderOnline(status);
      } else {
        setOffline();
      }
    } catch (error) {
      /*
        Wichtig:
        Bei einem API-/Netzwerkfehler zeigen wir nicht einfach weiter Online.
        So bleibt kein falscher grüner Zustand stehen.
      */
      setUnknown(error);
    } finally {
      isLoading = false;
      setButtonLoading(false);
    }
  }

  function startAutoRefresh() {
    if (refreshTimer) {
      window.clearInterval(refreshTimer);
    }

    refreshTimer = window.setInterval(function () {
      loadStatus({ silent: true });
    }, REFRESH_SECONDS * 1000);
  }

  if (refreshButton) {
    refreshButton.addEventListener("click", function () {
      loadStatus({ silent: false });
      startAutoRefresh();
    });
  }

  loadStatus({ silent: false });
  startAutoRefresh();
});
