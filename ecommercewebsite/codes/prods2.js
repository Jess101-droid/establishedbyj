let cart = JSON.parse(localStorage.getItem('cart')) || [];

const products = [
    {id:1 name: 'Blue Beaded Bracelets', price: 500 },
    {id:2 name: 'Lava Bead Bracelets', price: 600 },
    {id:3 name: 'Turtle Necklaces', price: 1200 },
    {id:4 name: 'Silver Random Pendants', price: 1000 },
    {id:5 name: 'Green Waistbeads', price: 800 },
    {id:6 name: 'Pink Waistbeads', price: 800 },
    {id:7 name: 'Rings', price: 500 },
    {id:8 name: 'Keychains', price: 400 }
];


const cart = [];

// Function to add products to the cart
function addToCart(productId) {
    const product = products[productId];
    product.qty += 1;

    if (!cart.includes(product)) {
        cart.push(product);
    }

    alert(`${product.name} added to cart!`);
}

// Function to handle checkout
function checkout() {
    let subtotal = 0;
    let invoiceHTML = `
        <h2>Invoice</h2>
        <table border="1">
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>`;

    cart.forEach(item => {
        const total = item.price * item.qty;
        subtotal += total;
        invoiceHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.qty}</td>
                <td>${total}</td>
            </tr>`;
    });

    const tax = subtotal * 0.15;
    const total = subtotal + tax;

    invoiceHTML += `
            <tr>
                <td colspan="3">Subtotal</td>
                <td>${subtotal.toFixed(2)}</td>
            </tr>
            <tr>
                <td colspan="3">Tax (15%)</td>
                <td>${tax.toFixed(2)}</td>
            </tr>
            <tr>
                <td colspan="3">Total</td>
                <td>${total.toFixed(2)}</td>
            </tr>
        </table>`;

    document.body.innerHTML = invoiceHTML;
}

// Function to cancel the cart
function cancel() {
    cart.length = 0;
    products.forEach(product => product.qty = 0);
    alert('Cart has been canceled!');
    location.reload();
}

// Function to exit (redirect or close)
function exit() {
    window.location.href = 'Products.html'; // Change to the appropriate exit page or close window
}
