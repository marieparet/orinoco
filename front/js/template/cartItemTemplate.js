function cartItemTemplate(cartItem, index) {
  document.querySelector(".cart-items-container").insertAdjacentHTML(
    "beforeend",
    `
  <div class="cart-item row justify-content-center text-center align-items-center border rounded mx-2 mb-3 px-2 py-3 position-relative">
    <div class="col-6 col-lg-3">
      <div class="card border-0 m-1">
        <span>
          <img class="card-img-top" src="${
            cartItem.product.imageUrl
          }" alt="Photo d'ours en peluche">
        </span>
        <div class="card-body p-0">
        </div>
      </div>
    </div>

    <div class="col-6 col-lg-3 mt-2">
      <div class="card border-0 m-1">
        <div class="card-body p-0">
          <p class="card-text mb-0">${cartItem.product.name}</p>
          <p class="card-text">(${cartItem.color})</p>
        </div>
      </div>
    </div>

    <div class="col-6 col-lg-2 mt-2">
      <label for="input-quantity-${index}" class="mb-2">Quantité</label>
      <input id="input-quantity-${index}" class="cart-item-input-quantity text-dark pl-2 ml-1 w-50" type="number" min="1" value="${
      cartItem.quantity
    }" />
    </div>

    <div class="col-6 col-lg-2 mt-2">
      <div class="price">
        <p class="mb-2 product-price">Prix : ${
          (cartItem.product.price / 100) * cartItem.quantity
        } €</p>
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
