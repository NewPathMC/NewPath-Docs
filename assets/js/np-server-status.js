document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector("[data-np-server-status]");

  if (!card) {
    return;
  }

  /*
    Hier später die öffentliche Serveradresse eintragen, z. B.:
    const FALLBACK_SERVER_ADDRESS = "newpath.minecraft.best";

    Hinweis:
    Bei GitHub Pages läuft diese Abfrage direkt im Browser.
    Die Adresse ist dadurch im Quellcode sichtbar.
  */
  const FALLBACK_SERVER_ADDRESS = "";

  const address = (card.dataset.serverAddress || FALLBACK_SERVER_ADDRESS || "").trim();

  const label = card.querySelector("[data-np-status-label]");
  const detail = card.querySelector("[data-np-status-detail]");
  const players = card.querySelector("[data-np-status-players]");
  const version = card.querySelector("[data-np-status-version]");
  const dot = card.querySelector("[data-np-status-dot]");
  const refreshButton = card.querySelector("[data-np-status-refresh]");

  function setState(state) {
    card.classList.remove("is-online", "is-offline", "is-loading", "is-error", "is-unconfigured");
    card.classList.add("is-" + state);
  }

  function setLoading() {
    setState("loading");
    label.textContent = "Wird geladen …";
    detail.textContent = "Serverstatus wird abgefragt.";
    players.textContent = "–";
    version.textContent = "–";

    if (refreshButton) {
      refreshButton.disabled = true;
      refreshButton.textContent = "Aktualisiere …";
    }
  }

  function setUnconfigured() {
    setState("unconfigured");
    label.textContent = "Noch nicht verbunden";
    detail.textContent = "Trage die Serveradresse in assets/js/np-server-status.js oder im data-server-address-Attribut ein.";
    players.textContent = "–";
    version.textContent = "–";
  }

  function cleanText(value) {
    if (Array.isArray(value)) {
      return value.join(" ").trim();
    }

    return String(value || "").trim();
  }

  function renderStatus(data) {
    if (!data || data.online !== true) {
      setState("offline");
      label.textContent = "Offline";
      detail.textContent = "Der Server ist aktuell nicht erreichbar oder antwortet nicht auf die Statusabfrage.";
      players.textContent = "0";
      version.textContent = "–";
      return;
    }

    const onlinePlayers = data.players && typeof data.players.online === "number"
      ? data.players.online
      : 0;

    const maxPlayers = data.players && typeof data.players.max === "number"
      ? data.players.max
      : null;

    const versionText = cleanText(data.version) || "Unbekannt";
    const motdText = data.motd && data.motd.clean ? cleanText(data.motd.clean) : "";

    setState("online");
    label.textContent = "Online";
    detail.textContent = motdText || "Der Server ist erreichbar.";
    players.textContent = maxPlayers !== null ? onlinePlayers + " / " + maxPlayers : String(onlinePlayers);
    version.textContent = versionText;
  }

  function setError(error) {
    setState("error");
    label.textContent = "Status unbekannt";
    detail.textContent = "Die Statusabfrage konnte nicht geladen werden.";
    players.textContent = "–";
    version.textContent = "–";

    if (error) {
      console.warn("NewPath Serverstatus:", error);
    }
  }

  function finishButton() {
    if (!refreshButton) {
      return;
    }

    refreshButton.disabled = false;
    refreshButton.textContent = "Status aktualisieren";
  }

  async function loadStatus() {
    if (!address) {
      setUnconfigured();
      finishButton();
      return;
    }

    setLoading();

    try {
      const endpoint = "https://api.mcsrvstat.us/3/" + encodeURIComponent(address);
      const response = await fetch(endpoint, {
        cache: "no-store",
        headers: {
          "Accept": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Status API antwortet mit HTTP " + response.status);
      }

      const data = await response.json();
      renderStatus(data);
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
