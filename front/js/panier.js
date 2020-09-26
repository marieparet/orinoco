class Cart {
  constructor() {
    this.retrieveCartContent();
  }

  addToCart(product, quantity, color) {
    this.cartContent.push({
      product: product,
      quantity: quantity,
      color: color,
    });
    this.saveCart();
  }

  removeFromCart(index) {
    this.cartContent.splice(index, 1);
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cartContent));
  }

  clearCart() {
    this.cartContent = [];
    this.saveCart();
  }

  retrieveCartContent() {
    const jsonCart = localStorage.getItem("cart");
    this.cartContent = JSON.parse(jsonCart) || [];
  }

  totalPrice() {
    return this.cartContent.reduce(
      (previousValue, cartItem) => previousValue + cartItem.product.price / 100,
      0
    );
  }
}

const cart = new Cart();

console.log(cart.totalPrice());

cart.cartContent.forEach((cartItem) => {
  let cartItemContainer = document.querySelector(".cart-items-container");
  console.log(cartItem);
  cartItemContainer.innerHTML += `
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
      <label for="FormControlQuantity" class="mb-2">Quantité</label>
      <input id="FormControlQuantity" type="number" min="1" value="${
        cartItem.quantity
      }" class="input-quantity text-dark pl-2 ml-1 w-50" />
    </div>

    <div class="col-4 col-lg-2">
      <div class="price">
        <p class="mb-2 product-price">Prix : ${
          cartItem.product.price / 100
        } €</p>
      </div>
    </div>

    <div class="col-4 col-lg-2">
      <div class="button mb-2">
        <button type="button" class="btn btn-secondary remove-btn">Supprimer</button>
      </div>
    </div>
  </div>
  `;
});
