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

function AddtoCart(productId) {
    const product=products[productId];
	product.qty+=1;
	
	if(!cart.includes(product)){
		cart.push(product);
    }
	alert(`${productId} added to cart!`);
}
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById('cart');
    if (cart.length === 0) {
        cartElement.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('checkoutBtn').style.display = 'none';
    } else {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartElement.innerHTML = `<p>You have ${totalItems} item(s) in your cart.</p>`;
        document.getElementById('checkoutBtn').style.display = 'block';
    }
}

function checkout() {
	let subtotal=0;
	let invoiceHTML+=`
	<h2>Invoice</h2>
	<table border="1">
	<tr>
		<th>Product</th>
		<th>Price</th>
		<th>Qunatity</th>
		<th>Total</th>
	</tr>`;

cart.forEach(item=>{
		const total=item.price*item.qty;
		subtotal+=total;
		invoiceHTML+=`
		
	
    window.location.href = 'invoice.html';
}

updateCartDisplay();