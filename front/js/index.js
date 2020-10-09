import { teddyManager } from "./services/TeddyManager.js";
import { insertTeddyInListTemplate } from "./templates/insertTeddyInListTemplate.js";

//requête http vers l'api pour récupérer les infos de tous les produits
function fetchTeddies() {
  teddyManager.getTeddies().then((products) => processEachTeddy(products));
}

//affichage de chaque produit sous forme de liste
function processEachTeddy(products) {
  products.forEach((product) => {
    insertTeddyInListTemplate(product); //fonction déclarée dans le dossier "templates", fichier "insertTeddyInListTemplate"
  });
}

fetchTeddies();
