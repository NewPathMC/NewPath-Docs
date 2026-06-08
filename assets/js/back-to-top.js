(() => {
  const SCROLL_THRESHOLD = 180;
  const SCROLLABLE_OFFSET = 24;

  function createBackToTopButton() {
    const button = document.createElement("button");
    button.className = "np-back-to-top";
    button.type = "button";
    button.setAttribute("aria-label", "Zurück nach oben");
    button.innerHTML = '<span aria-hidden="true">↑</span><span>Nach oben</span>';

    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    document.body.appendChild(button);
    return button;
  }

  const button = createBackToTopButton();

  function updateBackToTopButton() {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const isScrollable = documentHeight > viewportHeight + SCROLLABLE_OFFSET;
    const isScrolledEnough = window.scrollY > SCROLL_THRESHOLD;

    button.classList.toggle("is-visible", isScrollable && isScrolledEnough);
    button.classList.toggle("is-scrollable", isScrollable);
  }

  window.addEventListener("scroll", updateBackToTopButton, { passive: true });
  window.addEventListener("resize", updateBackToTopButton);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateBackToTopButton);
  } else {
    updateBackToTopButton();
  }

  window.addEventListener("load", updateBackToTopButton);
})();