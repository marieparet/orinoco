const BASE_URL = "http://localhost:3000/";

fetch(BASE_URL + "api/teddies/")
  .then((response) => response.json()) //on formate les données en .json
  .then((products) => {
    //on récupère les données
    products.forEach((product) => {
      console.log(product);
      document.querySelector("#products").innerHTML += `
      <div class="col-12 col-lg-4">
        <div class="card">
          <span>
          <a href="produit.html?id=${product._id}" class="text-dark">
          <img class="card-img-top" src="${
            product.imageUrl
          }" alt="Photo d'ours en peluche">
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
    });
  })
  .catch((error) => console.error(error));
