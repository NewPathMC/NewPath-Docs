document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector("[data-np-server-status]");

  if (!card) {
    return;
  }

  const FALLBACK_SERVER_ADDRESS = "newpath.minecraft.best";
  const address = (card.dataset.serverAddress || FALLBACK_SERVER_ADDRESS || "").trim();

  const label = card.querySelector("[data-np-status-label]");
  const players = card.querySelector("[data-np-status-players]");
  const ping = card.querySelector("[data-np-status-ping]");
  const updated = card.querySelector("[data-np-status-updated]");
  const refreshButton = card.querySelector("[data-np-status-refresh]");

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
      minute: "2-digit"
    }).format(date).replace(",", " –");
  }

  function setUpdated() {
    if (updated) {
      updated.textContent = "Letzte Aktualisierung: " + formatTime(new Date());
    }
  }

  function finishButton() {
    if (!refreshButton) {
      return;
    }

    refreshButton.disabled = false;
    refreshButton.textContent = "Aktualisieren";
  }

  function setLoading() {
    setState("loading");
    label.textContent = "Wird geladen …";
    players.textContent = "–";
    ping.textContent = "–";

    if (refreshButton) {
      refreshButton.disabled = true;
      refreshButton.textContent = "Lädt …";
    }
  }

  function setUnconfigured() {
    setState("unconfigured");
    label.textContent = "Nicht konfiguriert";
    players.textContent = "–";
    ping.textContent = "–";
    setUpdated();
  }

  function setOffline() {
    setState("offline");
    label.textContent = "Offline";
    players.textContent = "0";
    ping.textContent = "–";
    setUpdated();
  }

  function renderStatus(data, requestTime) {
    if (!data || data.online !== true) {
      setOffline();
      return;
    }

    const onlinePlayers = data.players && typeof data.players.online === "number"
      ? data.players.online
      : 0;

    const maxPlayers = data.players && typeof data.players.max === "number"
      ? data.players.max
      : null;

    setState("online");
    label.textContent = "Online";
    players.textContent = maxPlayers !== null ? onlinePlayers + "/" + maxPlayers : String(onlinePlayers);
    ping.textContent = requestTime + " ms";
    setUpdated();
  }

  function setError(error) {
    setState("error");
    label.textContent = "Unbekannt";
    players.textContent = "–";
    ping.textContent = "–";
    setUpdated();

    if (error) {
      console.warn("NewPath Serverstatus:", error);
    }
  }

  async function loadStatus() {
    if (!address) {
      setUnconfigured();
      finishButton();
      return;
    }

    setLoading();

    const startedAt = performance.now();

    try {
      /*
        Wir nutzen bewusst mcstatus.io statt mcsrvstat.us.
        mcsrvstat.us cached Antworten mehrere Minuten, wodurch der Server
        nach dem Stoppen noch als online angezeigt werden kann.
      */
      const endpoint = "https://api.mcstatus.io/v2/status/java/" + encodeURIComponent(address) + "?_=" + Date.now();

      const response = await fetch(endpoint, {
        cache: "no-store",
        headers: {
          "Accept": "application/json"
        }
      });

      const requestTime = Math.max(1, Math.round(performance.now() - startedAt));

      if (!response.ok) {
        throw new Error("Status API antwortet mit HTTP " + response.status);
      }

      const data = await response.json();
      renderStatus(data, requestTime);
    } catch (error) {
      setError(error);
    } finally {
      finishButton();
    }
  }

  if (refreshButton) {
    refreshButton.addEventListener("click", loadStatus);
  }

  loadStatus();
});