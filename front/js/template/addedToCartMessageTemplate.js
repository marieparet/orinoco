//message d'alerte "Produit ajouté au panier"
function addedToCartMessageTemplate() {
  document.querySelector(".card-body").insertAdjacentHTML(
    "beforeend",
    `
    <div id="added-to-cart" class="alert mt-3 mb-0 alert-success alert-dismissible fade show" role="alert">
      <p class="alert-heading text-dark">Produit ajouté au panier !</p>
      <a class="m-0 text-dark font-weight-bold" href="panier.html"><i class="fas fa-arrow-right"></i> Voir mon panier</a>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
    `
  );
}
