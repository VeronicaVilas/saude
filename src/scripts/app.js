const cartPreviewButton = document.querySelector('.fa-shopping-cart');
const cartViewItems = document.querySelector('.cart-items-container');
const cartItemCount = document.querySelector('.quantity-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalElement = document.querySelector('.cart-total');
const cartButtons = document.querySelectorAll('.cart-btn');
const cartItems = [];

cartPreviewButton.addEventListener('click', function() {
    cartViewItems.style.display = cartViewItems.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('DOMContentLoaded', function () {
    cartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const box = this.closest('.box');
            const itemName = box.querySelector('.content h3').textContent;
            const itemPrice = parseFloat(box.querySelector('.price').textContent.replace('R$', '').trim());
            const itemImageSrc = box.querySelector('.image img').src;

            addItemToCart(itemName, itemPrice, itemImageSrc);
        });
    });

    function addItemToCart(name, price, imageSrc) {
        const existingItem = cartItems.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity++;
            existingItem.total += price;
        } else {
            const newItem = {
                name: name,
                price: price,
                imageSrc: imageSrc,
                quantity: 1,
                total: price
            };
            cartItems.push(newItem);
        }

        updateCart();
    }

    function updateCart() {
        renderCartItems();
        updateCartTotal();
        updateCartItemCount();
    }

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';

        cartItems.forEach(function (item, index) {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <span class="fas fa-times" data-index="${index}"></span>
                <img src="${item.imageSrc}" alt="">
                <div class="content">
                    <h3>${item.name}</h3>
                    <div class="price">R$${item.price.toFixed(2)}</div>
                    <div class="quantity">
                        <button class="quantity-btn decrease-btn" data-index="${index}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase-btn" data-index="${index}">+</button>
                    </div>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);
        });

        const removeItemCart = document.querySelectorAll('.fa-times');
        removeItemCart.forEach(function (icon) {
            icon.addEventListener('click', function () {
                const index = parseInt(icon.getAttribute('data-index'));
                removeItem(index);
            });
        });

        const decreaseButtons = document.querySelectorAll('.decrease-btn');
        decreaseButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                const index = parseInt(button.getAttribute('data-index'));
                decreaseQuantity(index);
            });
        });

        const increaseButtons = document.querySelectorAll('.increase-btn');
        increaseButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                const index = parseInt(button.getAttribute('data-index'));
                increaseQuantity(index);
            });
        });
    }

    function removeItem(index) {
        const removedItem = cartItems.splice(index, 1)[0];
        updateCart();
    }

    function decreaseQuantity(index) {
        if (cartItems[index].quantity > 1) {
            cartItems[index].quantity--;
            updateCart();
        }
    }

    function increaseQuantity(index) {
        cartItems[index].quantity++;
        updateCart();
    }

    function updateCartTotal() {
        let total = 0;
        cartItems.forEach(function (item) {
            total += item.price * item.quantity;
        });
        cartTotalElement.textContent = `Total: R$${total.toFixed(2)}`;
    }

    function updateCartItemCount() {
        let count = 0;
        cartItems.forEach(item => {
            count += item.quantity;
        });
        cartItemCount.textContent = count;
    }
});


function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        let categoria = '';

        if (imc < 18.5) {
            categoria = 'Baixo peso';
        } else if (imc < 24.9) {
            categoria = 'Peso normal';
        } else if (imc < 29.9) {
            categoria = 'Sobrepeso';
        } else {
            categoria = 'Obesidade';
        }

        document.getElementById('imc-valor').textContent = `Seu IMC é: ${imc.toFixed(2)}`;
        document.getElementById('categoria').textContent = `Categoria: ${categoria}`;

        document.getElementById('imc-form').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('calcular-novamente').style.display = 'block';
    } else {
        alert('Por favor, insira valores válidos.');
    }
}

function mostrarFormulario() {
    document.getElementById('imc-form').style.display = 'block';
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('calcular-novamente').style.display = 'none';
}

function toggleExplanation(event) {
    event.preventDefault();
    const explanation = document.getElementById('explanation');
    explanation.classList.toggle('hidden');
}

function openModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}