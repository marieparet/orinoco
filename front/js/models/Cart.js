class Cart {
  constructor() {
    this.retrieveCartContent();
  }

  //ajout d'un produit au contenu du panier (cartContent)
  addToCart(product, quantity, color) {
    const productAlreadyAdded = this.cartContent.find(
      (cartItem) =>
        cartItem.product._id === product._id && cartItem.color === color
    );

    //si ce produit de cette couleur est déjà dans le panier, on incrémente seulement la quantité
    if (productAlreadyAdded) {
      productAlreadyAdded.quantity += quantity;
    } else {
      //si le produit n'est pas déjà dans le panier, on l'ajoute
      this.cartContent.push({
        product: product,
        quantity: quantity,
        color: color,
      });
    }
    this.saveCart();
  }

  //mise à jour de l'input quantité selon l'index donné du produit
  updateCartItemQuantity(index, value) {
    this.cartContent[index].quantity = value;
    this.saveCart();
  }

  //suppression d'un produit du panier selon l'index donné
  removeFromCart(index) {
    this.cartContent.splice(index, 1);
    this.saveCart();
  }

  //remise à zéro du panier (cartContent rendu vide)
  clearCart() {
    this.cartContent = [];
    this.saveCart();
  }

  //calcul du prix total du panier
  totalPrice() {
    return this.cartContent.reduce(
      (previousValue, cartItem) =>
        previousValue + (cartItem.product.price * cartItem.quantity) / 100,
      0
    );
  }

  //interprétation d'un panier vide (cartContent vide)
  isCartEmpty() {
    return this.cartContent.length === 0;
  }

  //récupération de l'id des produits contenus dans le panier, dans un tableau
  productIds() {
    let products = [];
    for (let cartItem of this.cartContent) {
      products.push(cartItem.product._id);
    }
    return products;
  }

  //récupération du contenu du panier dans un tableau, depuis le localStorage
  retrieveCartContent() {
    const jsonCart = localStorage.getItem("cart");
    this.cartContent = JSON.parse(jsonCart) || [];
  }

  //sauvegarde du contenu du panier dans le localStorage
  saveCart() {
    localStorage.setItem("cart", JSON.stringify(this.cartContent));
  }
}

//initialisation d'un nouvel objet panier
const cart = new Cart();
