document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(
    document.querySelectorAll("[data-logo-evolution-image]")
  );

  if (!items.length) {
    return;
  }

  items.forEach((item) => {
    const image = item.querySelector("img");

    if (!image) {
      item.classList.add("is-missing-logo");
      return;
    }

    image.addEventListener(
      "error",
      () => {
        item.classList.add("is-missing-logo");
        image.remove();
      },
      { once: true }
    );

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

  const viewerImage = viewer.querySelector(".np-logo-evolution-viewer-image");
  const viewerCaption = viewer.querySelector(".np-logo-evolution-viewer-caption");
  const closeButton = viewer.querySelector(".np-logo-evolution-viewer-close");
  const prevButton = viewer.querySelector(".np-logo-evolution-viewer-prev");
  const nextButton = viewer.querySelector(".np-logo-evolution-viewer-next");

  let activeIndex = 0;

  const updateViewer = () => {
    const item = items[activeIndex];

    if (!item) {
      return;
    }

    const src = item.dataset.logoEvolutionImage;
    const label = item.dataset.logoEvolutionLabel || "NewPath Logo";

    viewerImage.classList.add("is-switching");

    window.setTimeout(() => {
      viewerImage.src = src;
      viewerImage.alt = label;
      viewerCaption.textContent = `${label} · ${activeIndex + 1} / ${items.length}`;

      window.setTimeout(() => {
        viewerImage.classList.remove("is-switching");
      }, 80);
    }, 90);
  };

  const openViewer = (index) => {
    activeIndex = index;
    updateViewer();

    viewer.classList.add("is-open");
    viewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("np-logo-evolution-viewer-open");
  };

  const closeViewer = () => {
    viewer.classList.remove("is-open");
    viewer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("np-logo-evolution-viewer-open");

    viewerImage.src = "";
    viewerImage.alt = "";
  };

  const showPrevious = () => {
    activeIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    updateViewer();
  };

  const showNext = () => {
    activeIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    updateViewer();
  };

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      openViewer(index);
    });
  });

  closeButton.addEventListener("click", closeViewer);
  prevButton.addEventListener("click", showPrevious);
  nextButton.addEventListener("click", showNext);

  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
      closeViewer();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!viewer.classList.contains("is-open")) {
      return;
    }

    if (event.key === "Escape") {
      closeViewer();
    }

    if (event.key === "ArrowLeft") {
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      showNext();
    }
  });
});
