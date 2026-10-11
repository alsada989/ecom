document.addEventListener("DOMContentLoaded", () => {
            renderCart();
        });

        function renderCart() {
            let cart = JSON.parse(localStorage.getItem('myCart')) || [];
            const container = document.getElementById('cart-items-container');
            const cartActions = document.getElementById('cart-actions');
            const emptyMsg = document.getElementById('empty-cart-msg');
            const totalPriceEl = document.getElementById('total-price');

            container.innerHTML = '';

            if (cart.length === 0) {
                emptyMsg.style.display = 'block';
                cartActions.classList.add('d-none');
                return;
            }

            emptyMsg.style.display = 'none';
            cartActions.classList.remove('d-none');

            let total = 0;
            cart.forEach((item, index) => {
                total += parseFloat(item.price || 0);
                
                container.innerHTML += `
                    <div class="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2 p-3 bg-white rounded">
                        <div>
                            <h5 class="mb-1 text-dark">${item.name}</h5>
                            <span class="text-muted">السعر: $${item.price}</span>
                        </div>
                        <button class="btn btn-sm btn-outline-danger" onclick="removeItem(${index})">حذف</button>
                    </div>
                `;
            });

            totalPriceEl.innerText = total;
        }

        function removeItem(index) {
            let cart = JSON.parse(localStorage.getItem('myCart')) || [];
            cart.splice(index, 1);
            localStorage.setItem('myCart', JSON.stringify(cart));
            renderCart();
        }

        document.getElementById('clear-cart').addEventListener('click', () => {
            localStorage.removeItem('myCart');
            renderCart();
        });