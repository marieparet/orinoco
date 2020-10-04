import { Product } from "./models/Product.js";
import { apiClient } from "./models/ApiClient.js";
import { cart } from "./models/Cart.js";
import { addedToCartMessageTemplate } from "./templates/addedToCartMessageTemplate.js";

//insertion des infos du teddy passé en paramètre
function processTeddyInfos(product) {
  let productImage = document.querySelector(".product-img");
  let productName = document.querySelector(".card-title");
  let productPrice = document.querySelector(".card-price");
  let productDescription = document.querySelector(".card-description");

  productImage.setAttribute("src", product.image());
  productName.innerHTML = product.name();
  productPrice.innerHTML = `Prix : ${product.price()} €`;
  productDescription.innerHTML = product.description();
}

//création des options couleurs pour le formulaire de personnalisation
function setColorsOptions(product) {
  let select = document.getElementById("select-color");

  product.colors().forEach((color) => {
    let option = document.createElement("option");
    option.value = color;
    option.innerText = color;
    select.appendChild(option);
  });
}

//requête http vers l'élément correspondant à l'id donné
apiClient
  .getTeddy()
  .then((productHash) => {
    const product = new Product(productHash);
    processTeddyInfos(product);
    setColorsOptions(product);
    activateAddToCartButtonListener(product);
  })
  .catch((error) => console.error(error));

//au clic sur le bouton "Ajouter au panier", message d'alerte "Produit ajouté au panier"
function activateAddToCartButtonListener(product) {
  let button = document.querySelector("#add-to-cart");

  button.addEventListener("click", function () {
    addedToCartMessageTemplate(); //fonction déclarée dans le dossier "templates", fichier "addedToCartMessageTemplate"
    cart.addToCart(product, quantityInputValue(), colorSelectValue());
  });
}

//récupération de l'input quantité de l'utilisateur
function quantityInputValue() {
  return parseInt(document.querySelector("#input-quantity").value);
}

//récupération de l'input couleur de l'utilisateur
function colorSelectValue() {
  return document.querySelector("#select-color").value;
}
