// NUMÉRO WHATSAPP DE BLOCO SHOP
const WHATSAPP_NUMBER = "22651892952"; 

// BASE DE DONNÉES COMPLÈTE : CARTES MÉMOIRE + CHAUSSURES/VÊTEMENTS + 21 HIGH-TECH + 27 NOUVEAUX
const products = [
  // 1. Cartes mémoire
  { id: 101, name: "Carte Mémoire MicroSD 32 Go Ultra", category: "high-tech", price: 3500, image: "https://i.ibb.co/Mk2jc8Wj/1792884673414.jpg", description: "Haute vitesse idéale pour téléphones.", specs: ["32 Go", "High-Speed"] },
  { id: 102, name: "Carte Mémoire MicroSD 64 Go Ultra", category: "high-tech", price: 4500, image: "https://i.ibb.co/nqNtnV4B/1792884577351.jpg", description: "Extension mémoire optimale.", specs: ["64 Go", "Class 10 U1"] },
  { id: 103, name: "Carte Mémoire MicroSD 128 Go Ultra Pro", category: "high-tech", price: 5500, image: "https://i.ibb.co/TqJBFpPD/1792884611494.jpg", description: "Performances vidéo 4K.", specs: ["128 Go", "Ultra U3"] },

  // 2. Chaussures et vêtements
  { id: 201, name: "Basket Casual Ville Blanche", category: "general", price: 12500, image: "https://i.ibb.co/10860350/watermarked_img_10860350006639622189.jpg", description: "Basket confortable et moderne.", specs: ["Mode", "En stock"] },
  { id: 202, name: "Chaussure Toile Légère Grise", category: "general", price: 7500, image: "https://i.ibb.co/59561323/watermarked_img_5956132395258491407.jpg", description: "Toile respirante et légère.", specs: ["Mode", "En stock"] },
  { id: 203, name: "Chemise Homme Wax Moderne", category: "general", price: 15000, image: "https://i.ibb.co/23415856/watermarked_img_2341585606481267185.jpg", description: "Wax pur coton de qualité.", specs: ["Vêtement", "En stock"] },

  // 3. Les 21 Articles High-Tech
  { id: 301, name: "Accessoire High-Tech 01", category: "high-tech", price: 1500, image: "https://i.ibb.co/TMPhkQ0j/IMG-20261011-WA0049.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 302, name: "Accessoire High-Tech 02", category: "high-tech", price: 1500, image: "https://i.ibb.co/dsJc8pD6/IMG-20261011-WA0048.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 303, name: "Accessoire High-Tech 03", category: "high-tech", price: 1500, image: "https://i.ibb.co/CKgTvL4d/IMG-20261011-WA0046.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 304, name: "Accessoire High-Tech 04", category: "high-tech", price: 1500, image: "https://i.ibb.co/ycrmNQmB/IMG-20261011-WA0067.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 305, name: "Accessoire High-Tech 05", category: "high-tech", price: 1500, image: "https://i.ibb.co/nqL0qt7q/IMG-20261011-WA0050.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 306, name: "Accessoire High-Tech 06", category: "high-tech", price: 1500, image: "https://i.ibb.co/Nn3HtRZZ/IMG-20261011-WA0052.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 307, name: "Accessoire High-Tech 07", category: "high-tech", price: 1500, image: "https://i.ibb.co/Y7KGFFRs/IMG-20261011-WA0051.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 308, name: "Accessoire High-Tech 08", category: "high-tech", price: 3000, image: "https://i.ibb.co/mrVMvxKr/IMG-20261011-WA0066.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 309, name: "Accessoire High-Tech 09", category: "high-tech", price: 3000, image: "https://i.ibb.co/MD72znwB/IMG-20261011-WA0063.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 310, name: "Accessoire High-Tech 10", category: "high-tech", price: 3000, image: "https://i.ibb.co/XMXwhbm/IMG-20261011-WA0056.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 311, name: "Accessoire High-Tech 11", category: "high-tech", price: 3000, image: "https://i.ibb.co/kVSn2z86/IMG-20261011-WA0055.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 312, name: "Accessoire High-Tech 12", category: "high-tech", price: 3000, image: "https://i.ibb.co/YBjzTWVp/IMG-20261011-WA0057.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 313, name: "Accessoire High-Tech 13", category: "high-tech", price: 3000, image: "https://i.ibb.co/pBrrqT63/IMG-20261011-WA0058.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 314, name: "Accessoire High-Tech 14", category: "high-tech", price: 3000, image: "https://i.ibb.co/G4rsyXQH/IMG-20261011-WA0059.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 315, name: "Accessoire High-Tech 15", category: "high-tech", price: 3000, image: "https://i.ibb.co/C3rX0V0T/IMG-20261011-WA0047.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 316, name: "Accessoire High-Tech 16", category: "high-tech", price: 3000, image: "https://i.ibb.co/YBLpk5BV/IMG-20261011-WA0060.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 317, name: "Accessoire High-Tech 17", category: "high-tech", price: 3000, image: "https://i.ibb.co/DDrr2Jg9/IMG-20261011-WA0054.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 318, name: "Accessoire High-Tech 18 (Pro)", category: "high-tech", price: 4500, image: "https://i.ibb.co/TM4J0WM7/IMG-20261011-WA0044.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 319, name: "Accessoire High-Tech 19 (Ultra)", category: "high-tech", price: 7000, image: "https://i.ibb.co/LXyKHRtN/IMG-20261011-WA0070.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 320, name: "Accessoire High-Tech 20 (Ultra)", category: "high-tech", price: 7000, image: "https://i.ibb.co/Cswn5Q5w/IMG-20261011-WA0039.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },
  { id: 321, name: "Accessoire High-Tech 21 (Ultra)", category: "high-tech", price: 7000, image: "https://i.ibb.co/Y7My2pGR/IMG-20261011-WA0064.jpg", description: "Article High-tech.", specs: ["High-Tech", "Stock Karpala"] },

  // 4. Les 27 Nouveaux Articles ImgBB
  { id: 401, name: "Article Sélection 01", category: "general", price: 35000, image: "https://i.ibb.co/vxpbd7sb/1792937138856.jpg", description: "Sélection Bloco Shop.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 402, name: "Article Sélection 02", category: "general", price: 35000, image: "https://i.ibb.co/Y7F9wx42/1792937142772.jpg", description: "Sélection Bloco Shop.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 403, name: "Article Sélection 03", category: "general", price: 35000, image: "https://i.ibb.co/pjpw9CT8/1792937145806.jpg", description: "Sélection Bloco Shop.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 404, name: "Article Sélection 04", category: "general", price: 35000, image: "https://i.ibb.co/R44jYhWs/1792937150324.jpg", description: "Sélection Bloco Shop.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 405, name: "Article Sélection 05", category: "general", price: 35000, image: "https://i.ibb.co/VWnqvmmw/1792937156226.jpg", description: "Sélection Bloco Shop.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 406, name: "Article Sélection 06", category: "general", price: 35000, image: "https://i.ibb.co/wtcz35b/1792937162446.jpg", description: "Sélection Bloco Shop.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 407, name: "Article Sélection 07", category: "general", price: 35000, image: "https://i.ibb.co/Cs7ZjGdt/1792937176592.jpg", description: "Sélection Bloco Shop.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 408, name: "Article Sélection 08", category: "general", price: 35000, image: "https://i.ibb.co/8gRS7T2J/1792937179148.jpg", description: "Sélection Bloco Shop.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 409, name: "Article Sélection 09", category: "general", price: 35000, image: "https://i.ibb.co/Kc4c3ZFz/1792937181860.jpg", description: "Sélection Bloco Shop.", specs: ["Qualité Supérieure", "Stock Karpala"] },

  { id: 410, name: "Article Tendance 10", category: "general", price: 35000, image: "https://i.ibb.co/jvR8dy8f/1792937241321.jpg", description: "Modèle tendance.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 411, name: "Article Tendance 11", category: "general", price: 35000, image: "https://i.ibb.co/C5qCNCtQ/1792937244554.jpg", description: "Modèle tendance.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 412, name: "Article Tendance 12", category: "general", price: 35000, image: "https://i.ibb.co/TMtyFt1x/1792937246651.jpg", description: "Modèle tendance.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 413, name: "Article Tendance 13", category: "general", price: 35000, image: "https://i.ibb.co/1GRfPXtp/1792937249238.jpg", description: "Modèle tendance.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 414, name: "Article Tendance 14", category: "general", price: 35000, image: "https://i.ibb.co/9mk6Frjk/1792937254990.jpg", description: "Modèle tendance.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 415, name: "Article Tendance 15", category: "general", price: 35000, image: "https://i.ibb.co/Xf1qWXGB/1792937257520.jpg", description: "Modèle tendance.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 416, name: "Article Tendance 16", category: "general", price: 35000, image: "https://i.ibb.co/fYgmzGdt/1792937264958.jpg", description: "Modèle tendance.", specs: ["Qualité Supérieure", "Stock Karpala"] },
  { id: 417, name: "Article Tendance 17", category: "general", price: 35000, image: "https://i.ibb.co/WWq3jn7g/1792937268111.jpg", description: "Modèle tendance.", specs: ["Qualité Supérieure", "Stock Karpala"] },

  { id: 418, name: "Article Standard 18", category: "general", price: 10000, image: "https://i.ibb.co/qFMrpXrZ/1792937587680.jpg", description: "Article du quotidien.", specs: ["Gamme Standard", "Stock Karpala"] },
  { id: 419, name: "Article Standard 19", category: "general", price: 10000, image: "https://i.ibb.co/0pfrv8P1/1792937598323.jpg", description: "Article du quotidien.", specs: ["Gamme Standard", "Stock Karpala"] },
  { id: 420, name: "Article Standard 20", category: "general", price: 10000, image: "https://i.ibb.co/XxtMfFDc/1792937595730.jpg", description: "Article du quotidien.", specs: ["Gamme Standard", "Stock Karpala"] },
  { id: 421, name: "Article Standard 21", category: "general", price: 10000, image: "https://i.ibb.co/Mx2j5vFq/1792937593093.jpg", description: "Article du quotidien.", specs: ["Gamme Standard", "Stock Karpala"] },
  { id: 422, name: "Article Standard 22", category: "general", price: 10000, image: "https://i.ibb.co/CKPH83Vd/1792937590184.jpg", description: "Article du quotidien.", specs: ["Gamme Standard", "Stock Karpala"] },

  { id: 423, name: "Article Classique 23", category: "general", price: 6000, image: "https://i.ibb.co/gMkxY9ZJ/1792938412363.jpg", description: "Article à petit prix.", specs: ["Petit Prix", "Stock Karpala"] },
  { id: 424, name: "Article Classique 24", category: "general", price: 6000, image: "https://i.ibb.co/1fHBmGT7/1792938415279.jpg", description: "Article à petit prix.", specs: ["Petit Prix", "Stock Karpala"] },
  { id: 425, name: "Article Classique 25", category: "general", price: 6000, image: "https://i.ibb.co/LDDVDRWr/1792938423781.jpg", description: "Article à petit prix.", specs: ["Petit Prix", "Stock Karpala"] },
  { id: 426, name: "Article Classique 26", category: "general", price: 6000, image: "https://i.ibb.co/xKyKpQyz/1792938420740.jpg", description: "Article à petit prix.", specs: ["Petit Prix", "Stock Karpala"] },
  { id: 427, name: "Article Classique 27", category: "general", price: 6000, image: "https://i.ibb.co/d09JQdPs/1792938418599.jpg", description: "Article à petit prix.", specs: ["Petit Prix", "Stock Karpala"] }
];

let cart = [];
let currentProductDetail = null;

// CHARGEMENT DU DOM
document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('productsGrid');
  const cartBtn = document.getElementById('cartBtn');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.getElementById('closeCart');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotalElement = document.getElementById('cartTotal');
  const cartCountElement = document.getElementById('cartCount');
  const searchInput = document.getElementById('searchInput');
  const categoryButtons = document.querySelectorAll('.cat-btn');
  const checkoutForm = document.getElementById('checkoutForm');

  const productModal = document.getElementById('productModal');
  const closeProductModal = document.getElementById('closeProductModal');
  const modalProductImg = document.getElementById('modalProductImg');
  const modalProductName = document.getElementById('modalProductName');
  const modalProductPrice = document.getElementById('modalProductPrice');
  const modalProductDesc = document.getElementById('modalProductDesc');
  modalProductSpecs = document.getElementById('modalProductSpecs');
  const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');

  // Affichage dynamique
  function renderProducts(items) {
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    items.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onclick="openProductDetail(${product.id})" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500';">
        <div class="product-card-body">
          <h3 onclick="openProductDetail(${product.id})">${product.name}</h3>
          <div class="card-price">${product.price.toLocaleString('fr-FR')} FCFA</div>
          <div class="card-actions">
            <button class="btn-detail" onclick="openProductDetail(${product.id})"><i class="fas fa-eye"></i> Détails</button>
            <button class="btn-add" onclick="addToCart(${product.id})"><i class="fas fa-cart-plus"></i> Ajouter</button>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });
  }

  // Détails produit
  window.openProductDetail = function(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProductDetail = product;
    modalProductImg.src = product.image;
    modalProductName.textContent = product.name;
    modalProductPrice.textContent = `${product.price.toLocaleString('fr-FR')} FCFA`;
    modalProductDesc.textContent = product.description;

    modalProductSpecs.innerHTML = '';
    product.specs.forEach(spec => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="fas fa-check" style="color: green; margin-right: 5px;"></i> ${spec}`;
      modalProductSpecs.appendChild(li);
    });

    productModal.style.display = 'flex';
  };

  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener('click', () => {
      if (currentProductDetail) {
        addToCart(currentProductDetail.id);
        productModal.style.display = 'none';
      }
    });
  }

  // Panier
  window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
  };

  function updateCartUI() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (cartCountElement) cartCountElement.textContent = totalItems;

    if (cartItemsContainer) {
      cartItemsContainer.innerHTML = '';
      let totalPrice = 0;

      cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
          <div>
            <strong>${item.name}</strong><br>
            <small>${item.price.toLocaleString('fr-FR')} FCFA x ${item.quantity}</small>
          </div>
          <div>
            <strong>${(item.price * item.quantity).toLocaleString('fr-FR')} FCFA</strong>
          </div>
        `;
        cartItemsContainer.appendChild(div);
      });

      if (cartTotalElement) cartTotalElement.textContent = `${totalPrice.toLocaleString('fr-FR')} FCFA`;
    }
  }

  // Gestion Modals
  if (cartBtn) cartBtn.addEventListener('click', () => cartModal.style.display = 'flex');
  if (closeCart) closeCart.addEventListener('click', () => cartModal.style.display = 'none');
  if (closeProductModal) closeProductModal.addEventListener('click', () => productModal.style.display = 'none');

  window.addEventListener('click', (e) => {
    if (e.target === cartModal) cartModal.style.display = 'none';
    if (e.target === productModal) productModal.style.display = 'none';
  });

  // Filtres et Recherche
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.cat-btn.active')?.classList.remove('active');
      btn.classList.add('active');
      
      const cat = btn.dataset.category;
      const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
      renderProducts(filtered);
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filtered = products.filter(p => p.name.toLowerCase().includes(searchTerm));
      renderProducts(filtered);
    });
  }

  // WhatsApp Checkout
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
      }

      const name = document.getElementById('clientName').value;
      const phone = document.getElementById('clientPhone').value;
      const address = document.getElementById('clientAddress').value;

      let message = `Bonjour Bloco Shop, je souhaite passer une commande :\n\n`;
      message += `👤 *Client :* ${name}\n`;
      message += `📞 *Téléphone :* ${phone}\n`;
      message += `📍 *Livraison :* ${address}\n\n`;
      message += `🛒 *Détails du panier :*\n`;

      let total = 0;
      cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `- ${item.name} (x${item.quantity}) : ${itemTotal.toLocaleString('fr-FR')} FCFA\n`;
      });

      message += `\n💰 *Total à payer :* ${total.toLocaleString('fr-FR')} FCFA`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
    });
  }

  // Lancement
  renderProducts(products);
});