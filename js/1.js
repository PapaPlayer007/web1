// Function to add a product to the cart
function addToCart(productName, price) {
    // Create a new list item element
    var listItem = document.createElement("li");
    
    // Set the text content of the list item to the product name and price
    listItem.textContent = productName + " - $" + price.toFixed(2);
    
    // Append the list item to the cart items list
    document.getElementById("cartItems").appendChild(listItem);
    
    // Update the total price
    updateTotal(price);
}

// Function to update the total price
function updateTotal(price) {
    // Get the current total price
    var currentTotal = parseFloat(document.getElementById("cartTotal").textContent);
    
    // Add the price of the newly added product to the total
    var newTotal = currentTotal + price;
    
    // Update the total price display
    document.getElementById("cartTotal").textContent = newTotal.toFixed(2);
}

// Function to handle the checkout process
function checkout() {
    // Redirect the user to the auth.html page
    window.location.href = "html/payment.html";
}
