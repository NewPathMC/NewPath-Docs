document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = Array.from(
    document.querySelectorAll("[data-gallery-category-button]")
  );

  const categoryPanels = Array.from(
    document.querySelectorAll("[data-gallery-category-panel]")
  );

  const galleryItems = Array.from(
    document.querySelectorAll("[data-gallery-image]")
  );

  if (!categoryButtons.length || !categoryPanels.length || !galleryItems.length) {
    return;
  }

  const setActiveCategory = (categoryId) => {
    categoryButtons.forEach((button) => {
      button.classList.toggle(
        "is-active",
        button.dataset.galleryCategoryButton === categoryId
      );
    });

    categoryPanels.forEach((panel) => {
      panel.classList.toggle(
        "is-active",
        panel.dataset.galleryCategoryPanel === categoryId
      );
    });
  };

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveCategory(button.dataset.galleryCategoryButton);
    });
  });

  const lightbox = document.createElement("div");
  lightbox.className = "np-gallery-viewer";
  lightbox.setAttribute("aria-hidden", "true");

  lightbox.innerHTML = `
    <button class="np-gallery-viewer-close" type="button" aria-label="Galerie schließen">×</button>
    <button class="np-gallery-viewer-arrow np-gallery-viewer-prev" type="button" aria-label="Vorheriges Bild">‹</button>
    <figure class="np-gallery-viewer-frame">
      <img class="np-gallery-viewer-image" src="" alt="">
      <figcaption class="np-gallery-viewer-counter"></figcaption>
    </figure>
    <button class="np-gallery-viewer-arrow np-gallery-viewer-next" type="button" aria-label="Nächstes Bild">›</button>
  `;

  document.body.appendChild(lightbox);

  const viewerImage = lightbox.querySelector(".np-gallery-viewer-image");
  const viewerCounter = lightbox.querySelector(".np-gallery-viewer-counter");
  const closeButton = lightbox.querySelector(".np-gallery-viewer-close");
  const prevButton = lightbox.querySelector(".np-gallery-viewer-prev");
  const nextButton = lightbox.querySelector(".np-gallery-viewer-next");

  let activeImages = [];
  let activeIndex = 0;

  const openViewer = (categoryId, index) => {
    activeImages = galleryItems.filter(
      (item) => item.dataset.galleryCategory === categoryId
    );

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

  const updateViewer = () => {
    if (!activeImages.length) {
      return;
    }

    const activeItem = activeImages[activeIndex];
    const src = activeItem.dataset.galleryImage;

    viewerImage.src = src;
    viewerImage.alt = "NewPath Galerie Bild";
    viewerCounter.textContent = `${activeIndex + 1} / ${activeImages.length}`;
  };

  const showPrevious = () => {
    if (!activeImages.length) {
      return;
    }

    activeIndex =
      activeIndex === 0 ? activeImages.length - 1 : activeIndex - 1;

    updateViewer();
  };

  const showNext = () => {
    if (!activeImages.length) {
      return;
    }

    activeIndex =
      activeIndex === activeImages.length - 1 ? 0 : activeIndex + 1;

    updateViewer();
  };

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const categoryId = item.dataset.galleryCategory;
      const itemsInCategory = galleryItems.filter(
        (entry) => entry.dataset.galleryCategory === categoryId
      );

      const index = itemsInCategory.indexOf(item);
      openViewer(categoryId, index);
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