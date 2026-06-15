---
layout: default
title: Galerie
nav_order: 8
permalink: /galerie.html
---

<section class="echo-page-box echo-page-box-gallery">
  <div class="echo-page-image">
    <img src="{{ '/assets/images/echo/echo-server.png' | relative_url }}" alt="ECHO Galerie">
  </div>

  <div class="echo-page-content">
    <p class="echo-page-kicker">ECHO – DER WEGEBEGLEITER</p>
    <h2>Momente aus NewPath.</h2>
    <p>
      Hier sammeln wir Eindrücke, Erinnerungen und besondere Augenblicke aus der Welt von NewPath.
    </p>
  </div>
</section>

<section class="np-page-section np-gallery-page">

  <header class="np-section-header">
    <p class="np-section-kicker">NewPath Galerie</p>
    <h1 class="np-title">Bilder aus unserer Welt.</h1>
    <p class="np-lead">
      Wähle eine Kategorie und klicke dich durch die Galerie.
    </p>
  </header>

  <div class="np-gallery-category-grid" aria-label="Galerie-Kategorien">
    {% for category in site.data.gallery.categories %}
      <button
        class="np-gallery-category-card{% if forloop.first %} is-active{% endif %}"
        type="button"
        data-gallery-category-button="{{ category.id }}"
      >
        <span class="np-gallery-category-kicker">Galerie</span>
        <strong>{{ category.label }}</strong>
        <small>{{ category.intro }}</small>
      </button>
    {% endfor %}
  </div>

  {% for category in site.data.gallery.categories %}
    <section
      class="np-gallery-category-panel{% if forloop.first %} is-active{% endif %}"
      data-gallery-category-panel="{{ category.id }}"
    >
      <div class="np-gallery-category-heading">
        <p class="np-section-kicker">Kategorie</p>
        <h2>{{ category.label }}</h2>
      </div>

      <div class="np-gallery-grid">
        {% for image in category.images %}
          <button
            class="np-gallery-item"
            type="button"
            data-gallery-image="{{ image | relative_url }}"
            data-gallery-category="{{ category.id }}"
            data-gallery-index="{{ forloop.index0 }}"
            aria-label="Galeriebild öffnen"
          >
            <img src="{{ image | relative_url }}" alt="">
          </button>
        {% endfor %}
      </div>
    </section>
  {% endfor %}

</section>