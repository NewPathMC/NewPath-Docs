document.addEventListener("DOMContentLoaded", function () {
  const selectableImages = document.querySelectorAll(".np-help-image img, .np-help-gallery img");

  if (!selectableImages.length) {
    return;
  }

  const lightbox = document.createElement("div");
  lightbox.className = "np-image-lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Bild vergrößert anzeigen");
  lightbox.innerHTML = `
    <div class="np-image-lightbox-panel">
      <button class="np-image-lightbox-close" type="button" aria-label="Bild schließen">×</button>
      <img class="np-image-lightbox-image" alt="">
      <p class="np-image-lightbox-caption"></p>
    </div>
  `;

  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector(".np-image-lightbox-image");
  const lightboxCaption = lightbox.querySelector(".np-image-lightbox-caption");
  const closeButton = lightbox.querySelector(".np-image-lightbox-close");

  function openLightbox(sourceImage) {
    const figure = sourceImage.closest("figure");
    const caption = figure ? figure.querySelector("figcaption") : null;

    lightboxImage.src = sourceImage.currentSrc || sourceImage.src;
    lightboxImage.alt = sourceImage.alt || "";
    lightboxCaption.textContent = caption
      ? caption.textContent.replace(" · Zum Vergrößern anklicken", "")
      : "";

    lightbox.classList.add("is-open");
    document.body.classList.add("np-lightbox-open");
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("np-lightbox-open");
    lightboxImage.removeAttribute("src");
  }

  selectableImages.forEach(function (image) {
    image.setAttribute("tabindex", "0");
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", "Bild vergrößert anzeigen");

    image.addEventListener("click", function () {
      openLightbox(image);
    });

    image.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(image);
      }
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
});