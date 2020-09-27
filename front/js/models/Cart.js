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

  updateCartItemQuantity(index, value) {
    this.cartContent[index].quantity = value;
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
