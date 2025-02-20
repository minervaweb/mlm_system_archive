// using ajax to fetch products

/*

document.addEventListener('DOMContentLoaded', function() {
    const addProductForm = document.getElementById('addProductForm');
    const addFeedback = document.getElementById('add-feedback');
    const productTable = document.getElementById('productTable');
    const searchProducts = document.getElementById('searchProducts');

    addProductForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // AJAX call to add product (see PHP section below)
        addFeedback.innerHTML = '<div class="alert alert-info">Adding product...</div>';
        fetch('/add_product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: document.getElementById('title').value,
                price: document.getElementById('price').value,
                quantity: document.getElementById('quantity').value,
                description: document.getElementById('description').value,
                points: document.getElementById('points').value
            })
        }).then(response => response.json())
        .then(data => {
            if (data.success) {
                addFeedback.innerHTML = '<div class="alert alert-success">Product added successfully!</div>';
                addProductForm.reset();
                loadProducts();
            } else {
                addFeedback.innerHTML = `<div class="alert alert-danger">${data.message}</div>`;
            }
        })
        .catch(error => {
            addFeedback.innerHTML = '<div class="alert alert-danger">Error adding product.</div>';
            console.error('Error:', error);
        });
    });

    function loadProducts() {
        // AJAX call to fetch products (see PHP section below)
        fetch('/list_products')
        .then(response => response.json())
        .then(data => {
            let tbody = productTable.querySelector('tbody');
            tbody.innerHTML = ''; // Clear existing data
            data.forEach(product => {
                let row = tbody.insertRow();
                row.insertCell().textContent = product.id;
                row.insertCell().textContent = product.title;
                row.insertCell().textContent = product.price;
                row.insertCell().textContent = product.quantity;
                row.insertCell().textContent = product.points;
                row.insertCell().innerHTML = `<button class="btn btn-sm btn-warning">Edit</button> <button class="btn btn-sm btn-danger">Delete</button>`;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    loadProducts();

    searchProducts.addEventListener('input', function() {
        let searchTerm = this.value.toLowerCase();
        productTable.querySelectorAll('tbody tr').forEach(row => {
            let title = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});

*/


