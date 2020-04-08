function cartToggle() {
    if(document.getElementById('cart')) {
        if (document.getElementById('cart').classList.contains("cart--closed")) {
            // Show
            document.getElementById('cart').classList.remove('cart--closed');
        }else {
            // Hide
            document.getElementById('cart').classList.add('cart--closed');
        }
    }
}


for (const key in document.getElementsByClassName('cart__remove')) { // Add listeners to cart remove buttons
    if (document.getElementsByClassName('cart__remove').hasOwnProperty(key)) {
        const element = document.getElementsByClassName('cart__remove')[key];
        element.addEventListener('click', _ => {
            element.parentElement.parentElement.remove(); // Delete the cart item's row
        });
    }
}