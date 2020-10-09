import { apiClient } from "./ApiClient.js";
import { Product } from "../models/Product.js";

class TeddyManager {
  //méthode pour récupérer les infos de tous les produits
  getTeddies() {
    return apiClient
      .get("api/teddies/")
      .then((products) => products.map((product) => new Product(product)));
  }

  //méthode pour récupérer les infos d'un produit selon l'id donné
  getTeddy() {
    return apiClient
      .get(`api/teddies/${this.getTeddyIdFromUrl()}`)
      .then((productHash) => new Product(productHash));
  }

  //récupération de l'id du produit depuis la query string
  getTeddyIdFromUrl() {
    const queryString = window.location.search;
    const productId = queryString.substr(4); ///on supprime les 4 1ers caractères de la string ("?=id") pour n'avoir que l'id
    return productId;
  }
}

export const teddyManager = new TeddyManager();
