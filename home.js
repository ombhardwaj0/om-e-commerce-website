let productBox = document.getElementById("products");

// API URL
let API = " https://dummyjson.com/products?limit=500";


// products fetch function
async function getProducts() {

    let response = await fetch(API);
    let data = await response.json();

    showProducts(data.products);
}

getProducts();

// products ko screen par show karna
function showProducts(products) {
  //productcontainer.innerHTML="";


   products.forEach(function(product){



       let card = document.createElement("div");
      card.classList.add("card");

        card.innerHTML = `
           <img src="${product.thumbnail}" />
            <h3>${product.title}</h3>
        <p>₹ ${product.price}</p>

        <button class="add-to-card-btn" data-name="${product.title}" data-price="${product.price}">Add to Cart</button>`;
       
        card.addEventListener("click", function () {
            localStorage.setItem("productId", product.id);
            window.location.href = "product.html";
        });
        let addbutton=card.querySelector(".add-to-card-btn");
        addbutton.addEventListener("click",function(event){
            event.stopPropagation();
            alert(`${product.title}has been added to your card!
                Thanks for order.......`);

        });
        productBox.appendChild(card);
    })
}