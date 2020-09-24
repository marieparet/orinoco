const BASE_URL = "http://localhost:3000/";

function fetchTeddies() {
  fetch(BASE_URL + "api/teddies/")
    .then((response) => response.json())
    .then((products) => processEachTeddy(products))
    .catch((error) => console.error(error));
}

function insertTeddyInList(product) {
  let productDiv = document.querySelector("#products");
  productDiv.innerHTML += `
  <div class="col-12 col-lg-4">
    <div class="card shadow-sm">
      <span id="image-wrapper">
      <a href="produit.html?id=${product._id}" class="text-dark">
      <img class="card-img-top" src="${product.imageUrl}"
      alt="Photo d'ours en peluche">
      </span>
      
      <div class="card-body">
        <h2 class="card-title">${product.name}</h2>
        <p class="card-text">${product.price / 100} €</p>
        <p class="card-text">(${product.colors.length} coloris)</p>
      </div>
    </div>
    </a>
  </div>
  `;
}

function processEachTeddy(products) {
  products.forEach((product) => insertTeddyInList(product));
}

fetchTeddies();
