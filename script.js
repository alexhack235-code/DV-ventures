/**
 * DV VENTURES — HIGH-PERFORMANCE E-COMMERCE & AI CONCIERGE ENGINE
 */

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'Silver Ridge Runner',
    category: 'Running',
    price: 24500,
    oldPrice: 32000,
    detail: 'Ultra-light breathable knit runner engineered with high-rebound cushioning for road training and all-day energy.',
    tag: 'Best seller',
    rating: 4.9,
    reviews: 340,
    sizes: [40, 41, 42, 43, 44, 45],
    image: './WhatsApp Image 2026-09-04 at 17.58.44.jpeg'
  },
  {
    id: 2,
    name: 'Urban Drift X',
    category: 'Lifestyle',
    price: 28000,
    oldPrice: 36000,
    detail: 'Contemporary street silhouette crafted with durable composite materials, subtle contrast accents, and padded heel counter.',
    tag: 'New',
    rating: 4.8,
    reviews: 195,
    sizes: [40, 41, 42, 43, 44],
    image: './WhatsApp Image 2026-09-04 at 17.58.45.jpeg'
  },
  {
    id: 3,
    name: 'Summit Flex',
    category: 'Sneakers',
    price: 31000,
    oldPrice: 39000,
    detail: 'Adaptive comfort trainer designed for extended walks, active commutes, and flexible arch stability in any environment.',
    tag: 'Popular',
    rating: 4.9,
    reviews: 218,
    sizes: [41, 42, 43, 44, 45],
    image: './WhatsApp Image 2026-09-04 at 17.58.45 (1).jpeg'
  },
  {
    id: 4,
    name: 'Aero Step Pro',
    category: 'Running',
    price: 33000,
    oldPrice: 42000,
    detail: 'High-mileage performance shoe with structured lateral support, aerodynamic sole geometry, and shock dispersion.',
    tag: 'Performance',
    rating: 4.9,
    reviews: 164,
    sizes: [40, 41, 42, 43, 44, 45],
    image: './WhatsApp Image 2026-09-04 at 17.58.45 (2).jpeg'
  },
  {
    id: 5,
    name: 'Coastline Slide',
    category: 'Sandals',
    price: 19500,
    oldPrice: 26000,
    detail: 'Anatomically molded slide sandal with waterproof footbed, slip-resistant sole, and soft textured strap for resort and home relaxation.',
    tag: 'Hot',
    rating: 4.7,
    reviews: 280,
    sizes: [40, 41, 42, 43, 44, 45],
    image: './WhatsApp Image 2026-09-04 at 17.58.45 (3).jpeg'
  },
  {
    id: 6,
    name: 'Monarch Leather',
    category: 'Formal',
    price: 42000,
    oldPrice: 54000,
    detail: 'Handcrafted premium formal dress footwear with polished leather upper, refined silhouette, and cushioned insole for black-tie elegance.',
    tag: 'Premium',
    rating: 5.0,
    reviews: 142,
    sizes: [40, 41, 42, 43, 44, 45],
    image: './WhatsApp Image 2026-09-04 at 17.58.45 (4).jpeg'
  },
  {
    id: 7,
    name: 'Metro Motion',
    category: 'Lifestyle',
    price: 23500,
    oldPrice: 30000,
    detail: 'Sleek minimalist sneaker featuring monochromatic tonal finish, featherweight EVA midsole, and moisture-wicking lining.',
    tag: 'Top pick',
    rating: 4.8,
    reviews: 189,
    sizes: [40, 41, 42, 43, 44],
    image: './WhatsApp Image 2026-09-04 at 17.58.58.jpeg'
  },
  {
    id: 8,
    name: 'Trail Terrain',
    category: 'Sneakers',
    price: 35500,
    oldPrice: 45000,
    detail: 'Rugged urban trail hybrid featuring reinforced mudguard protection, high-traction lug outsole, and protective toe bumper.',
    tag: 'Outdoor',
    rating: 4.9,
    reviews: 177,
    sizes: [41, 42, 43, 44, 45],
    image: './WhatsApp Image 2026-09-04 at 17.58.58 (1).jpeg'
  },
  {
    id: 9,
    name: 'Classic Volt',
    category: 'Lifestyle',
    price: 27000,
    oldPrice: 34500,
    detail: 'Iconic heritage silhouette infused with modern comfort liners, subtle luxury stitching, and vulcanized rubber grip.',
    tag: 'Classic',
    rating: 4.7,
    reviews: 210,
    sizes: [40, 41, 42, 43, 44, 45],
    image: './WhatsApp Image 2026-09-04 at 17.58.59.jpeg'
  },
  {
    id: 10,
    name: 'Night Pace',
    category: 'Running',
    price: 29000,
    oldPrice: 38000,
    detail: 'Sleek low-light running trainer with reflective accents, dual-density cushioning, and zoned breathable mesh.',
    tag: 'Fresh',
    rating: 4.8,
    reviews: 132,
    sizes: [40, 41, 42, 43, 44],
    image: './WhatsApp Image 2026-09-04 at 17.58.59 (1).jpeg'
  },
  {
    id: 11,
    name: 'Harbor Sole',
    category: 'Sandals',
    price: 20500,
    oldPrice: 28000,
    detail: 'Comfort-contoured leisure sandal designed for warm days, beach travel, and weekend lounging with durable tread.',
    tag: 'Travel',
    rating: 4.6,
    reviews: 156,
    sizes: [40, 41, 42, 43, 44, 45],
    image: './WhatsApp Image 2026-09-04 at 17.58.59 (2).jpeg'
  },
  {
    id: 12,
    name: 'Capstone Court',
    category: 'Formal',
    price: 38000,
    oldPrice: 49000,
    detail: 'Tailored derby-inspired executive footwear offering deep luster, handcrafted edge detailing, and all-day boardroom comfort.',
    tag: 'Luxury',
    rating: 4.9,
    reviews: 98,
    sizes: [41, 42, 43, 44, 45],
    image: './WhatsApp Image 2026-09-04 at 17.58.59 (3).jpeg'
  }
];

// WhatsApp Sales Phone (Configurable for client)
const STORE_WHATSAPP_NUMBER = '2348000000000';
const ADMIN_PASSWORD = 'dvventures2026';
const FREE_SHIPPING_THRESHOLD = 50000;

// State
let products = JSON.parse(localStorage.getItem('dv-products') || 'null') || DEFAULT_PRODUCTS.map((p) => ({ ...p }));
let cart = JSON.parse(localStorage.getItem('dv-cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('dv-wishlist') || '[]');
let appliedPromo = localStorage.getItem('dv-promo') || null;
let activeCategory = 'all';
let activePriceRange = 'all';
let activeSort = 'default';

// Quick View Active State
let currentQuickViewProduct = null;
let currentQuickViewSize = 42;
let currentQuickViewQty = 1;

// ==========================================================================
// UTILITIES
// ==========================================================================

function formatCurrency(value) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0
  }).format(value);
}

function persistCart() {
  localStorage.setItem('dv-cart', JSON.stringify(cart));
}

function persistWishlist() {
  localStorage.setItem('dv-wishlist', JSON.stringify(wishlist));
}

function persistProducts() {
  localStorage.setItem('dv-products', JSON.stringify(products));
}

function showToast(message, iconSvg = null) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  const defaultSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  toast.innerHTML = `
    ${iconSvg || defaultSvg}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// THEME SWITCHER
// ==========================================================================

function applyTheme(theme) {
  if (typeof document === 'undefined') return;
  const isDark = theme === 'dark';
  if (document.body && document.body.classList) {
    document.body.classList.toggle('theme-dark', isDark);
    document.body.classList.toggle('theme-light', !isDark);
  }
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('dv-theme', theme);
  }

  if (typeof document.querySelectorAll === 'function') {
    document.querySelectorAll('#themeToggle').forEach((btn) => {
      btn.innerHTML = isDark
        ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    });
  }
}

function detectAndroidViewport() {
  if (typeof navigator === 'undefined' || typeof document === 'undefined') return;
  const ua = navigator.userAgent || navigator.vendor || window.opera || '';
  const isAndroid = /Android/i.test(ua);
  if (document.documentElement && document.documentElement.classList) {
    document.documentElement.classList.toggle('android-device', isAndroid);
    if (document.documentElement.style) {
      document.documentElement.style.setProperty('--safe-bottom', 'env(safe-area-inset-bottom, 0px)');
    }
  }
  if (document.body && document.body.classList) {
    document.body.classList.toggle('android-device', isAndroid);
  }
}

const savedTheme = localStorage.getItem('dv-theme') || 'light';
detectAndroidViewport();
applyTheme(savedTheme);

document.querySelectorAll('#themeToggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
    applyTheme(next);
    showToast(`Switched to ${next} mode`);
  });
});

// ==========================================================================
// WISHLIST MANAGEMENT
// ==========================================================================

function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast(`Removed "${product.name}" from saved items`);
  } else {
    wishlist.push(productId);
    showToast(`Added "${product.name}" to saved items`);
  }

  persistWishlist();
  updateWishlistUI();
}

function updateWishlistUI() {
  const countEl = document.getElementById('wishlistCount');
  if (countEl) {
    countEl.textContent = wishlist.length;
    countEl.style.transform = 'scale(1.3)';
    setTimeout(() => (countEl.style.transform = 'scale(1)'), 200);
  }

  document.querySelectorAll('[data-wishlist-id]').forEach((btn) => {
    const id = Number(btn.dataset.wishlistId);
    const isSaved = wishlist.includes(id);
    btn.classList.toggle('active', isSaved);
  });
}

// ==========================================================================
// CART & PRICING CALCULATIONS
// ==========================================================================

function calculateCartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const currentPromo = appliedPromo || localStorage.getItem('dv-promo');
  const discountRate = currentPromo === 'DVFIRST' ? 0.1 : 0;
  const discountAmount = Math.round(subtotal * discountRate);

  // Delivery calculation
  const isFreeDelivery = subtotal >= FREE_SHIPPING_THRESHOLD;
  let deliveryFee = 0;

  const destinationSelect = document.getElementById('deliveryDestination');
  const destination = destinationSelect ? destinationSelect.value : 'lagos';

  if (!isFreeDelivery && subtotal > 0) {
    if (destination === 'lagos') deliveryFee = 2500;
    else if (destination === 'abuja') deliveryFee = 4000;
    else deliveryFee = 5000;
  }

  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  return {
    subtotal,
    discountRate,
    discountAmount,
    deliveryFee,
    isFreeDelivery,
    grandTotal
  };
}

function addToCart(id, size = 42, quantity = 1) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  const chosenSize = Number(size) || 42;
  const chosenQty = Number(quantity) || 1;

  const existing = cart.find((item) => item.id === id && item.size === chosenSize);
  if (existing) {
    existing.quantity += chosenQty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      size: chosenSize,
      quantity: chosenQty
    });
  }

  persistCart();
  renderCart();
  openCartDrawer();
  showToast(`Added ${product.name} (EU ${chosenSize}) to your bag`);
}

function removeFromCart(id, size) {
  cart = cart.filter((item) => !(item.id === id && item.size === size));
  persistCart();
  renderCart();
  showToast('Item removed from shopping bag');
}

function updateCartQuantity(id, size, change) {
  const item = cart.find((i) => i.id === id && i.size === size);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(id, size);
    return;
  }

  persistCart();
  renderCart();
}

function openCartDrawer() {
  const panel = document.getElementById('cartPanel');
  const backdrop = document.getElementById('cartBackdrop');
  if (panel) panel.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
}

function closeCartDrawer() {
  const panel = document.getElementById('cartPanel');
  const backdrop = document.getElementById('cartBackdrop');
  if (panel) panel.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
}

// ==========================================================================
// RENDER CART DRAWER & PAGE
// ==========================================================================

function renderCart() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totals = calculateCartTotals();

  // Cart Count Badges
  document.querySelectorAll('#cartCount').forEach((el) => {
    el.textContent = totalCount;
    el.style.transform = 'scale(1.25)';
    setTimeout(() => (el.style.transform = 'scale(1)'), 200);
  });

  // Free shipping progress
  const shippingText = document.getElementById('shippingStatusText');
  const shippingFill = document.getElementById('shippingProgressFill');
  if (shippingText && shippingFill) {
    if (totals.subtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingText.innerHTML = '🎉 <strong>Congratulations!</strong> You unlocked FREE nationwide delivery!';
      shippingFill.style.width = '100%';
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - totals.subtotal;
      const pct = Math.min(100, Math.round((totals.subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      shippingText.innerHTML = `Add <strong>${formatCurrency(remaining)}</strong> more for FREE delivery`;
      shippingFill.style.width = `${pct}%`;
    }
  }

  // Cart Drawer Items Container
  const cartItemsContainer = document.getElementById('cartItems');
  if (cartItemsContainer) {
    if (!cart.length) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-view">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <h4>Your bag is empty</h4>
          <p style="font-size: 0.85rem;">Discover our latest footwear arrivals and step up your style.</p>
        </div>
      `;
    } else {
      cartItemsContainer.innerHTML = cart
        .map(
          (item) => `
            <div class="cart-item">
              <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}" />
              </div>
              <div class="cart-item-details">
                <div class="cart-item-top">
                  <div>
                    <h4>${item.name}</h4>
                    <span class="cart-item-size-badge">EU Size: ${item.size}</span>
                  </div>
                  <button type="button" class="cart-item-remove" data-remove-id="${item.id}" data-remove-size="${item.size}" title="Remove item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
                <div class="cart-item-bottom">
                  <div class="qty-stepper">
                    <button type="button" data-qty-change="-1" data-id="${item.id}" data-size="${item.size}">-</button>
                    <span>${item.quantity}</span>
                    <button type="button" data-qty-change="1" data-id="${item.id}" data-size="${item.size}">+</button>
                  </div>
                  <span class="cart-item-price">${formatCurrency(item.price * item.quantity)}</span>
                </div>
              </div>
            </div>
          `
        )
        .join('');
    }
  }

  // Drawer Footer Totals
  const subtotalEl = document.getElementById('subtotal');
  const cartSubtotalEl = document.getElementById('cartSubtotal');
  const discountRow = document.getElementById('cartDiscountRow');
  const discountEl = document.getElementById('cartDiscount');

  if (cartSubtotalEl) cartSubtotalEl.textContent = formatCurrency(totals.subtotal);
  if (subtotalEl) subtotalEl.textContent = formatCurrency(totals.grandTotal);

  if (discountRow && discountEl) {
    if (totals.discountAmount > 0) {
      discountRow.classList.remove('hidden');
      discountEl.textContent = `-${formatCurrency(totals.discountAmount)}`;
    } else {
      discountRow.classList.add('hidden');
    }
  }

  // Dedicated Cart Page Render (if on cart.html)
  renderCartPage(totals, totalCount);

  // Attach dynamic event listeners
  document.querySelectorAll('[data-remove-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      removeFromCart(Number(btn.dataset.removeId), Number(btn.dataset.removeSize));
    });
  });

  document.querySelectorAll('[data-qty-change]').forEach((btn) => {
    btn.addEventListener('click', () => {
      updateCartQuantity(Number(btn.dataset.id), Number(btn.dataset.size), Number(btn.dataset.qtyChange));
    });
  });
}

function renderCartPage(totals, totalCount) {
  const listEl = document.getElementById('cartPageList');
  const subtotalEl = document.getElementById('cartPageSubtotal');
  const discountRow = document.getElementById('cartPageDiscountRow');
  const discountEl = document.getElementById('cartPageDiscount');
  const deliveryEl = document.getElementById('cartPageDelivery');
  const finalEl = document.getElementById('cartPageFinal');
  const countEl = document.getElementById('cartPageCount');

  if (!listEl) return;

  if (countEl) countEl.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
  if (subtotalEl) subtotalEl.textContent = formatCurrency(totals.subtotal);
  if (finalEl) finalEl.textContent = formatCurrency(totals.grandTotal);

  if (deliveryEl) {
    deliveryEl.textContent = totals.isFreeDelivery ? 'FREE (Nationwide)' : formatCurrency(totals.deliveryFee);
    if (totals.isFreeDelivery) deliveryEl.style.color = 'var(--success)';
    else deliveryEl.style.color = 'inherit';
  }

  if (discountRow && discountEl) {
    if (totals.discountAmount > 0) {
      discountRow.style.display = 'flex';
      discountEl.textContent = `-${formatCurrency(totals.discountAmount)}`;
    } else {
      discountRow.style.display = 'none';
    }
  }

  if (!cart.length) {
    listEl.innerHTML = `
      <div class="cart-empty-view">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
        </svg>
        <h4>Your shopping bag is empty</h4>
        <p style="margin-bottom: 20px;">Explore the latest collection and pick your favorite sneakers.</p>
        <a href="index.html#products" class="button button-primary">Browse Footwear</a>
      </div>
    `;
    return;
  }

  listEl.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-page-item">
          <img src="${item.image}" alt="${item.name}" />
          <div class="cart-page-item-info">
            <h4>${item.name}</h4>
            <p>${item.category} &bull; EU Size: <strong>${item.size}</strong></p>
            <div class="qty-stepper">
              <button type="button" data-qty-change="-1" data-id="${item.id}" data-size="${item.size}">-</button>
              <span>${item.quantity}</span>
              <button type="button" data-qty-change="1" data-id="${item.id}" data-size="${item.size}">+</button>
            </div>
          </div>
          <div style="text-align: right; display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
            <strong style="font-size: 1.15rem;">${formatCurrency(item.price * item.quantity)}</strong>
            <button type="button" class="cart-item-remove" data-remove-id="${item.id}" data-remove-size="${item.size}" style="align-self: flex-end; margin-top: 16px;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </div>
      `
    )
    .join('');
}

// ==========================================================================
// WHATSAPP ORDER URL GENERATOR
// ==========================================================================

function generateWhatsAppOrderURL(customerDetails = null) {
  if (!cart.length) {
    showToast('Your shopping bag is empty. Please add shoes first!');
    return null;
  }

  const totals = calculateCartTotals();
  let message = `*DV VENTURES — OFFICIAL FOOTWEAR ORDER*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}*\n`;
    message += `   Size: EU ${item.size} | Qty: ${item.quantity}\n`;
    message += `   Price: ${formatCurrency(item.price * item.quantity)}\n\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `Subtotal: ${formatCurrency(totals.subtotal)}\n`;

  if (totals.discountAmount > 0) {
    message += `Promo Discount: -${formatCurrency(totals.discountAmount)} (DVFIRST)\n`;
  }

  message += `Delivery: ${totals.isFreeDelivery ? 'FREE (Nationwide)' : formatCurrency(totals.deliveryFee)}\n`;
  message += `*TOTAL AMOUNT: ${formatCurrency(totals.grandTotal)}*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;

  if (customerDetails) {
    message += `*Customer Information:*\n`;
    message += `Name: ${customerDetails.name}\n`;
    message += `Phone: ${customerDetails.phone}\n`;
    message += `Address: ${customerDetails.address}, ${customerDetails.city || ''}, ${customerDetails.state}\n`;
    if (customerDetails.notes) {
      message += `Note: ${customerDetails.notes}\n`;
    }
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  }

  message += `Please confirm product availability and provide account details for payment.`;

  return `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ==========================================================================
// CATALOG FILTERING & RENDERING (Storefront)
// ==========================================================================

function getFilteredProducts() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  let list = products.filter((p) => {
    // Category match
    const matchCat = activeCategory === 'all' || p.category === activeCategory;

    // Price range match
    let matchPrice = true;
    if (activePriceRange === 'under-25k') matchPrice = p.price <= 25000;
    else if (activePriceRange === '25k-35k') matchPrice = p.price > 25000 && p.price <= 35000;
    else if (activePriceRange === 'above-35k') matchPrice = p.price > 35000;

    // Search query match
    const matchSearch =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      (p.detail && p.detail.toLowerCase().includes(query)) ||
      (p.tag && p.tag.toLowerCase().includes(query));

    return matchCat && matchPrice && matchSearch;
  });

  // Sorting
  if (activeSort === 'price-asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'rating') {
    list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  return list;
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const filtered = getFilteredProducts();

  // Update counter
  const counterEl = document.getElementById('catalogCount');
  if (counterEl) {
    counterEl.textContent = `Showing ${filtered.length} shoe${filtered.length === 1 ? '' : 's'}`;
  }

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="catalog-empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <h3>No matching shoes found</h3>
        <p>Try adjusting your search query, price filter, or category selection.</p>
        <button class="button button-secondary" type="button" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((product) => {
      const isSaved = wishlist.includes(product.id);
      const discountPct = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
      const sizeList = product.sizes || [40, 41, 42, 43, 44, 45];

      return `
        <article class="product-card" data-card-id="${product.id}">
          <div class="product-image-wrap">
            <span class="product-tag">${product.tag || 'Popular'}</span>
            
            <div class="card-quick-actions">
              <button class="quick-action-btn ${isSaved ? 'active' : ''}" type="button" data-wishlist-id="${product.id}" title="Save to wishlist">
                <svg viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <button class="quick-action-btn" type="button" data-quickview-id="${product.id}" title="Quick preview">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>

            <img src="${product.image}" alt="${product.name}" loading="lazy" onclick="openQuickView(${product.id})" style="cursor: pointer;" />
          </div>

          <div class="product-body">
            <div class="product-meta">
              <span class="product-category">${product.category}</span>
              <div class="product-rating">
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span>${product.rating || '4.8'} (${product.reviews || '120'})</span>
              </div>
            </div>

            <h3 class="product-title" onclick="openQuickView(${product.id})">${product.name}</h3>
            <p class="product-detail">${product.detail}</p>

            <div class="product-sizes-preview">
              <span>Sizes:</span>
              ${sizeList.slice(0, 4).map((s) => `<span class="size-preview-chip">${s}</span>`).join('')}
              ${sizeList.length > 4 ? `<span class="size-preview-chip">+${sizeList.length - 4}</span>` : ''}
            </div>

            <div class="product-foot">
              <div class="price-stack">
                <span class="current-price">${formatCurrency(product.price)}</span>
                <div class="price-sub-row">
                  ${product.oldPrice ? `<span class="old-price">${formatCurrency(product.oldPrice)}</span>` : ''}
                  ${discountPct > 0 ? `<span class="discount-tag">-${discountPct}%</span>` : ''}
                </div>
              </div>

              <button class="add-cart-btn" type="button" onclick="addToCart(${product.id}, 42)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>Add</span>
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  // Wishlist clicks
  document.querySelectorAll('[data-wishlist-id]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(Number(btn.dataset.wishlistId));
    });
  });

  // Quickview triggers
  document.querySelectorAll('[data-quickview-id]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openQuickView(Number(btn.dataset.quickviewId));
    });
  });

  // Trigger wow-factor scroll reveals
  initScrollReveals();
}

function initScrollReveals() {
  const elements = document.querySelectorAll('.product-card:not(.visible), .promo-item:not(.visible), .pricing-card:not(.visible), .testimonial-card:not(.visible), .section-head:not(.visible), .stat-item:not(.visible)');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -20px 0px'
  });

  elements.forEach((el) => observer.observe(el));
}

function resetFilters() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';

  activeCategory = 'all';
  activePriceRange = 'all';
  activeSort = 'default';

  document.querySelectorAll('.category-chip').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });

  document.querySelectorAll('.price-chip').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.priceRange === 'all');
  });

  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'default';

  renderProducts();
  showToast('Filters cleared');
}

function setCategoryFilter(category) {
  activeCategory = category;
  document.querySelectorAll('.category-chip').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  renderProducts();
}

// ==========================================================================
// QUICK VIEW MODAL LOGIC
// ==========================================================================

function openQuickView(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  currentQuickViewProduct = product;
  currentQuickViewSize = 42;
  currentQuickViewQty = 1;

  const backdrop = document.getElementById('quickviewModalBackdrop');
  const imgEl = document.getElementById('qvImage');
  const badgeEl = document.getElementById('qvBadge');
  const titleEl = document.getElementById('qvTitle');
  const priceEl = document.getElementById('qvPrice');
  const oldPriceEl = document.getElementById('qvOldPrice');
  const discountEl = document.getElementById('qvDiscount');
  const descEl = document.getElementById('qvDescription');
  const qtyDisplay = document.getElementById('qvQtyDisplay');
  const sizeGrid = document.getElementById('qvSizeGrid');

  if (!backdrop) return;

  if (imgEl) imgEl.src = product.image;
  if (badgeEl) badgeEl.textContent = product.tag || 'Premium';
  if (titleEl) titleEl.textContent = product.name;
  if (priceEl) priceEl.textContent = formatCurrency(product.price);
  if (oldPriceEl) {
    oldPriceEl.textContent = product.oldPrice ? formatCurrency(product.oldPrice) : '';
  }
  if (discountEl) {
    const discountPct = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;
    discountEl.textContent = `-${discountPct}%`;
    discountEl.style.display = discountPct > 0 ? 'inline-block' : 'none';
  }
  if (descEl) descEl.textContent = product.detail;
  if (qtyDisplay) qtyDisplay.textContent = '1';

  // Size grid
  if (sizeGrid) {
    const availableSizes = product.sizes || [40, 41, 42, 43, 44, 45];
    sizeGrid.innerHTML = availableSizes
      .map(
        (size) => `
        <button class="size-btn ${size === currentQuickViewSize ? 'active' : ''}" type="button" data-qv-size="${size}">
          ${size}
        </button>
      `
      )
      .join('');

    sizeGrid.querySelectorAll('[data-qv-size]').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentQuickViewSize = Number(btn.dataset.qvSize);
        sizeGrid.querySelectorAll('[data-qv-size]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
}

function closeQuickViewModal() {
  const backdrop = document.getElementById('quickviewModalBackdrop');
  if (backdrop) {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
  }
}

// ==========================================================================
// AI SHOPPING CONCIERGE LOGIC
// ==========================================================================

function getConciergeResponse(userInput) {
  const text = userInput.toLowerCase();

  // Budget matching
  if (text.includes('under') || text.includes('less than') || text.includes('budget') || text.includes('cheap') || text.includes('price')) {
    const numMatch = text.match(/\d+/);
    let max = 25000;
    if (numMatch) {
      const parsed = Number(numMatch[0]);
      max = parsed < 1000 ? parsed * 1000 : parsed;
    }
    const matches = products.filter((p) => p.price <= max);
    if (matches.length) {
      return {
        text: `Here are our best recommended footwear models under ${formatCurrency(max)}:`,
        shoes: matches.slice(0, 2)
      };
    }
    return {
      text: `Our premium collection starts from ${formatCurrency(19500)} (like the Coastline Slide). Would you like to see styles around ₦20,000–₦28,000?`,
      shoes: products.filter((p) => p.price <= 28000).slice(0, 2)
    };
  }

  // Running
  if (text.includes('run') || text.includes('trainer') || text.includes('gym') || text.includes('sport') || text.includes('workout')) {
    const runningShoes = products.filter((p) => p.category === 'Running');
    return {
      text: `For active movement and running, these lightweight high-cushion models deliver superior responsiveness and grip:`,
      shoes: runningShoes.slice(0, 2)
    };
  }

  // Formal / Dress / Office
  if (text.includes('formal') || text.includes('leather') || text.includes('office') || text.includes('suit') || text.includes('event')) {
    const formalShoes = products.filter((p) => p.category === 'Formal');
    return {
      text: `For business and formal events, these handcrafted leather styles offer timeless elegance and tailored fit:`,
      shoes: formalShoes.slice(0, 2)
    };
  }

  // Sandals / Slides
  if (text.includes('sandal') || text.includes('slide') || text.includes('casual') || text.includes('home')) {
    const sandals = products.filter((p) => p.category === 'Sandals');
    return {
      text: `Our casual slides feature molded ergonomic footbeds for effortless comfort:`,
      shoes: sandals.slice(0, 2)
    };
  }

  // Delivery & Shipping
  if (text.includes('delivery') || text.includes('ship') || text.includes('where') || text.includes('lagos') || text.includes('abuja')) {
    return {
      text: `We deliver nationwide across Nigeria! Delivery takes 24–48 hours in Lagos & Abuja, and 3–4 days to other states. Best of all, all orders over ₦50,000 get FREE delivery!`,
      shoes: []
    };
  }

  // Size help
  if (text.includes('size') || text.includes('fit') || text.includes('chart')) {
    return {
      text: `All DV Ventures shoes follow standard EU sizing (EU 40 to 45). If you are between sizes or have wide feet, we recommend ordering one size up. We also offer 7-day hassle-free size swaps!`,
      shoes: []
    };
  }

  // Best sellers default
  const bestSellers = products.filter((p) => p.tag === 'Best seller' || p.tag === 'Popular' || p.tag === 'Top pick');
  return {
    text: `Here are our current customer favorites, praised for superior durability and styling:`,
    shoes: bestSellers.slice(0, 2)
  };
}

function appendChatMessage(content, role = 'bot', shoes = []) {
  const container = document.getElementById('chatMessages');
  if (!container) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${role}`;

  let html = `<p>${content}</p>`;

  if (shoes && shoes.length) {
    shoes.forEach((shoe) => {
      html += `
        <div class="chat-shoe-card">
          <img src="${shoe.image}" alt="${shoe.name}" />
          <div class="chat-shoe-info">
            <strong>${shoe.name}</strong>
            <span>${formatCurrency(shoe.price)}</span>
          </div>
          <button class="button button-primary button-sm" type="button" onclick="addToCart(${shoe.id}, 42)" style="padding: 4px 10px; font-size: 0.75rem;">
            Add (42)
          </button>
        </div>
      `;
    });
  }

  msgDiv.innerHTML = html;
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

function handleConciergeSubmit(inputVal) {
  if (!inputVal) return;

  appendChatMessage(inputVal, 'user');

  // Typing indicator
  const container = document.getElementById('chatMessages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message bot typing-indicator';
  typingDiv.id = 'chatTypingIndicator';
  typingDiv.innerHTML = `<span></span><span></span><span></span>`;
  container.appendChild(typingDiv);
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    const indicator = document.getElementById('chatTypingIndicator');
    if (indicator) indicator.remove();

    const response = getConciergeResponse(inputVal);
    appendChatMessage(response.text, 'bot', response.shoes);
  }, 450);
}

function openChatWithPrompt(promptText) {
  const box = document.getElementById('chatBox');
  if (box) box.classList.remove('hidden');

  const input = document.getElementById('chatInput');
  if (input) {
    input.value = promptText;
    handleConciergeSubmit(promptText);
    input.value = '';
  }
}

// ==========================================================================
// ADMIN DASHBOARD LOGIC (admin.html)
// ==========================================================================

function unlockAdmin() {
  const input = document.getElementById('adminPassword');
  const panel = document.getElementById('adminAccessPanel');
  const dash = document.getElementById('adminDashboard');

  if (!input || !panel || !dash) return;

  if (input.value.trim() !== ADMIN_PASSWORD) {
    showToast('Incorrect administrator password', '<svg viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>');
    return;
  }

  localStorage.setItem('dv-admin-unlocked', 'true');
  panel.classList.add('hidden');
  dash.classList.remove('hidden');
  renderAdminEditor();
  showToast('Store admin portal unlocked successfully');
}

function renderAdminEditor() {
  const listEl = document.getElementById('productEditorList');
  const countEl = document.getElementById('adminProductCount');
  const avgEl = document.getElementById('adminAveragePrice');
  const topTagEl = document.getElementById('adminTopTag');
  const totalValEl = document.getElementById('adminTotalValue');

  if (!listEl) return;

  // Compute metrics
  const totalProducts = products.length;
  const avgPrice = totalProducts ? Math.round(products.reduce((acc, p) => acc + Number(p.price || 0), 0) / totalProducts) : 0;
  const totalVal = products.reduce((acc, p) => acc + Number(p.price || 0) * 10, 0); // Estimated 10 units in stock each

  const tags = products.map((p) => p.tag || 'Popular');
  const topTag = tags.length ? tags[0] : '—';

  if (countEl) countEl.textContent = String(totalProducts);
  if (avgEl) avgEl.textContent = formatCurrency(avgPrice);
  if (topTagEl) topTagEl.textContent = topTag;
  if (totalValEl) totalValEl.textContent = formatCurrency(totalVal);

  listEl.innerHTML = products
    .map(
      (product, idx) => `
        <article class="admin-product-card" data-admin-index="${idx}">
          <div class="admin-card-head">
            <strong>#${idx + 1} — ${product.name}</strong>
            <button class="button button-outline button-sm" type="button" data-admin-delete="${product.id}" style="color: var(--danger); border-color: var(--danger-soft);">
              Delete
            </button>
          </div>

          <div class="admin-preview-row">
            <div class="admin-image-preview">
              <img src="${product.image}" alt="${product.name}" id="adminPreviewImg-${product.id}" />
            </div>
            <div style="flex: 1;">
              <label style="font-size: 0.78rem; font-weight: 700; color: var(--text-dim); display: block; margin-bottom: 4px;">Image File</label>
              <input type="file" accept="image/*" data-admin-upload="${product.id}" style="font-size: 0.8rem; width: 100%;" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Product Name</label>
              <input data-field="name" data-index="${idx}" value="${product.name}" />
            </div>
            <div class="form-group">
              <label>Category</label>
              <select data-field="category" data-index="${idx}">
                <option value="Running" ${product.category === 'Running' ? 'selected' : ''}>Running</option>
                <option value="Lifestyle" ${product.category === 'Lifestyle' ? 'selected' : ''}>Lifestyle</option>
                <option value="Sneakers" ${product.category === 'Sneakers' ? 'selected' : ''}>Sneakers</option>
                <option value="Sandals" ${product.category === 'Sandals' ? 'selected' : ''}>Sandals</option>
                <option value="Formal" ${product.category === 'Formal' ? 'selected' : ''}>Formal</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Price (₦)</label>
              <input type="number" data-field="price" data-index="${idx}" value="${product.price}" />
            </div>
            <div class="form-group">
              <label>Original Price (₦)</label>
              <input type="number" data-field="oldPrice" data-index="${idx}" value="${product.oldPrice || ''}" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Badge Tag</label>
              <input data-field="tag" data-index="${idx}" value="${product.tag || ''}" />
            </div>
            <div class="form-group">
              <label>Rating (e.g. 4.9)</label>
              <input type="number" step="0.1" data-field="rating" data-index="${idx}" value="${product.rating || 4.8}" />
            </div>
          </div>

          <div class="form-group">
            <label>Description Details</label>
            <textarea rows="2" data-field="detail" data-index="${idx}">${product.detail || ''}</textarea>
          </div>
        </article>
      `
    )
    .join('');

  // Field change events
  listEl.querySelectorAll('[data-field]').forEach((input) => {
    input.addEventListener('input', (e) => {
      const idx = Number(e.target.dataset.index);
      const field = e.target.dataset.field;
      const val = e.target.value;
      if (products[idx]) {
        if (field === 'price' || field === 'oldPrice' || field === 'rating') {
          products[idx][field] = Number(val) || 0;
        } else {
          products[idx][field] = val;
        }
      }
    });
  });

  // Photo upload
  listEl.querySelectorAll('[data-admin-upload]').forEach((input) => {
    input.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const id = Number(e.target.dataset.adminUpload);
      const product = products.find((p) => p.id === id);
      if (!product) return;

      const reader = new FileReader();
      reader.onload = () => {
        product.image = reader.result;
        const img = document.getElementById(`adminPreviewImg-${id}`);
        if (img) img.src = reader.result;
        showToast(`Photo updated for ${product.name}`);
      };
      reader.readAsDataURL(file);
    });
  });

  // Delete product
  listEl.querySelectorAll('[data-admin-delete]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.adminDelete);
      if (confirm('Are you sure you want to remove this shoe from the catalog?')) {
        products = products.filter((p) => p.id !== id);
        persistProducts();
        renderAdminEditor();
        showToast('Shoe removed from store');
      }
    });
  });
}

// ==========================================================================
// INITIALIZATION & EVENT LISTENERS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Renders
  renderProducts();
  renderCart();
  updateWishlistUI();
  initScrollReveals();

  // 2. Navbar Scroll Shadow
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  // 3. Search Shortcut ('/')
  window.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.focus();
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', renderProducts);
  }

  // 4. Category Chips
  document.querySelectorAll('.category-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      document.querySelectorAll('.category-chip').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts();
    });
  });

  // 5. Price Preset Chips
  document.querySelectorAll('.price-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      activePriceRange = btn.dataset.priceRange;
      document.querySelectorAll('.price-chip').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts();
    });
  });

  // 6. Sort Select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderProducts();
    });
  }

  // 7. Clear Filters
  const clearFilterBtn = document.getElementById('clearFilter');
  if (clearFilterBtn) {
    clearFilterBtn.addEventListener('click', resetFilters);
  }

  // 8. Cart Drawer Toggle & Backdrop
  const cartToggleBtn = document.getElementById('cartToggle');
  const closeCartBtn = document.getElementById('closeCart');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const mobileCartBtn = document.getElementById('mobileCartBtn');

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartDrawer);
  if (mobileCartBtn) mobileCartBtn.addEventListener('click', openCartDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  // 9. Promo Code Forms (Drawer & Cart Page)
  const promoForm = document.getElementById('cartPromoForm');
  if (promoForm) {
    promoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('cartPromoInput');
      const code = input ? input.value.trim().toUpperCase() : '';
      if (code === 'DVFIRST') {
        appliedPromo = 'DVFIRST';
        localStorage.setItem('dv-promo', 'DVFIRST');
        renderCart();
        showToast('Promo code DVFIRST applied! 10% discount added.');
      } else {
        showToast('Invalid promo code. Try DVFIRST');
      }
    });
  }

  const pagePromoForm = document.getElementById('cartPagePromoForm');
  if (pagePromoForm) {
    pagePromoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('cartPagePromoInput');
      const code = input ? input.value.trim().toUpperCase() : '';
      if (code === 'DVFIRST') {
        appliedPromo = 'DVFIRST';
        localStorage.setItem('dv-promo', 'DVFIRST');
        renderCart();
        showToast('Promo code DVFIRST applied! 10% discount added.');
      } else {
        showToast('Invalid promo code. Try DVFIRST');
      }
    });
  }

  // 10. WhatsApp Checkout Buttons
  const orderWhatsAppBtn = document.getElementById('orderWhatsAppBtn');
  if (orderWhatsAppBtn) {
    orderWhatsAppBtn.addEventListener('click', () => {
      const url = generateWhatsAppOrderURL();
      if (url) window.open(url, '_blank');
    });
  }

  const cartPageWhatsAppBtn = document.getElementById('cartPageWhatsAppBtn');
  if (cartPageWhatsAppBtn) {
    cartPageWhatsAppBtn.addEventListener('click', () => {
      const url = generateWhatsAppOrderURL();
      if (url) window.open(url, '_blank');
    });
  }

  // 11. Delivery Destination Selector (Cart page)
  const deliveryDestSelect = document.getElementById('deliveryDestination');
  if (deliveryDestSelect) {
    deliveryDestSelect.addEventListener('change', renderCart);
  }

  // 12. Quick View Modal Events
  const closeQvBtn = document.getElementById('closeQuickView');
  const qvBackdrop = document.getElementById('quickviewModalBackdrop');
  if (closeQvBtn) closeQvBtn.addEventListener('click', closeQuickViewModal);
  if (qvBackdrop) {
    qvBackdrop.addEventListener('click', (e) => {
      if (e.target === qvBackdrop) closeQuickViewModal();
    });
  }

  const qvQtyMinus = document.getElementById('qvQtyMinus');
  const qvQtyPlus = document.getElementById('qvQtyPlus');
  const qvQtyDisplay = document.getElementById('qvQtyDisplay');

  if (qvQtyMinus) {
    qvQtyMinus.addEventListener('click', () => {
      if (currentQuickViewQty > 1) {
        currentQuickViewQty--;
        qvQtyDisplay.textContent = currentQuickViewQty;
      }
    });
  }

  if (qvQtyPlus) {
    qvQtyPlus.addEventListener('click', () => {
      currentQuickViewQty++;
      qvQtyDisplay.textContent = currentQuickViewQty;
    });
  }

  const qvAddToCartBtn = document.getElementById('qvAddToCartBtn');
  if (qvAddToCartBtn) {
    qvAddToCartBtn.addEventListener('click', () => {
      if (currentQuickViewProduct) {
        addToCart(currentQuickViewProduct.id, currentQuickViewSize, currentQuickViewQty);
        closeQuickViewModal();
      }
    });
  }

  const qvWhatsAppBtn = document.getElementById('qvWhatsAppBtn');
  if (qvWhatsAppBtn) {
    qvWhatsAppBtn.addEventListener('click', () => {
      if (!currentQuickViewProduct) return;
      const total = currentQuickViewProduct.price * currentQuickViewQty;
      let text = `*DV VENTURES — INSTANT SHOE ORDER*\n`;
      text += `Model: *${currentQuickViewProduct.name}*\n`;
      text += `Size: EU ${currentQuickViewSize}\n`;
      text += `Quantity: ${currentQuickViewQty}\n`;
      text += `Total Price: ${formatCurrency(total)}\n\n`;
      text += `Please send payment instructions and dispatch timeline.`;
      window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  // 13. Concierge Chat Widget Events
  const chatToggle = document.getElementById('chatToggle');
  const chatBox = document.getElementById('chatBox');
  const chatClose = document.getElementById('chatClose');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const heroChatPrompt = document.getElementById('heroChatPrompt');

  if (chatToggle && chatBox) {
    chatToggle.addEventListener('click', () => chatBox.classList.toggle('hidden'));
  }
  if (chatClose && chatBox) {
    chatClose.addEventListener('click', () => chatBox.classList.add('hidden'));
  }
  if (heroChatPrompt) {
    heroChatPrompt.addEventListener('click', () => {
      if (chatBox) chatBox.classList.remove('hidden');
      if (chatInput) chatInput.focus();
    });
  }

  document.querySelectorAll('[data-prompt]').forEach((btn) => {
    btn.addEventListener('click', () => {
      handleConciergeSubmit(btn.dataset.prompt);
    });
  });

  if (chatForm && chatInput) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = chatInput.value.trim();
      if (!val) return;
      chatInput.value = '';
      handleConciergeSubmit(val);
    });
  }

  // 14. In-Store Checkout Modal (cart.html)
  const openCheckoutModalBtn = document.getElementById('openCheckoutModalBtn');
  const checkoutModalBackdrop = document.getElementById('checkoutModalBackdrop');
  const closeCheckoutModal = document.getElementById('closeCheckoutModal');
  const checkoutForm = document.getElementById('checkoutForm');

  if (openCheckoutModalBtn && checkoutModalBackdrop) {
    openCheckoutModalBtn.addEventListener('click', () => {
      if (!cart.length) {
        showToast('Your bag is empty. Add shoes before proceeding to checkout!');
        return;
      }
      checkoutModalBackdrop.classList.add('open');
    });
  }

  if (closeCheckoutModal && checkoutModalBackdrop) {
    closeCheckoutModal.addEventListener('click', () => {
      checkoutModalBackdrop.classList.remove('open');
    });
  }

  if (checkoutForm && checkoutModalBackdrop) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const customer = {
        name: document.getElementById('custName').value.trim(),
        phone: document.getElementById('custPhone').value.trim(),
        address: document.getElementById('custAddress').value.trim(),
        city: document.getElementById('custCity') ? document.getElementById('custCity').value.trim() : '',
        state: document.getElementById('custState').value,
        notes: document.getElementById('custNotes') ? document.getElementById('custNotes').value.trim() : ''
      };

      const url = generateWhatsAppOrderURL(customer);
      checkoutModalBackdrop.classList.remove('open');
      showToast(`Order confirmed for ${customer.name}! Dispatching to WhatsApp...`);

      // Clear cart
      cart = [];
      persistCart();
      renderCart();

      setTimeout(() => {
        if (url) window.open(url, '_blank');
      }, 700);
    });
  }

  // 15. Admin Console Management (admin.html)
  const adminAccessForm = document.getElementById('adminAccessForm');
  const adminAccessPanel = document.getElementById('adminAccessPanel');
  const adminDashboard = document.getElementById('adminDashboard');
  const logoutAdminButton = document.getElementById('logoutAdminButton');
  const saveStoreButton = document.getElementById('saveStoreButton');
  const restoreDefaultButton = document.getElementById('restoreDefaultButton');
  const openAddProductBtn = document.getElementById('openAddProductBtn');
  const addProductModalBackdrop = document.getElementById('addProductModalBackdrop');
  const closeAddProductModal = document.getElementById('closeAddProductModal');
  const addProductForm = document.getElementById('addProductForm');

  if (adminAccessPanel && adminDashboard) {
    const isUnlocked = localStorage.getItem('dv-admin-unlocked') === 'true';
    if (isUnlocked) {
      adminAccessPanel.classList.add('hidden');
      adminDashboard.classList.remove('hidden');
      renderAdminEditor();
    } else {
      adminAccessPanel.classList.remove('hidden');
      adminDashboard.classList.add('hidden');
    }
  }

  if (adminAccessForm) {
    adminAccessForm.addEventListener('submit', (e) => {
      e.preventDefault();
      unlockAdmin();
    });
  }

  if (logoutAdminButton) {
    logoutAdminButton.addEventListener('click', () => {
      localStorage.removeItem('dv-admin-unlocked');
      if (adminAccessPanel && adminDashboard) {
        adminAccessPanel.classList.remove('hidden');
        adminDashboard.classList.add('hidden');
        showToast('Logged out of admin console');
      }
    });
  }

  if (saveStoreButton) {
    saveStoreButton.addEventListener('click', () => {
      persistProducts();
      showToast('All product updates saved successfully to live storefront!');
    });
  }

  if (restoreDefaultButton) {
    restoreDefaultButton.addEventListener('click', () => {
      if (confirm('Reset all catalog products back to factory defaults?')) {
        products = DEFAULT_PRODUCTS.map((p) => ({ ...p }));
        persistProducts();
        renderAdminEditor();
        showToast('Store catalog reset to default');
      }
    });
  }

  if (openAddProductBtn && addProductModalBackdrop) {
    openAddProductBtn.addEventListener('click', () => addProductModalBackdrop.classList.add('open'));
  }

  if (closeAddProductModal && addProductModalBackdrop) {
    closeAddProductModal.addEventListener('click', () => addProductModalBackdrop.classList.remove('open'));
  }

  if (addProductForm && addProductModalBackdrop) {
    addProductForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('newShoeName').value.trim();
      const category = document.getElementById('newShoeCategory').value;
      const price = Number(document.getElementById('newShoePrice').value) || 25000;
      const oldPrice = Number(document.getElementById('newShoeOldPrice').value) || 0;
      const tag = document.getElementById('newShoeTag').value.trim() || 'New';
      const detail = document.getElementById('newShoeDetail').value.trim() || 'Handcrafted luxury footwear.';
      const fileInput = document.getElementById('newShoeImageFile');
      const file = fileInput && fileInput.files && fileInput.files[0];

      const newId = products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1;

      const finishAdd = (imgSrc) => {
        products.unshift({
          id: newId,
          name,
          category,
          price,
          oldPrice,
          tag,
          detail,
          rating: 5.0,
          reviews: 1,
          sizes: [40, 41, 42, 43, 44, 45],
          image: imgSrc || './WhatsApp Image 2026-09-04 at 17.58.44.jpeg'
        });

        persistProducts();
        renderAdminEditor();
        addProductModalBackdrop.classList.remove('open');
        addProductForm.reset();
        showToast(`Published "${name}" to store catalog!`);
      };

      if (file) {
        const reader = new FileReader();
        reader.onload = () => finishAdd(reader.result);
        reader.readAsDataURL(file);
      } else {
        finishAdd(null);
      }
    });
  }

  // 16. Wishlist Button Toast (if clicked from header)
  const wishlistToggle = document.getElementById('wishlistToggle');
  const mobileWishlistBtn = document.getElementById('mobileWishlistBtn');
  const showWishlistToast = () => {
    if (!wishlist.length) {
      showToast('Your wishlist is empty. Tap the heart on any shoe to save it!');
    } else {
      showToast(`You have ${wishlist.length} shoe${wishlist.length === 1 ? '' : 's'} saved in your favorites!`);
    }
  };
  if (wishlistToggle) wishlistToggle.addEventListener('click', showWishlistToast);
  if (mobileWishlistBtn) mobileWishlistBtn.addEventListener('click', showWishlistToast);
});
