import { Product } from "../../js/models/Product.js";

describe("Product", () => {
  describe("price", () => {
    it("gives product price divided by 100", () => {
      const product = new Product({ _id: 8, price: 500 });

      expect(product.price()).toStrictEqual(5);
    });
  });

  describe("numberOfColors", () => {
    it("gives the quantity of colors available for a given product", () => {
      const product = new Product({
        _id: 8,
        price: 500,
        colors: ["blue", "pink", "red"],
      });

      expect(product.numberOfColors()).toStrictEqual(3);
    });
  });
});
