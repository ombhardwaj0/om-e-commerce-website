let productId = localStorage.getItem("productId");

let container = document.getElementById("productDetails");

// API for single product
let API = `https://dummyjson.com/products/${productId}`;

async function getProduct() {

    let response = await fetch(API);
    let data = await response.json();

    showProduct(data);
}

getProduct();

function showProduct(product) {

    container.innerHTML = `
    
        <div class="card" style="width:300px; margin:auto; margin-top:30px;">

            <img src="${product.thumbnail}" />

            <h2>${product.title}</h2>

            <p><b>Price:</b> ₹ ${product.price}</p>

            <p><b>Brand:</b> ${product.brand}</p>

            <p><b>Category:</b> ${product.category}</p>

            <p><b>Rating:</b> ⭐ ${product.rating}</p>

            <p><b>Description:</b> ${product.description}</p>

            <p><b>Product ID:</b> ${product.id}</p>

        </div>

    `
};