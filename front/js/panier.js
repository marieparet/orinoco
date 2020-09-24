//si panier vide : "Votre panier est vide"

//sinon indiquer :
// - photo du produit, quantité, prix unitaire, prix total
// - possibilité d'incrémenter la quantité de chaque produit, et updater le prix total en fonction
// - possibilité de supprimer un produit, et updater le prix total en fonction

//formulaire à remplir pour pouvoir valider la commande

//une fois formulaire validé, renvoyer vers la page confirmation.html

//définition d'une classe Panier

class Cart {
  constructor() {
    const jsonCart = localStorage.getItem("cart");
    this.cartContent = JSON.parse(jsonCart) || [];
  }

  addToCart(product, quantity, color) {
    this.cartContent.push({
      product: product,
      quantity: quantity,
      color: color,
    });
    localStorage.setItem("cart"), JSON.stringify(this.cartContent));
  }

  removeFromCart(product) {}
}
const cart4 = new Cart();

cart.addToCart({ title: "Ours 1" }, 2, "blue");

const CART = [{ id: "XXXX", quantity: 3, color: "couleur" }];

if (CART.length === 0) {
  document.querySelector("#empty-cart").classList.remove("d-none");
}
