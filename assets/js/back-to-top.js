(() => {
  const SCROLL_THRESHOLD = 180;
  const SCROLLABLE_OFFSET = 24;
  let button = null;

  function pageIsScrollable() {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    return documentHeight > viewportHeight + SCROLLABLE_OFFSET;
  }

  function createBackToTopButton() {
    const element = document.createElement("button");
    element.className = "np-back-to-top";
    element.type = "button";
    element.setAttribute("aria-label", "Zurück nach oben");
    element.innerHTML = '<span aria-hidden="true">↑</span><span>Nach oben</span>';

    element.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    document.body.appendChild(element);
    return element;
  }

  function removeBackToTopButton() {
    if (!button) {
      return;
    }

    button.remove();
    button = null;
  }

  function updateBackToTopButton() {
    const isScrollable = pageIsScrollable();

    if (!isScrollable) {
      removeBackToTopButton();
      return;
    }

    if (!button) {
      button = createBackToTopButton();
    }

    button.classList.toggle("is-visible", window.scrollY > SCROLL_THRESHOLD);
  }

  function scheduleUpdate() {
    window.requestAnimationFrame(updateBackToTopButton);
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("load", scheduleUpdate);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleUpdate);
  } else {
    scheduleUpdate();
  }

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(document.body);
  }
})();
