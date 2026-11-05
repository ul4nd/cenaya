/**
 * CENAYA - Script Interaktivitas Utama
 * Mengelola modal detail produk dengan variasi warna interaktif, pemesanan WhatsApp resmi,
 * filter koleksi, showcase hotspot, lookbook slider, dan FAQ accordion.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderCategories();
  renderProducts("all");
  initCategoryFilters();
  initProductShowcase();
  renderWhyCenaya();
  renderLookbook();
  initLookbookSlider();
  renderFaq();
  initProductDetailModal();
  initScrollEffects();
  initBackToTop();
  setupWhatsAppLinks();
});

/* State Global Modal */
let currentProduct = null;
let currentSelectedVariant = null;

/* ==========================================================================
   1. NAVBAR & MOBILE NAVIGATION
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector(".site-header");
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const mobileDrawer = document.querySelector(".mobile-nav-drawer");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 25) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener("click", () => {
      hamburgerBtn.classList.toggle("active");
      mobileDrawer.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburgerBtn.classList.remove("active");
        mobileDrawer.classList.remove("open");
      });
    });

    document.addEventListener("click", (e) => {
      if (!header.contains(e.target) && mobileDrawer.classList.contains("open")) {
        hamburgerBtn.classList.remove("active");
        mobileDrawer.classList.remove("open");
      }
    });
  }
}

/* ==========================================================================
   2. CATEGORY / COLLECTION EXPLORER
   ========================================================================== */
function renderCategories() {
  const categoryGrid = document.getElementById("category-grid");
  if (!categoryGrid) return;

  const categories = (window.CENAYA_CONFIG?.categories || []).filter((c) => c.id !== "all");

  categoryGrid.innerHTML = categories
    .map(
      (cat) => `
    <div class="category-card" data-category="${cat.id}">
      <img src="${cat.image}" alt="${cat.title}" class="category-image" loading="lazy">
      <div class="category-overlay">
        <span class="category-badge-chip">${cat.badge}</span>
        <h3 class="category-title">${cat.name}</h3>
        <p class="category-desc">${cat.desc}</p>
        <span class="category-link-text">
          Jelajahi Koleksi 
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </div>
    </div>
  `
    )
    .join("");

  const categoryCards = categoryGrid.querySelectorAll(".category-card");
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const catId = card.getAttribute("data-category");
      setActiveFilter(catId);
      renderProducts(catId);

      const collectionSection = document.getElementById("collection");
      if (collectionSection) {
        collectionSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ==========================================================================
   3. FEATURED PRODUCTS & FILTERING (Card dengan Preview Variasi Warna)
   ========================================================================== */
function renderProducts(categoryId = "all") {
  const productGrid = document.getElementById("product-grid");
  if (!productGrid) return;

  const allProducts = window.CENAYA_CONFIG?.products || [];
  const filtered =
    categoryId === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === categoryId);

  if (filtered.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 0;">
        <p style="font-size: 1.1rem; color: var(--color-muted);">Belum ada produk di kategori ini.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filtered
    .map((product) => {
      // Preview titik warna variasi
      const variantDotsHtml = (product.variants || [])
        .slice(0, 4)
        .map(
          (v) => `<span class="color-dot-mini" style="background-color: ${v.hex};" title="${v.name}"></span>`
        )
        .join("");

      return `
    <article class="product-card fade-up in-view" data-id="${product.id}">
      <div class="product-thumb-wrapper js-open-detail" data-product-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" class="product-thumb" loading="lazy">
        <span class="product-badge">${product.badge}</span>
        <div class="product-variants-preview" title="Tersedia ${product.variants ? product.variants.length : 0} variasi warna">
          ${variantDotsHtml}
        </div>
        <span class="product-material-pill">${product.material.split("(")[0]}</span>
      </div>
      <div class="product-info">
        <h3 class="product-name js-open-detail" data-product-id="${product.id}">${product.name}</h3>
        <p class="product-desc">${product.shortDesc}</p>
        <div class="product-footer">
          <span class="product-price">${product.price}</span>
          <button type="button" class="btn-view-product js-open-detail" data-product-id="${product.id}">
            Lihat Produk
          </button>
        </div>
      </div>
    </article>
  `;
    })
    .join("");

  // Event listener untuk membuka Detail Produk
  const detailTriggers = productGrid.querySelectorAll(".js-open-detail");
  detailTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const pId = trigger.getAttribute("data-product-id");
      const foundProduct = allProducts.find((p) => p.id === pId);
      if (foundProduct) {
        openProductDetailModal(foundProduct);
      }
    });
  });
}

function initCategoryFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProducts(category);
    });
  });
}

function setActiveFilter(categoryId) {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    if (btn.getAttribute("data-filter") === categoryId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

/* ==========================================================================
   4. PRODUCT DETAIL MODAL (Detail View + Variasi Warna + WhatsApp Order)
   ========================================================================== */
function initProductDetailModal() {
  const modalBackdrop = document.getElementById("product-detail-modal");
  const closeBtn = document.getElementById("modal-detail-close");
  if (!modalBackdrop) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProductDetailModal);
  }

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeProductDetailModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop.classList.contains("open")) {
      closeProductDetailModal();
    }
  });

  // Tombol global "Belanja Sekarang" / "Belanja Koleksi" membuka produk unggulan pertama
  const globalShopBtns = document.querySelectorAll(".js-open-shop-modal");
  globalShopBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const firstProduct = window.CENAYA_CONFIG?.products?.[0];
      if (firstProduct) {
        openProductDetailModal(firstProduct);
      }
    });
  });
}

function openProductDetailModal(product) {
  currentProduct = product;
  const modal = document.getElementById("product-detail-modal");
  if (!modal) return;

  // Set Default Variant ke yang pertama
  currentSelectedVariant = product.variants?.[0] || { name: "Original", hex: "#FFB4D3" };

  // Set Media & Badge
  const mainImg = document.getElementById("modal-detail-img");
  const mediaBadge = document.getElementById("modal-detail-badge");
  if (mainImg) mainImg.src = product.image;
  if (mediaBadge) mediaBadge.textContent = product.badge;

  // Set Texts
  const title = document.getElementById("modal-detail-title");
  const price = document.getElementById("modal-detail-price");
  const matBadge = document.getElementById("modal-detail-material");
  const desc = document.getElementById("modal-detail-desc");
  const catTag = document.getElementById("modal-detail-category");

  if (title) title.textContent = product.name;
  if (price) price.textContent = product.price;
  if (matBadge) matBadge.textContent = product.material;
  if (desc) desc.textContent = product.fullDesc || product.shortDesc;
  if (catTag) catTag.textContent = `Koleksi ${product.category.toUpperCase()}`;

  // Render Pilihan Variasi Warna
  renderModalColorVariants(product.variants || []);

  // Update Tautan WhatsApp & Platform
  updateCheckoutLinks();

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductDetailModal() {
  const modal = document.getElementById("product-detail-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function renderModalColorVariants(variants) {
  const swatchList = document.getElementById("modal-swatch-list");
  const variantNameLabel = document.getElementById("modal-active-variant-name");
  if (!swatchList) return;

  if (variantNameLabel && currentSelectedVariant) {
    variantNameLabel.textContent = currentSelectedVariant.name;
  }

  swatchList.innerHTML = variants
    .map(
      (v, idx) => `
    <button type="button" 
            class="swatch-btn ${idx === 0 ? "active" : ""}" 
            style="background-color: ${v.hex};" 
            data-variant-name="${v.name}" 
            data-variant-hex="${v.hex}"
            title="${v.name}"
            aria-label="Pilih warna ${v.name}">
    </button>
  `
    )
    .join("");

  const swatches = swatchList.querySelectorAll(".swatch-btn");
  swatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
      swatches.forEach((s) => s.classList.remove("active"));
      swatch.classList.add("active");

      const varName = swatch.getAttribute("data-variant-name");
      const varHex = swatch.getAttribute("data-variant-hex");
      currentSelectedVariant = { name: varName, hex: varHex };

      if (variantNameLabel) {
        variantNameLabel.textContent = varName;
      }

      updateCheckoutLinks();
    });
  });
}

function updateCheckoutLinks() {
  if (!currentProduct) return;

  const waRaw = window.CENAYA_CONFIG?.contact?.whatsappRaw || "6281234567890";
  const selectedColorName = currentSelectedVariant ? currentSelectedVariant.name : "Warna Utama";

  // Pesan WhatsApp otomatis yang rapi dan sopan
  const waMessage = `Halo Admin CENAYA, saya tertarik pesan hijab berikut:\n\n*Produk:* ${currentProduct.name}\n*Variasi Warna:* ${selectedColorName}\n*Harga:* ${currentProduct.price}\n*Material:* ${currentProduct.material}\n\nApakah stok variasi warna ini masih tersedia? Terima kasih!`;
  const waUrl = `https://wa.me/${waRaw}?text=${encodeURIComponent(waMessage)}`;

  const btnWa = document.getElementById("modal-btn-wa-order");
  const btnShopee = document.getElementById("modal-btn-shopee");
  const btnTiktok = document.getElementById("modal-btn-tiktok");

  if (btnWa) btnWa.href = waUrl;
  if (btnShopee) btnShopee.href = window.CENAYA_CONFIG?.shoppingLinks?.shopee || "https://shopee.co.id";
  if (btnTiktok) btnTiktok.href = window.CENAYA_CONFIG?.shoppingLinks?.tiktok || "https://tiktok.com";
}

/* ==========================================================================
   5. INTERACTIVE PRODUCT SHOWCASE & HOTSPOTS
   ========================================================================== */
function initProductShowcase() {
  const featureBoxes = document.querySelectorAll(".feature-box");
  const hotspots = document.querySelectorAll(".hotspot-node");
  const tooltip = document.getElementById("hotspot-tooltip");

  const activatePoint = (id) => {
    featureBoxes.forEach((box) => {
      box.classList.toggle("active", box.getAttribute("data-point") === id);
    });

    hotspots.forEach((spot) => {
      if (spot.getAttribute("data-point") === id) {
        spot.classList.add("active");
        if (tooltip) {
          tooltip.textContent = spot.getAttribute("data-tooltip") || "";
          tooltip.style.opacity = "1";
        }
      } else {
        spot.classList.remove("active");
      }
    });
  };

  featureBoxes.forEach((box) => {
    box.addEventListener("mouseenter", () => activatePoint(box.getAttribute("data-point")));
    box.addEventListener("click", () => activatePoint(box.getAttribute("data-point")));
  });

  hotspots.forEach((spot) => {
    spot.addEventListener("mouseenter", () => activatePoint(spot.getAttribute("data-point")));
    spot.addEventListener("click", () => activatePoint(spot.getAttribute("data-point")));
  });
}

/* ==========================================================================
   6. WHY CENAYA
   ========================================================================== */
function renderWhyCenaya() {
  const whyGrid = document.getElementById("why-grid");
  if (!whyGrid) return;

  const icons = {
    palette: `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
      </svg>`,
    heart: `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>`,
    star: `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>`,
    "shopping-bag": `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>`
  };

  const items = window.CENAYA_CONFIG?.whyCenaya || [];
  whyGrid.innerHTML = items
    .map(
      (item) => `
    <div class="why-card fade-up in-view">
      <div class="why-card-top">
        <span class="why-number">${item.number}</span>
        <div class="why-icon">
          ${icons[item.iconSvg] || icons.star}
        </div>
      </div>
      <h3 class="why-card-title">${item.title}</h3>
      <p class="why-card-desc">${item.desc}</p>
    </div>
  `
    )
    .join("");
}

/* ==========================================================================
   7. LOOKBOOK / STYLE INSPIRATION CAROUSEL
   ========================================================================== */
function renderLookbook() {
  const track = document.getElementById("lookbook-track");
  const dotsContainer = document.getElementById("lookbook-dots");
  if (!track) return;

  const looks = window.CENAYA_CONFIG?.lookbook || [];

  track.innerHTML = looks
    .map(
      (look) => `
    <div class="lookbook-card" data-look-id="${look.id}">
      <div class="lookbook-image-box">
        <img src="${look.image}" alt="${look.title}" class="lookbook-image" loading="lazy">
        <span class="lookbook-tag">${look.tag}</span>
      </div>
      <div class="lookbook-details">
        <h4 class="lookbook-product-title">${look.title}</h4>
        <p class="lookbook-styling-desc">${look.desc}</p>
        <button type="button" class="btn-shop-look js-lookbook-detail" data-product-name="${look.productName}">
          <span>Lihat Produk & Warna</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>
    </div>
  `
    )
    .join("");

  if (dotsContainer) {
    dotsContainer.innerHTML = looks
      .map(
        (_, idx) =>
          `<button type="button" class="lookbook-dot ${
            idx === 0 ? "active" : ""
          }" aria-label="Slide ${idx + 1}" data-index="${idx}"></button>`
      )
      .join("");
  }

  // Klik "Lihat Produk & Warna" di lookbook langsung buka modal detail produk terkait
  const lookBtns = track.querySelectorAll(".js-lookbook-detail");
  lookBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const prodName = btn.getAttribute("data-product-name");
      const found = (window.CENAYA_CONFIG?.products || []).find((p) =>
        prodName.toLowerCase().includes(p.name.toLowerCase())
      ) || window.CENAYA_CONFIG?.products?.[0];
      if (found) {
        openProductDetailModal(found);
      }
    });
  });
}

function initLookbookSlider() {
  const slider = document.getElementById("lookbook-slider");
  const prevBtn = document.getElementById("lookbook-prev");
  const nextBtn = document.getElementById("lookbook-next");
  const dots = document.querySelectorAll(".lookbook-dot");
  if (!slider) return;

  const scrollAmount = 334;

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-index"), 10);
      slider.scrollTo({ left: index * scrollAmount, behavior: "smooth" });
    });
  });

  slider.addEventListener("scroll", () => {
    const scrollLeft = slider.scrollLeft;
    const activeIndex = Math.round(scrollLeft / scrollAmount);
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeIndex);
    });
  });
}

/* ==========================================================================
   8. FAQ ACCORDION (Hanya 1 item terbuka dalam satu waktu)
   ========================================================================== */
function renderFaq() {
  const faqContainer = document.getElementById("faq-accordion");
  if (!faqContainer) return;

  const faqs = window.CENAYA_CONFIG?.faqs || [];

  faqContainer.innerHTML = faqs
    .map(
      (faq, idx) => `
    <div class="faq-item ${idx === 0 ? "active" : ""}">
      <button type="button" class="faq-trigger" aria-expanded="${idx === 0 ? "true" : "false"}">
        <span>${faq.question}</span>
        <div class="faq-icon-toggle">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>
      <div class="faq-panel" style="${idx === 0 ? "max-height: 200px;" : ""}">
        <div class="faq-body">
          <p>${faq.answer}</p>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  const triggers = faqContainer.querySelectorAll(".faq-trigger");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const currentItem = trigger.closest(".faq-item");
      const currentPanel = currentItem.querySelector(".faq-panel");
      const isAlreadyActive = currentItem.classList.contains("active");

      faqContainer.querySelectorAll(".faq-item").forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
        item.querySelector(".faq-panel").style.maxHeight = null;
      });

      if (!isAlreadyActive) {
        currentItem.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
        currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
      }
    });
  });
}

/* ==========================================================================
   9. WHATSAPP & SCROLL EFFECTS
   ========================================================================== */
function setupWhatsAppLinks() {
  const waRaw = window.CENAYA_CONFIG?.contact?.whatsappRaw || "6281234567890";
  const waDisplay = window.CENAYA_CONFIG?.contact?.whatsappDisplay || "0812-3456-7890";
  const defaultMsg = encodeURIComponent("Halo Admin CENAYA! Saya ingin bertanya mengenai koleksi hijab terbaru.");

  const floatingWa = document.getElementById("floating-wa-btn");
  if (floatingWa) {
    floatingWa.href = `https://wa.me/${waRaw}?text=${defaultMsg}`;
  }

  const navWa = document.getElementById("nav-wa-link");
  if (navWa) {
    navWa.href = `https://wa.me/${waRaw}?text=${defaultMsg}`;
  }

  const footerWa = document.getElementById("footer-wa-link");
  if (footerWa) {
    footerWa.href = `https://wa.me/${waRaw}?text=${defaultMsg}`;
    footerWa.textContent = waDisplay;
  }
}

function initScrollEffects() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-up").forEach((el) => {
    observer.observe(el);
  });
}

function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top-btn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
