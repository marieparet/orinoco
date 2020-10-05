//contenu de chaque produit affiché dans la vue sous forme de liste
export function insertTeddyInListTemplate(product) {
  let productDiv = document.querySelector("#products");
  productDiv.innerHTML += `
  <div class="col-12 col-md-4">
    <div class="card shadow-sm">
      <span class="image-wrapper">
      <a href="produit.html?id=${product.id()}" class="text-dark">
      <img class="card-img-top" src="${product.image()}"
      alt="Photo d'ours en peluche">
      </span>
      
      <div class="card-body">
        <h2 class="card-title">${product.name()}</h2>
        <p class="card-text">${product.price()} €</p>
        <p class="card-text">(${product.numberOfColors()} coloris)</p>
      </div>
    </div>
    </a>
  </div>
  `;
}
