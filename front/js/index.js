import { insertTeddyInListTemplate } from "./templates/insertTeddyInListTemplate.js";

const BASE_URL = "http://localhost:3000/";

//requête http vers l'api pour récupérer les produits
function fetchTeddies() {
  fetch(BASE_URL + "api/teddies/")
    .then((response) => response.json())
    .then((products) => processEachTeddy(products))
    .catch((error) => console.error(error));
}

//affichage de chaque produit sous forme de liste
function processEachTeddy(products) {
  products.forEach((product) => {
    insertTeddyInListTemplate(product); //fonction déclarée dans le dossier "templates", fichier "insertTeddyInListTemplate"
  });
}

fetchTeddies();
