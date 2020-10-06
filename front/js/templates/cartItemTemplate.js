import { cart } from "../models/Cart.js";

//contenu de chaque ligne de produit contenu dans le panier
export function cartItemTemplate(cartItem, index) {
  document.querySelector(".cart-items-container").insertAdjacentHTML(
    "beforeend",
    `
  <div class="cart-item row justify-content-center text-center align-items-center border rounded mx-2 mb-3 px-2 py-3 position-relative">
    <div class="col-6 col-md-3">
      <div class="card border-0 m-1">
          <a href="produit.html?id=${cartItem.product.id()}">
            <img class="card-img-top" src="${cartItem.product.image()}" alt="Photo d'ours en peluche">
          </a>
        <div class="card-body p-0">
        </div>
      </div>
    </div>

    <div class="col-6 col-md-3 mt-2">
      <div class="card border-0 m-1">
        <div class="card-body p-0">
          <a class="text-dark" href="produit.html?id=${cartItem.product.id()}">
            <p class="card-text mb-0">${cartItem.product.name()}</p>
            <p class="card-text">(${cartItem.color})</p>
          </a>
        </div>
      </div>
    </div>

    <div class="col-6 col-md-2 mt-2 d-flex justify-content-center">
      <div class="cart-btn-quantity d-flex align-items-center justify-content-between w-100 p-2">
        <button class="button-quantity-${index} bg-white border-0"><i class="fas fa-minus fa-xs text-secondary"></i></button>
        <span id="quantity-${index}">${cartItem.quantity}</span>
        <button class="button-quantity-${index} up bg-white border-0"><i class="fas fa-plus fa-xs text-secondary"></i></button>
      </div>
    </div>

    <div class="col-6 col-md-2 mt-2">
      <div class="price">
        <p class="mb-2 product-price">Prix : ${cart.cartItemTotalPrice(
          cartItem
        )} €</p>
      </div>
    </div>

    <div class="col-2 d-none d-md-block mt-2">
      <div class="button mb-2">
        <button type="button" class="btn btn-secondary remove-button-${index}">Supprimer</button>
      </div>
    </div>

    <button type="button" id="close-btn-mobile" class="close d-block d-md-none remove-button-${index} position-absolute" data-dismiss="alert" aria-label="Supprimer">
      <span aria-hidden="true">×</span>
    </button>

  </div>
  `
  );
}
