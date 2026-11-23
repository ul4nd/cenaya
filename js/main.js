/**
 * CENAYA - Script Interaktivitas Utama
 * Mengelola modal detail produk dengan variasi warna interaktif, pemesanan WhatsApp resmi,
 * filter koleksi, showcase hotspot, lookbook slider, dan FAQ accordion.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initShopDropdown();
  initHeroCardDeck();
  initMinceWhatsApp();
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

function initShopDropdown() {
  const shopWrapper = document.getElementById("nav-shop-wrapper");
  const shopTrigger = document.getElementById("nav-cta-btn");
  const mobileWrapper = document.getElementById("mobile-shop-wrapper");
  const mobileTrigger = document.getElementById("mobile-drawer-cta");

  // Sinkronisasi link dari CENAYA_CONFIG
  const shopeeUrl = window.CENAYA_CONFIG?.shoppingLinks?.shopee || "https://shopee.co.id/cenaya_id";
  const tiktokUrl = window.CENAYA_CONFIG?.shoppingLinks?.tiktok || "https://www.tiktok.com/@cenaya_id";
  const waUrl = window.CENAYA_CONFIG?.shoppingLinks?.whatsapp || "https://wa.me/6289664779300?text=Halo%20Mince%20Admin%20CENAYA!%20Saya%20ingin%20belanja%20koleksi%20hijab%20Cenaya.";
  const igUrl = window.CENAYA_CONFIG?.contact?.instagram || "https://instagram.com/cenaya_id";

  document.querySelectorAll(".shop-item-shopee").forEach((el) => {
    el.href = shopeeUrl;
  });
  document.querySelectorAll(".shop-item-tiktok").forEach((el) => {
    el.href = tiktokUrl;
  });
  document.querySelectorAll(".shop-item-whatsapp").forEach((el) => {
    el.href = waUrl;
  });
  document.querySelectorAll(".shop-item-instagram").forEach((el) => {
    el.href = igUrl;
  });

  // Toggle dropdown di navbar
  if (shopWrapper && shopTrigger) {
    shopTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = shopWrapper.classList.toggle("open");
      shopTrigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Toggle dropdown di mobile drawer
  if (mobileWrapper && mobileTrigger) {
    mobileTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileWrapper.classList.toggle("open");
      mobileTrigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Tutup dropdown jika klik di luar
  document.addEventListener("click", (e) => {
    if (shopWrapper && !shopWrapper.contains(e.target)) {
      shopWrapper.classList.remove("open");
      shopTrigger?.setAttribute("aria-expanded", "false");
    }
  });

  // Tutup dropdown jika tombol Escape ditekan
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (shopWrapper && shopWrapper.classList.contains("open")) {
        shopWrapper.classList.remove("open");
        shopTrigger?.setAttribute("aria-expanded", "false");
      }
    }
  });
}

/* ==========================================================================
   TANYA MINCE (ADMIN CENAYA) FLOATING POPUP WIDGET
   ========================================================================== */
function initMinceWhatsApp() {
  const widget = document.getElementById("mince-wa-widget");
  const toggleBtn = document.getElementById("mince-toggle-btn");
  const closeBtn = document.getElementById("mince-close-btn");

  if (!widget || !toggleBtn) return;

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = widget.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  closeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    widget.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
  });

  // Tutup jika klik di luar pop-up
  document.addEventListener("click", (e) => {
    if (widget.classList.contains("open") && !widget.contains(e.target)) {
      widget.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Tutup jika tombol Escape ditekan
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && widget.classList.contains("open")) {
      widget.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}

/* ==========================================================================
   HERO SWIPEABLE CARD DECK (Instant Instagram / Uno Card Deck)
   ========================================================================== */
function initHeroCardDeck() {
  const deckTrack = document.getElementById("deck-track");
  const cards = Array.from(document.querySelectorAll(".deck-card"));
  const prevBtn = document.getElementById("deck-prev-btn");
  const nextBtn = document.getElementById("deck-next-btn");
  const dots = Array.from(document.querySelectorAll(".deck-dot"));

  if (!deckTrack || cards.length === 0) return;

  const totalCards = cards.length;
  let activeIndex = 0;
  let isAnimating = false;

  // Pointer & Drag State
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;
  let hasMoved = false;

  function renderDeck() {
    cards.forEach((card, idx) => {
      card.className = "deck-card";
      const rel = (idx - activeIndex + totalCards) % totalCards;
      card.classList.add(`pos-${rel}`);
      if (rel === 0) {
        card.classList.add("is-top");
      }
      card.style.transform = "";
      card.style.transition = "";
    });

    // Update dots indicator
    dots.forEach((dot, idx) => {
      const isActive = idx === activeIndex;
      dot.classList.toggle("active", isActive);
      dot.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  function nextCard(direction = 1) {
    if (isAnimating) return;
    isAnimating = true;

    const topCard = cards[activeIndex];
    const swipeClass = direction >= 0 ? "swipe-out-right" : "swipe-out-left";
    topCard.classList.add(swipeClass);

    setTimeout(() => {
      activeIndex = (activeIndex + 1) % totalCards;
      renderDeck();
      isAnimating = false;
    }, 320);
  }

  function prevCard() {
    if (isAnimating) return;
    isAnimating = true;

    // Mundur ke kartu sebelumnya
    activeIndex = (activeIndex - 1 + totalCards) % totalCards;
    renderDeck();

    const newTop = cards[activeIndex];
    newTop.classList.add("swipe-out-left");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        newTop.classList.remove("swipe-out-left");
        setTimeout(() => {
          isAnimating = false;
        }, 340);
      });
    });
  }

  function goToCard(targetIndex) {
    if (isAnimating || targetIndex === activeIndex) return;
    const diff = (targetIndex - activeIndex + totalCards) % totalCards;
    if (diff === 1) {
      nextCard(1);
    } else if (diff === totalCards - 1) {
      prevCard();
    } else {
      activeIndex = targetIndex;
      renderDeck();
    }
  }

  // Tombol navigasi
  nextBtn?.addEventListener("click", () => nextCard(1));
  prevBtn?.addEventListener("click", () => prevCard());

  // Dot navigasi
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index"), 10);
      goToCard(idx);
    });
  });

  // Klik kartu untuk swipe ke kartu berikutnya
  deckTrack.addEventListener("click", (e) => {
    if (hasMoved) return; // Jika drag/swipe, abaikan klik biasa
    if (e.target.closest(".deck-card.is-top")) {
      nextCard(1);
    }
  });

  // Drag & Swipe Logic (Mouse & Touch)
  function onPointerDown(clientX, clientY) {
    if (isAnimating) return;
    isDragging = true;
    hasMoved = false;
    startX = clientX;
    startY = clientY;
    currentX = clientX;
    currentY = clientY;
    deckTrack.classList.add("is-dragging");
  }

  function onPointerMove(clientX, clientY) {
    if (!isDragging) return;
    currentX = clientX;
    currentY = clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;

    if (Math.abs(deltaX) > 8 || Math.abs(deltaY) > 8) {
      hasMoved = true;
    }

    const topCard = cards[activeIndex];
    if (topCard) {
      const rot = deltaX * 0.07;
      topCard.style.transform = `translate3d(${deltaX}px, ${deltaY * 0.25}px, 0) rotate(${rot}deg)`;
    }
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    deckTrack.classList.remove("is-dragging");

    const deltaX = currentX - startX;
    const topCard = cards[activeIndex];

    if (Math.abs(deltaX) > 50) {
      // Swipe threshold tercapai
      nextCard(deltaX > 0 ? 1 : -1);
    } else if (topCard) {
      // Kembalikan ke posisi semula jika swipe kurang jauh
      topCard.style.transition = "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)";
      topCard.style.transform = "translate3d(0, 0, 0) rotate(0deg) scale(1)";
      setTimeout(() => {
        if (topCard) topCard.style.transition = "";
      }, 350);
    }
  }

  // Mouse drag listeners
  deckTrack.addEventListener("mousedown", (e) => {
    onPointerDown(e.clientX, e.clientY);
  });

  window.addEventListener("mousemove", (e) => {
    if (isDragging) onPointerMove(e.clientX, e.clientY);
  });

  window.addEventListener("mouseup", () => {
    if (isDragging) onPointerUp();
  });

  // Touch drag listeners
  deckTrack.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    onPointerDown(t.clientX, t.clientY);
  }, { passive: true });

  deckTrack.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const t = e.touches[0];
    onPointerMove(t.clientX, t.clientY);
  }, { passive: true });

  deckTrack.addEventListener("touchend", () => {
    if (isDragging) onPointerUp();
  });

  // Navigasi keyboard (Panah Kanan / Kiri)
  deckTrack.setAttribute("tabindex", "0");
  deckTrack.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextCard(1);
    if (e.key === "ArrowLeft") prevCard();
  });

  // Inisialisasi awal tumpukan kartu
  renderDeck();
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
  let filtered = [];

  if (categoryId === "all") {
    // Tampilan "Semua Koleksi": 4 kartu koleksi utama (Summer, Autumn, Renda Pastel, Renda Moody)
    filtered = allProducts.filter((p) => p.isMainSeries);
    if (filtered.length === 0) {
      filtered = allProducts.slice(0, 4);
    }
  } else {
    // Tampilan per series (Summer, Autumn, Renda Pastel, Renda Moody): isi 5 produk detail warna
    filtered = allProducts.filter((p) => p.category === categoryId && !p.isMainSeries);
  }

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
      // Preview titik foto/warna: Jika kartu series utama (isMainSeries), ada 6 foto (1 Foto Utama + 5 Variasi Warna)
      let variantDotsHtml = "";
      if (product.isMainSeries) {
        variantDotsHtml += `<span class="color-dot-mini dot-overview active" data-img="${product.image}" data-variant-name="Foto Utama" title="Foto Utama (Koleksi)"></span>`;
        variantDotsHtml += (product.variants || [])
          .map(
            (v) => `<span class="color-dot-mini" style="background-color: ${v.hex};" data-img="${v.image || product.image}" data-variant-name="${v.name}" title="${v.name}"></span>`
          )
          .join("");
      } else {
        variantDotsHtml = (product.variants || [])
          .map(
            (v, idx) => `<span class="color-dot-mini ${idx === 0 ? "active" : ""}" style="background-color: ${v.hex};" data-img="${v.image || product.image}" data-variant-name="${v.name}" title="${v.name}"></span>`
          )
          .join("");
      }

      const totalPhotos = product.isMainSeries ? 1 + (product.variants?.length || 0) : (product.variants?.length || 1);

      return `
    <article class="product-card fade-up in-view" data-id="${product.id}">
      <div class="product-thumb-wrapper js-open-detail" data-product-id="${product.id}">
        <img src="${product.image}" alt="${product.name}" class="product-thumb" loading="lazy">
        <span class="product-badge">${product.badge}</span>
        ${totalPhotos > 1 ? `
          <div class="product-variants-preview" title="Tersedia ${totalPhotos} foto (${product.isMainSeries ? "1 Foto Utama + 5 Warna" : "Pilihan Warna"})">
            ${variantDotsHtml}
          </div>
        ` : ""}
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

  // Event listener klik titik warna pada kartu (mengubah gambar preview kartu secara instan)
  const cardDots = productGrid.querySelectorAll(".color-dot-mini");
  cardDots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      e.stopPropagation();
      const parentCard = dot.closest(".product-card");
      if (!parentCard) return;
      const thumb = parentCard.querySelector(".product-thumb");
      const targetImg = dot.getAttribute("data-img");
      if (thumb && targetImg) {
        thumb.src = targetImg;
      }
      parentCard.querySelectorAll(".color-dot-mini").forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

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
let currentProduct = null;
let currentSelectedVariant = null;
let currentSlides = [];
let currentVariantIndex = 0;

function initProductDetailModal() {
  const modalBackdrop = document.getElementById("product-detail-modal");
  const closeBtn = document.getElementById("modal-detail-close");
  const prevBtn = document.getElementById("modal-prev-variant-btn");
  const nextBtn = document.getElementById("modal-next-variant-btn");
  const sliderBox = document.getElementById("modal-img-slider-box");

  if (!modalBackdrop) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", closeProductDetailModal);
  }

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) {
      closeProductDetailModal();
    }
  });

  // Tombol navigasi panah variasi warna
  prevBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    switchModalVariant(currentVariantIndex - 1);
  });

  nextBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    switchModalVariant(currentVariantIndex + 1);
  });

  // Swipe gesture pada box foto modal (Touch & Mouse Drag)
  if (sliderBox) {
    let mStartX = 0;
    let mStartY = 0;
    let mIsDragging = false;

    sliderBox.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      mStartX = touch.clientX;
      mStartY = touch.clientY;
      mIsDragging = true;
    }, { passive: true });

    sliderBox.addEventListener("touchend", (e) => {
      if (!mIsDragging) return;
      mIsDragging = false;
      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - mStartX;
      const deltaY = touch.clientY - mStartY;
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          switchModalVariant(currentVariantIndex + 1); // Swipe kiri -> foto berikutnya
        } else {
          switchModalVariant(currentVariantIndex - 1); // Swipe kanan -> foto sebelumnya
        }
      }
    }, { passive: true });

    sliderBox.addEventListener("mousedown", (e) => {
      mStartX = e.clientX;
      mStartY = e.clientY;
      mIsDragging = true;
    });

    sliderBox.addEventListener("mouseup", (e) => {
      if (!mIsDragging) return;
      mIsDragging = false;
      const deltaX = e.clientX - mStartX;
      const deltaY = e.clientY - mStartY;
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
          switchModalVariant(currentVariantIndex + 1);
        } else {
          switchModalVariant(currentVariantIndex - 1);
        }
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!modalBackdrop.classList.contains("open")) return;
    if (e.key === "Escape") {
      closeProductDetailModal();
    } else if (e.key === "ArrowLeft") {
      switchModalVariant(currentVariantIndex - 1);
    } else if (e.key === "ArrowRight") {
      switchModalVariant(currentVariantIndex + 1);
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

function openProductDetailModal(product, initialSlideIdx = 0) {
  currentProduct = product;
  const modal = document.getElementById("product-detail-modal");
  if (!modal) return;

  // Siapkan daftar slide: Jika series utama, slide 0 = Foto Utama, slide 1..5 = 5 Variasi Warna (Total 6 Foto)
  if (product.isMainSeries) {
    currentSlides = [
      { name: "Foto Utama", isOverview: true, image: product.image, hex: null },
      ...(product.variants || [])
    ];
  } else if (product.variants && product.variants.length > 0) {
    currentSlides = [...product.variants];
  } else {
    currentSlides = [{ name: "Original", image: product.image, hex: "#FFB4D3" }];
  }

  currentVariantIndex = Math.max(0, Math.min(initialSlideIdx, currentSlides.length - 1));
  currentSelectedVariant = currentSlides[currentVariantIndex];

  // Set Media & Badge
  const mainImg = document.getElementById("modal-detail-img");
  const mediaBadge = document.getElementById("modal-detail-badge");
  if (mainImg) {
    mainImg.src = currentSelectedVariant.image || product.image;
    mainImg.alt = `${product.name} - ${currentSelectedVariant.name}`;
  }
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
  if (catTag) catTag.textContent = product.isMainSeries ? "Koleksi Utama" : `Koleksi ${product.category.replace("-", " ").toUpperCase()}`;

  // Tampilkan/sembunyikan tombol panah & swipe hint sesuai jumlah slide foto
  const prevBtn = document.getElementById("modal-prev-variant-btn");
  const nextBtn = document.getElementById("modal-next-variant-btn");
  const swipeHint = document.querySelector(".modal-swipe-hint");
  const hasMultiple = currentSlides.length > 1;

  if (prevBtn) prevBtn.style.display = hasMultiple ? "flex" : "none";
  if (nextBtn) nextBtn.style.display = hasMultiple ? "flex" : "none";
  if (swipeHint) swipeHint.style.display = hasMultiple ? "flex" : "none";

  // Render Pilihan Foto / Variasi Warna
  renderModalColorVariants(currentSlides);

  // Update Tautan Order (WhatsApp & Instagram DM)
  updateCheckoutLinks();

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function switchModalVariant(targetIndex) {
  if (!currentProduct || !currentSlides || currentSlides.length === 0) return;
  const count = currentSlides.length;
  currentVariantIndex = (targetIndex + count) % count;
  currentSelectedVariant = currentSlides[currentVariantIndex];

  const mainImg = document.getElementById("modal-detail-img");
  const variantNameLabel = document.getElementById("modal-active-variant-name");

  if (mainImg && currentSelectedVariant.image) {
    mainImg.classList.add("fade-out");
    setTimeout(() => {
      mainImg.src = currentSelectedVariant.image;
      mainImg.alt = `${currentProduct.name} - ${currentSelectedVariant.name}`;
      mainImg.classList.remove("fade-out");
    }, 150);
  }

  if (variantNameLabel) {
    variantNameLabel.textContent = currentSelectedVariant.name;
  }

  // Update active swatch button
  const swatchList = document.getElementById("modal-swatch-list");
  if (swatchList) {
    const swatches = swatchList.querySelectorAll(".swatch-btn");
    swatches.forEach((s, idx) => {
      s.classList.toggle("active", idx === currentVariantIndex);
    });
  }

  updateCheckoutLinks();
}

function closeProductDetailModal() {
  const modal = document.getElementById("product-detail-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function renderModalColorVariants(slides) {
  const swatchList = document.getElementById("modal-swatch-list");
  const variantNameLabel = document.getElementById("modal-active-variant-name");
  if (!swatchList) return;

  if (variantNameLabel && currentSelectedVariant) {
    variantNameLabel.textContent = currentSelectedVariant.name;
  }

  swatchList.innerHTML = slides
    .map((v, idx) => {
      if (v.isOverview) {
        return `
          <button type="button" 
                  class="swatch-btn swatch-btn-overview ${idx === currentVariantIndex ? "active" : ""}" 
                  data-variant-idx="${idx}" 
                  title="Foto Utama" 
                  aria-label="Foto Utama">
          </button>
        `;
      }
      return `
        <button type="button" 
                class="swatch-btn ${idx === currentVariantIndex ? "active" : ""}" 
                style="background-color: ${v.hex};" 
                data-variant-name="${v.name}" 
                data-variant-hex="${v.hex}"
                data-variant-idx="${idx}"
                title="${v.name}"
                aria-label="Pilih warna ${v.name}">
        </button>
      `;
    })
    .join("");

  const swatches = swatchList.querySelectorAll(".swatch-btn");
  swatches.forEach((swatch) => {
    swatch.addEventListener("click", () => {
      const idx = parseInt(swatch.getAttribute("data-variant-idx"), 10);
      switchModalVariant(idx);
    });
  });
}

function updateCheckoutLinks() {
  if (!currentProduct) return;

  const waRaw = window.CENAYA_CONFIG?.contact?.whatsappRaw || "6289664779300";
  const selectedName = currentSelectedVariant ? currentSelectedVariant.name : "Koleksi Utama";

  // Pesan WhatsApp otomatis yang rapi dan sopan
  let waMessage = "";
  if (currentSelectedVariant && currentSelectedVariant.isOverview) {
    waMessage = `Halo Admin CENAYA, saya tertarik pesan koleksi hijab berikut:\n\n*Koleksi:* ${currentProduct.name}\n*Pilihan:* Foto Utama (Overview Koleksi)\n*Harga:* ${currentProduct.price}\n*Material:* ${currentProduct.material}\n\nMohon info ketersediaan stok warna untuk koleksi ini. Terima kasih!`;
  } else {
    waMessage = `Halo Admin CENAYA, saya tertarik pesan hijab berikut:\n\n*Produk:* ${currentProduct.name}\n*Variasi Warna:* ${selectedName}\n*Harga:* ${currentProduct.price}\n*Material:* ${currentProduct.material}\n\nApakah stok variasi warna ini masih tersedia? Terima kasih!`;
  }
  const waUrl = `https://wa.me/${waRaw}?text=${encodeURIComponent(waMessage)}`;

  // Tautan Instagram DM
  const dmUrl = "https://instagram.com/cenaya_id";

  const btnWa = document.getElementById("modal-btn-wa-order");
  const btnDm = document.getElementById("modal-btn-dm-order");
  const btnShopee = document.getElementById("modal-btn-shopee");
  const btnTiktok = document.getElementById("modal-btn-tiktok");

  if (btnWa) btnWa.href = waUrl;
  if (btnDm) btnDm.href = dmUrl;
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
