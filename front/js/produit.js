const BASE_URL = "http://localhost:3000/";

function getIdFromUrl() {
  let idNumber = window.location.search; //on récupère le param d'url que l'on va passer dans la page produit
  return idNumber.substr(4); ///on supprime les 4 1ers caractères de la string ("?=id")
}

//requête http vers l'élément correspondant à l'id donné
fetch(BASE_URL + `api/teddies/${getIdFromUrl()}`)
  .then((response) => response.json())
  .then((product) => {
    console.log(product);
    document
      .querySelector(".product-img")
      .setAttribute("src", product.imageUrl);
    document.querySelector(".card-title").innerHTML = product.name;
    document.querySelector(".card-price").innerHTML = `Prix : ${
      product.price / 100
    } €`;
    document.querySelector(".card-description").innerHTML = product.description;

    //création des options couleurs pour le formulaire de personnalisation
    let select = document.getElementById("FormControlSelect");

    product.colors.forEach((color) => {
      let option = document.createElement("option");
      option.value = color;
      option.innerText = color;
      select.appendChild(option);
    });
  })
  .catch((error) => console.error(error));

//redirection vers la page panier au clic sur le bouton "Ajouter au panier"
let button = document.querySelector("#add-to-cart");

button.addEventListener("click", function () {
  window.location.href = "panier.html";
});
