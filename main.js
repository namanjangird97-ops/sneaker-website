 document.addEventListener('DOMContentLoaded', () => {
            // --- DATA ---
            const products = [
                { id: 1, name: 'Air Jordan 12 Retro', price: 178.35, rating: 4.8, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b2d2a79f-92b8-4a94-887a-55d3dbe3805f/AIR+JORDAN+12+RETRO.png', category: 'sneaker', gender: 'men' },
                { id: 2, name: 'Air Jordan 1 Mid', price: 406.27, rating: 4.9, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/df9c2294-22f4-403c-88b9-63428e8585da/AIR+JORDAN+1+MID+SE.png', category: 'sneaker', gender: 'men' },
                { id: 3, name: 'Nike Air Premium', price: 219.78, rating: 4.7, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/063f4140-d173-4f7c-a6ae-14f3b9bdfd72/AIR+MAX+90+PRM.png', category: 'sneaker', gender: 'unisex' },
                { id: 4, name: 'Nike Air Force 1', price: 710.88, rating: 5.0, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png', category: 'sports', gender: 'unisex' },
                { id: 5, name: 'Nike Free Terra', price: 880.05, rating: 4.6, image: 'https://static.nike.com/a/images/w_1280,q_auto,f_auto/e4427181-44d0-48f4-bc5c-11ed2b5865a0/free-terra-vista-black-and-canvas-cz1757-001-release-date.jpg', category: 'sports', gender: 'women' },
                { id: 6, name: 'Jordan Play', price: 550.65, rating: 4.5, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8d913905-4df8-4443-8146-162202b66271/JORDAN+PLAY+SLIDE.png', category: 'sandal', gender: 'unisex' },
                { id: 7, name: 'Nike Air Force X', price: 970.55, rating: 4.8, image: 'https://static.nike.com/a/images/w_1280,q_auto,f_auto/e900f437-53f3-4ed1-a583-b8560fea17af/air-force-1-low-x-kobe-varsity-maize-and-varsity-purple-fz1151-100-release-date.jpg', category: 'boot', gender: 'men' },
                { id: 8, name: 'Air Jordan 1 Low', price: 847.35, rating: 4.7, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/19df9d98-c16a-423d-9e1e-3e126dae0e77/AIR+JORDAN+1+LOW+SE.png', category: 'sneaker', gender: 'women' },
            ];

            const cart = [];

            // --- DOM ELEMENTS ---
            const productGrid = document.getElementById('product-grid');
            const categoryProductGrid = document.getElementById('category-product-grid');
            const searchInput = document.getElementById('searchInput');
            const categoryFilters = document.getElementById('category-filters');
            const cartCountEl = document.getElementById('cart-count');
            const notificationEl = document.getElementById('cart-notification');

            // --- FUNCTIONS ---

            const renderFeaturedProducts = (productsToRender, gridContainer) => {
                gridContainer.innerHTML = '';
                productsToRender.forEach(product => {
                    const productCard = `
                        <article class="product-card bg-white/5 rounded-2xl overflow-hidden group">
                            <div class="p-4 bg-gray-200/5">
                                <img src="${product.image}" alt="${product.name}" class="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-300">
                            </div>
                            <div class="p-5">
                                <h3 class="text-xl font-bold mb-2">${product.name}</h3>
                                <div class="flex justify-between items-center">
                                    <p class="text-lg font-semibold">$${product.price.toFixed(2)}</p>
                                    <div class="flex items-center gap-2">
                                        <span class="text-yellow-400">★ ${product.rating}</span>
                                        <button data-id="${product.id}" class="add-to-cart-btn bg-red-600 hover:bg-red-700 text-white font-bold p-2 rounded-lg transition-transform transform hover:scale-110 duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    `;
                    gridContainer.insertAdjacentHTML('beforeend', productCard);
                });
            };

            const renderCategoryProducts = (productsToRender, gridContainer) => {
                gridContainer.innerHTML = '';
                productsToRender.forEach(product => {
                    const productCard = `
                        <article class="product-card-small text-center rounded-2xl overflow-hidden group p-4 transform hover:-translate-y-2 transition-transform duration-300">
                             <div class="bg-gray-800/60 rounded-xl p-4 mb-4">
                                <img src="${product.image}" alt="${product.name}" class="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-300">
                            </div>
                            <h3 class="font-semibold mb-1">${product.name}</h3>
                            <p class="font-bold text-red-500 mb-2">$${product.price.toFixed(2)}</p>
                            <button data-id="${product.id}" class="add-to-cart-btn w-full bg-gray-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                                BUY NOW
                            </button>
                        </article>
                    `;
                    gridContainer.insertAdjacentHTML('beforeend', productCard);
                });
            };

            const showNotification = () => {
                notificationEl.classList.remove('translate-x-[120%]');
                setTimeout(() => {
                    notificationEl.classList.add('translate-x-[120%]');
                }, 2000);
            };

            const addToCart = (productId) => {
                const productToAdd = products.find(p => p.id === productId);
                if (productToAdd) {
                    cart.push(productToAdd);
                    cartCountEl.textContent = cart.length;
                    showNotification();
                }
            };

            // --- INITIAL RENDER ---
            renderFeaturedProducts(products.slice(0, 4), productGrid);
            renderCategoryProducts(products, categoryProductGrid);


            // --- EVENT LISTENERS ---
            searchInput.addEventListener('keyup', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm));
                renderCategoryProducts(filteredProducts, categoryProductGrid);
            });

            categoryFilters.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') {
                    const category = e.target.dataset.category;

                    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
                    e.target.classList.add('active');

                    const filteredProducts = category === 'all'
                        ? products
                        : products.filter(p => p.category === category);
                    renderCategoryProducts(filteredProducts, categoryProductGrid);
                }
            });

            document.body.addEventListener('click', (e) => {
                const cartBtn = e.target.closest('.add-to-cart-btn');
                if (cartBtn) {
                    const productId = parseInt(cartBtn.dataset.id, 10);
                    addToCart(productId);
                }
            });
        });