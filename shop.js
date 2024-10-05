document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;

    const buttons = document.querySelectorAll('.add-to-cart');
    const cartCountDisplay = document.getElementById('cart-count');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            cartCountDisplay.textContent = cartCount;
            alert(`${this.dataset.product} has been added to the cart!`);
        });
    });
});
