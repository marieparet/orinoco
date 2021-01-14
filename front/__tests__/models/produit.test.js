/*import { Product } from "../../js/models/Product.js";
import {
  processTeddyInfos,
  setColorsOptions,
  activateAddToCartButtonListener,
  quantityInputValue,
  colorSelectValue,
} from "../../js/produit.js";*/

/*describe("processTeddyInfos", () => {
  it("displays all corresponding infos of a given product", () => {
    const product = new Product({
      image: "photo.png",
      name: "teddy",
      price: 500,
      description: "coucou",
    });

    expect(processTeddyInfos(product)).toBe({"photo.png", "teddy", 500, "coucou"});
  });
});*/

/*describe("setColorsOptions", () => {
  it("displays all available colors of a given product", () => {
    const product = new Product({
      name: "teddy",
      colors: ["blue", "pink", "red"],
    });

    expect(setColorsOptions(product)).toBe();
  });
});*/
import { cart } from "../../js/models/Cart.js";

describe("Cart", () => {
  describe("isCartEmpty", () => {
    it("returns true when cart is empty", () => {
      cart.cartContent = [];

      expect(cart.isCartEmpty()).toBe(true);
    });
  });
});
