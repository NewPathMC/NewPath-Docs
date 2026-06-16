document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(document.querySelectorAll("[data-logo-evolution-image]"));
  if (!items.length) return;

  logoItems.forEach((item) => {
    const image = item.querySelector("img");

    if (!image) {
      item.classList.add("is-missing-logo");
      return;
    }

    image.addEventListener("error", () => {
      item.classList.add("is-missing-logo");
      image.remove();
    }, { once: true });

    if (image.complete && image.naturalWidth === 0) {
      item.classList.add("is-missing-logo");
      image.remove();
    }
  });


  const viewer = document.createElement("div");
  viewer.className = "np-logo-evolution-viewer";
  viewer.setAttribute("aria-hidden", "true");
  viewer.innerHTML = `
    <button class="np-logo-evolution-viewer-close" type="button" aria-label="Logo schließen">×</button>
    <button class="np-logo-evolution-viewer-arrow np-logo-evolution-viewer-prev" type="button" aria-label="Vorheriges Logo">‹</button>
    <figure class="np-logo-evolution-viewer-frame">
      <img class="np-logo-evolution-viewer-image" src="" alt="">
      <figcaption class="np-logo-evolution-viewer-caption"></figcaption>
    </figure>
    <button class="np-logo-evolution-viewer-arrow np-logo-evolution-viewer-next" type="button" aria-label="Nächstes Logo">›</button>
  `;
  document.body.appendChild(viewer);

  const image = viewer.querySelector(".np-logo-evolution-viewer-image");
  const caption = viewer.querySelector(".np-logo-evolution-viewer-caption");
  const close = viewer.querySelector(".np-logo-evolution-viewer-close");
  const prev = viewer.querySelector(".np-logo-evolution-viewer-prev");
  const next = viewer.querySelector(".np-logo-evolution-viewer-next");
  let index = 0;

  const update = () => {
    const item = items[index];
    const label = item.dataset.logoEvolutionLabel || "NewPath Logo";
    image.classList.add("is-switching");
    window.setTimeout(() => {
      image.src = item.dataset.logoEvolutionImage;
      image.alt = label;
      caption.textContent = `${label} · ${index + 1} / ${items.length}`;
      window.setTimeout(() => image.classList.remove("is-switching"), 80);
    }, 90);
  };

  const open = (nextIndex) => {
    index = nextIndex;
    update();
    viewer.classList.add("is-open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("np-logo-evolution-viewer-open");
  };

  const closeViewer = () => {
    viewer.classList.remove("is-open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("np-logo-evolution-viewer-open");
    image.src = "";
    image.alt = "";
  };

  const previous = () => {
    index = index === 0 ? items.length - 1 : index - 1;
    update();
  };

  const nextLogo = () => {
    index = index === items.length - 1 ? 0 : index + 1;
    update();
  };

  items.forEach((item, itemIndex) => item.addEventListener("click", () => open(itemIndex)));
  close.addEventListener("click", closeViewer);
  prev.addEventListener("click", previous);
  next.addEventListener("click", nextLogo);
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) closeViewer();
  });

  document.addEventListener("keydown", (event) => {
    if (!viewer.classList.contains("is-open")) return;
    if (event.key === "Escape") closeViewer();
    if (event.key === "ArrowLeft") previous();
    if (event.key === "ArrowRight") nextLogo();
  });
});
