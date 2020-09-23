const BASE_URL = "http://localhost:3000/";

function getIdFromUrl() {
  let idNumber = window.location.search; //on récupère le param d'url que l'on va passer dans la page produit
  return idNumber.substr(4); ///on supprime les 4 1ers caractères de la string ("?=id")
}

fetch(BASE_URL + `api/teddies/${getIdFromUrl()}`)
  .then((response) => response.json())
  .then((product) => {
    console.log(product);
    document
      .querySelector(".product-img")
      .setAttribute("src", product.imageUrl);
    document.querySelector(".card-title").innerHTML = product.name;
  })
  .catch((error) => console.error(error));
