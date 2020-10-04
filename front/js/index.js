import { apiClient } from "./models/ApiClient.js";
import { Product } from "./models/Product.js";
import { insertTeddyInListTemplate } from "./templates/insertTeddyInListTemplate.js";

//requête http vers l'api pour récupérer les produits
function fetchTeddies() {
  apiClient
    .getTeddies()
    .then((products) => processEachTeddy(products))
    .catch((error) => console.error(error));
}

//affichage de chaque produit sous forme de liste
function processEachTeddy(products) {
  products.forEach((productHash) => {
    const product = new Product(productHash);
    insertTeddyInListTemplate(product); //fonction déclarée dans le dossier "templates", fichier "insertTeddyInListTemplate"
  });
}

fetchTeddies();
