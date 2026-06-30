document.addEventListener("DOMContentLoaded", () => {
  const PREVIEW_LIMIT = 12;

  const categoryButtons = Array.from(
    document.querySelectorAll("[data-gallery-category-button]")
  );

  const categoryPanels = Array.from(
    document.querySelectorAll("[data-gallery-category-panel]")
  );

  const galleryItems = Array.from(
    document.querySelectorAll("[data-gallery-image]")
  );

  if (!galleryItems.length) {
    return;
  }

  const hasCategoryNavigation = categoryButtons.length && categoryPanels.length;

  const panelState = new Map();

  const getPanelItems = (panel) =>
    Array.from(panel.querySelectorAll("[data-gallery-image]"));

  const getCategoryItems = (categoryId) => {
    const items = galleryItems.filter((item) => item.dataset.galleryCategory === categoryId);
    return items.length ? items : galleryItems;
  };

  const updatePanelPreview = (panel) => {
    const categoryId = panel.dataset.galleryCategoryPanel;
    const items = getPanelItems(panel);
    const state = panelState.get(categoryId);

    if (!state || items.length <= PREVIEW_LIMIT) {
      items.forEach((item) => item.classList.remove("is-gallery-hidden"));
      return;
    }

    const isExpanded = state.expanded;

    items.forEach((item, index) => {
      item.classList.toggle("is-gallery-hidden", !isExpanded && index >= PREVIEW_LIMIT);
    });

    const hiddenCount = Math.max(0, items.length - PREVIEW_LIMIT);

    if (state.button) {
      state.button.classList.toggle("is-expanded", isExpanded);
      state.button.textContent = isExpanded
        ? "Weniger Bilder anzeigen"
        : `Alle ${items.length} Bilder anzeigen`;
    }

    if (state.count) {
      state.count.textContent = isExpanded
        ? `${items.length} Bilder sichtbar`
        : `${Math.min(PREVIEW_LIMIT, items.length)} von ${items.length} Bildern sichtbar · ${hiddenCount} weitere`;
    }
  };

  const setupCompactPanels = () => {
    categoryPanels.forEach((panel) => {
      const categoryId = panel.dataset.galleryCategoryPanel;
      const items = getPanelItems(panel);

      if (!categoryId || items.length <= PREVIEW_LIMIT) {
        return;
      }

      if (panelState.has(categoryId)) {
        updatePanelPreview(panel);
        return;
      }

      const toggleWrap = document.createElement("div");
      toggleWrap.className = "np-gallery-toggle-wrap";

      const toggleButton = document.createElement("button");
      toggleButton.className = "np-gallery-toggle";
      toggleButton.type = "button";

      const count = document.createElement("div");
      count.className = "np-gallery-panel-count";

      toggleWrap.appendChild(toggleButton);
      panel.appendChild(toggleWrap);
      panel.appendChild(count);

      panelState.set(categoryId, {
        expanded: false,
        button: toggleButton,
        count,
      });

      toggleButton.addEventListener("click", () => {
        const state = panelState.get(categoryId);
        state.expanded = !state.expanded;
        updatePanelPreview(panel);

        if (!state.expanded) {
          panel.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });

      updatePanelPreview(panel);
    });
  };

  const setActiveCategory = (categoryId) => {
    categoryButtons.forEach((button) => {
      button.classList.toggle(
        "is-active",
        button.dataset.galleryCategoryButton === categoryId
      );
    });

    categoryPanels.forEach((panel) => {
      const isActive = panel.dataset.galleryCategoryPanel === categoryId;

      panel.classList.toggle("is-active", isActive);

      if (isActive) {
        updatePanelPreview(panel);
      }
    });
  };

  if (hasCategoryNavigation) {
    setupCompactPanels();

    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        setActiveCategory(button.dataset.galleryCategoryButton);
      });
    });
  }

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

  const updateViewer = () => {
    if (!activeImages.length) {
      return;
    }

    const activeItem = activeImages[activeIndex];
    const src = activeItem.dataset.galleryImage;

    viewerImage.classList.add("is-switching");

    window.setTimeout(() => {
      viewerImage.src = src;
      viewerImage.alt = "NewPath Galerie Bild";
      viewerCounter.textContent = `${activeIndex + 1} / ${activeImages.length}`;

      window.setTimeout(() => {
        viewerImage.classList.remove("is-switching");
      }, 80);
    }, 90);
  };

  const openViewer = (categoryId, index) => {
    activeImages = getCategoryItems(categoryId);
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
      const itemsInCategory = getCategoryItems(categoryId);

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
