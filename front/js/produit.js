const BASE_URL = "http://localhost:3000/";

//récupération de l'id du produit depuis la query string
function getProductIdFromUrl() {
  const queryString = window.location.search;
  const productId = queryString.substr(4); ///on supprime les 4 1ers caractères de la string ("?=id")
  return productId;
}

//insertion des info du teddy passé en paramètre
function processTeddyInfo(product) {
  let productImage = document.querySelector(".product-img");
  let productName = document.querySelector(".card-title");
  let productPrice = document.querySelector(".card-price");
  let productDescription = document.querySelector(".card-description");

  productImage.setAttribute("src", product.imageUrl);
  productName.innerHTML = product.name;
  productPrice.innerHTML = `Prix : ${product.price / 100} €`;
  productDescription.innerHTML = product.description;
}

//création des options couleurs pour le formulaire de personnalisation
function setColorsOptions(product) {
  let select = document.getElementById("FormControlSelect");

  product.colors.forEach((color) => {
    let option = document.createElement("option");
    option.value = color;
    option.innerText = color;
    select.appendChild(option);
  });
}

//requête http vers l'élément correspondant à l'id donné
fetch(BASE_URL + `api/teddies/${getProductIdFromUrl()}`)
  .then((response) => response.json())
  .then((product) => {
    processTeddyInfo(product);
    setColorsOptions(product);
  })
  .catch((error) => console.error(error));

//redirection vers la page panier au clic sur le bouton "Ajouter au panier"
let button = document.querySelector("#add-to-cart");

//au clic sur le bouton "Ajouter au panier", message d'alerte "Produit ajouté au panier"
button.addEventListener("click", function () {
  document.querySelector(".card-body").insertAdjacentHTML(
    "beforeend",
    `
    <div id="added-to-cart" class="alert mt-3 mb-0 alert-success alert-dismissible fade show" role="alert">
      <p class="alert-heading">Produit ajouté au panier</p>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    `
  );
});
