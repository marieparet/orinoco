console.log(cart.totalPrice());

function renderCartContent() {
  let cartItemContainer = document.querySelector(".cart-items-container");
  cartItemContainer.innerHTML = "";

  cart.cartContent.forEach((cartItem, index) => {
    console.log(cartItem);
    cartItemContainer.insertAdjacentHTML(
      "beforeend",
      `
    <div class="cart-item row justify-content-center text-center align-items-center border rounded mx-2 mb-3 px-2 py-3">
      <div class="col-4 col-lg-3">
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

      <div class="col-4 col-lg-3">
        <div class="card border-0 m-1">
          <div class="card-body p-0">
            <p class="card-text mb-0">${cartItem.product.name}</p>
            <p class="card-text">(${cartItem.color})</p>
          </div>
        </div>
      </div>

      <div class="col-4 col-lg-2">
        <label for="input-quantity-${index}" class="mb-2">Quantité</label>
        <input id="input-quantity-${index}" class="cart-item-input-quantity text-dark pl-2 ml-1 w-50" type="number" min="1" value="${
        cartItem.quantity
      }" />
      </div>

      <div class="col-4 col-lg-2">
        <div class="price">
          <p class="mb-2 product-price">Prix : ${
            (cartItem.product.price / 100) * cartItem.quantity
          } €</p>
        </div>
      </div>

      <div class="col-4 col-lg-2">
        <div class="button mb-2">
          <button id="remove-button-${index}" type="button" class="btn btn-secondary">Supprimer</button>
        </div>
      </div>
    </div>
    `
    );

    document
      .querySelector(`#remove-button-${index}`)
      .addEventListener("click", function () {
        cart.removeFromCart(index);
        renderCartContent();
      });

    document
      .querySelector(`#input-quantity-${index}`)
      .addEventListener("change", function (event) {
        cart.updateCartItemQuantity(index, parseInt(event.target.value));
        renderCartContent();
      });
  });
}

renderCartContent();

//bouton supprimer

//modifier quantité d'un item dans le panier
