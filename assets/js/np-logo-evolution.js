document.addEventListener("DOMContentLoaded", () => {
  const logoItems = Array.from(
    document.querySelectorAll("[data-logo-evolution-image]")
  );

  if (!logoItems.length) {
    return;
  }

  logoItems.forEach((item) => {
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

  /*
    Absichtlich dieselben Klassen wie die Galerie-Lightbox.
    Dadurch sehen Close-/Weiter-Buttons gleich aus und verhalten sich gleich.
  */
  const lightbox = document.createElement("div");
  lightbox.className = "np-gallery-viewer np-logo-evolution-gallery-viewer";
  lightbox.setAttribute("aria-hidden", "true");

  lightbox.innerHTML = `
    <button class="np-gallery-viewer-close" type="button" aria-label="Logo schließen">×</button>
    <button class="np-gallery-viewer-arrow np-gallery-viewer-prev" type="button" aria-label="Vorheriges Logo">‹</button>
    <figure class="np-gallery-viewer-frame">
      <img class="np-gallery-viewer-image" src="" alt="">
      <figcaption class="np-gallery-viewer-counter"></figcaption>
    </figure>
    <button class="np-gallery-viewer-arrow np-gallery-viewer-next" type="button" aria-label="Nächstes Logo">›</button>
  `;

  document.body.appendChild(lightbox);

  const viewerImage = lightbox.querySelector(".np-gallery-viewer-image");
  const viewerCounter = lightbox.querySelector(".np-gallery-viewer-counter");
  const closeButton = lightbox.querySelector(".np-gallery-viewer-close");
  const prevButton = lightbox.querySelector(".np-gallery-viewer-prev");
  const nextButton = lightbox.querySelector(".np-gallery-viewer-next");

  let activeIndex = 0;

  const updateViewer = () => {
    if (!logoItems.length) {
      return;
    }

    const activeItem = logoItems[activeIndex];
    const src = activeItem.dataset.logoEvolutionImage;
    const label = activeItem.dataset.logoEvolutionLabel || "NewPath Logo";

    viewerImage.classList.add("is-switching");

    window.setTimeout(() => {
      viewerImage.src = src;
      viewerImage.alt = label;
      viewerCounter.textContent = `${activeIndex + 1} / ${logoItems.length}`;

      window.setTimeout(() => {
        viewerImage.classList.remove("is-switching");
      }, 80);
    }, 90);
  };

  const openViewer = (index) => {
    activeIndex = index;
    updateViewer();

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("np-gallery-viewer-open");
  };

  const closeViewer = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("np-gallery-viewer-open");

    viewerImage.src = "";
    viewerImage.alt = "";
  };

  const showPrevious = () => {
    if (!logoItems.length) {
      return;
    }

    activeIndex =
      activeIndex === 0 ? logoItems.length - 1 : activeIndex - 1;

    updateViewer();
  };

  const showNext = () => {
    if (!logoItems.length) {
      return;
    }

    activeIndex =
      activeIndex === logoItems.length - 1 ? 0 : activeIndex + 1;

    updateViewer();
  };

  logoItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      openViewer(index);
    });
  });

  closeButton.addEventListener("click", closeViewer);
  prevButton.addEventListener("click", showPrevious);
  nextButton.addEventListener("click", showNext);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeViewer();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) {
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
