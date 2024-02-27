function simulatePayment() {
    const cardType = document.getElementById('cardType').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Perform validation as needed

    // Simulate a successful payment
    alert(`Payment successful!\nCard Type: ${cardType}\nCard Number: ${cardNumber}\nExpiration Date: ${expirationDate}\nCVV: ${cvv}\nPayment Method: ${paymentMethod}`);

    // Redirect the user back to the main page
    window.location.href = 'index.html';
}