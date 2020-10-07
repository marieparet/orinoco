import { cart } from "../../js/models/Cart.js";
import { Product } from "../../js/models/Product.js";

describe("Cart", () => {
  describe("isCartEmpty", () => {
    it("returns true when cart is empty", () => {
      cart.cartContent = [];

      expect(cart.isCartEmpty()).toBe(true);
    });

    it("returns false when cart is not empty", () => {
      cart.cartContent = [
        { product: { name: "Teddy" }, quantity: 1, color: "blue" },
      ];

      expect(cart.isCartEmpty()).toBe(false);
    });
  });

  describe("productIds", () => {
    it("returns product ids list", () => {
      cart.cartContent = [
        { product: new Product({ _id: 8 }) },
        { product: new Product({ _id: 1 }) },
        { product: new Product({ _id: 3 }) },
        { product: new Product({ _id: 5 }) },
      ];

      expect(cart.productIds()).toStrictEqual([8, 1, 3, 5]);
    });
  });

  describe("addToCart", () => {
    it("adds given product to cart content", () => {
      cart.cartContent = [];

      cart.addToCart(new Product({ _id: 8 }), 2, "blue");

      expect(cart.cartContent).toStrictEqual([
        {
          product: new Product({ _id: 8 }),
          quantity: 2,
          color: "blue",
        },
      ]);
    });

    it("increases quantity of given product if already in cart content", () => {
      cart.cartContent = [];

      cart.addToCart(new Product({ _id: 8 }), 2, "blue");
      cart.addToCart(new Product({ _id: 8 }), 1, "blue");
      cart.addToCart(new Product({ _id: 8 }), 1, "orange");

      expect(cart.cartContent.length).toBe(2);

      expect(cart.cartContent[0].quantity).toBe(3);
      expect(cart.cartContent[0].color).toBe("blue");

      expect(cart.cartContent[1].quantity).toBe(1);
      expect(cart.cartContent[1].color).toBe("orange");
    });
  });

  describe("updateCartItemQuantity", () => {
    it("updates the quantity of a specific cart item", () => {
      cart.cartContent = [];
      cart.addToCart(new Product({ _id: 8 }), 2, "blue");
      cart.updateCartItemQuantity(0, 4);

      expect(cart.cartContent[0].quantity).toBe(4);
    });

    it("does not accept values below 1", () => {
      cart.cartContent = [];
      cart.addToCart(new Product({ _id: 8 }), 1, "blue");
      cart.updateCartItemQuantity(0, 0);

      expect(cart.cartContent[0].quantity).toBe(1);
    });
  });

  describe("removeFromCart", () => {
    it("removes a specific cart item from cart content", () => {
      cart.cartContent = [
        { product: new Product({ _id: 8 }) },
        { product: new Product({ _id: 1 }) },
      ];

      cart.removeFromCart(1);

      expect(cart.cartContent).toStrictEqual([
        { product: new Product({ _id: 8 }) },
      ]);
    });
  });

  describe("cartItemTotalPrice", () => {
    it("gives the total price of one cart item", () => {
      const teddy1 = {
        product: new Product({ _id: 8, price: 500 }),
        quantity: 3,
      };
      cart.cartContent = [teddy1];

      expect(cart.cartItemTotalPrice(teddy1)).toStrictEqual(15);
    });
  });

  describe("totalPrice", () => {
    it("gives the total price of the whole cart", () => {
      const teddy1 = {
        product: new Product({ _id: 8, price: 500 }),
        quantity: 1,
      };
      const teddy2 = {
        product: new Product({ _id: 3, price: 200 }),
        quantity: 2,
      };

      cart.cartContent = [teddy1, teddy2];

      expect(cart.totalPrice()).toStrictEqual(9);
    });
  });
});
