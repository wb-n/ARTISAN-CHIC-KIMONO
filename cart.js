let cartItems = [
    { name: 'Cool Jacket', price: 35, quantity: 1, img: 'assets/bbf.png' }
];

function updateCart() {
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total-price');
    let subtotal = 0;

    cartItems.forEach((item) => {
        subtotal += item.price * item.quantity;
    });

    subtotalElement.innerText = subtotal.toFixed(2);
    totalElement.innerText = subtotal.toFixed(2);
}

document.querySelectorAll('.remove-item').forEach((button, index) => {
    button.addEventListener('click', () => {
        cartItems.splice(index, 1);
        updateCart();
    });
});

document.querySelectorAll('input[type="number"]').forEach((input, index) => {
    input.addEventListener('change', (e) => {
        cartItems[index].quantity = parseInt(e.target.value);
        updateCart();
    });
});

updateCart();
