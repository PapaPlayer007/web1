const cart = [];

function displayProducts() {
    const productContainer = document.getElementById('productContainer');

    // Loop through products and create HTML elements for each
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.imageUrl}" alt="${product.name}">
            <p>$${product.price.toFixed(2)}</p>
            <p class="specifications">${product.specifications}</p>
            <p class="category">Category: ${product.category}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

function addToCart(productId) {
    // Find the selected product
    const selectedProduct = products.find(product => product.id === productId);

    // Add the product to the cart
    cart.push(selectedProduct);

    // Update the cart UI
    updateCartUI();
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');

    // Clear existing content
    cartItemsElement.innerHTML = '';

    // Display cart items
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(cartItem);
    });

    // Calculate and display the total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalElement.textContent = total.toFixed(2);
}
async function checkout() {
    const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

    // Create a payment intent on the server (this part should be handled securely on the server side)
    const response = await fetch('your_server_payment_endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount: cartTotal * 100, // Convert to cents
        }),
    });

    const { clientSecret } = await response.json();

    // Confirm the payment using Stripe.js
    const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: stripe.elements.create('card'),
        },
    });

    if (error) {
        alert('Payment failed: ' + error.message);
    } else {
        alert('Payment successful! Thank you for your purchase.');
        // Clear the cart and update UI
        cart.length = 0;
        updateCartUI();
    }
}

window.onload = function () {
    displayProducts();
};
function checkout() {
    // Assuming payment.html is the page where you simulate payment
    window.location.href = 'payment.html';
}
function simulatePayment() {
    // Simulate a successful payment
    alert('Payment successful! Thank you for your purchase.');

    // Redirect the user back to the main page
    window.location.href = 'index.html';
}
