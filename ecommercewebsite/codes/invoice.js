document.getElementById('add-item').addEventListener('click', function() {
    const itemsBody = document.getElementById('items-body');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td><input type="text" placeholder="Description" required></td>
        <td><input type="number" placeholder="Quantity" required min="1" value="1"></td>
        <td><input type="number" placeholder="Price" required min="0" step="0.01" value="0"></td>
        <td class="item-total">$0.00</td>
        <td><button class="remove-item">Remove</button></td>
    `;
    itemsBody.appendChild(row);

    row.querySelector('.remove-item').addEventListener('click', function() {
        itemsBody.removeChild(row);
        calculateTotal();
    });

    row.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', calculateTotal);
    });

    calculateTotal();
});

function calculateTotal() {
    const items = document.querySelectorAll('#items-body tr');
    let total = 0;

    items.forEach(item => {
        const quantity = item.querySelector('input[type="number"]:nth-of-type(1)').value;
        const price = item.querySelector('input[type="number"]:nth-of-type(2)').value;
        const itemTotal = quantity * price;
        total += itemTotal;
        item.querySelector('.item-total').textContent = `$${itemTotal.toFixed(2)}`;
    });

    document.getElementById('total-amount').textContent = `$${total.toFixed(2)}`;
}

document.getElementById('generate-invoice').addEventListener('click', function() {
    alert('Invoice generated!');
});