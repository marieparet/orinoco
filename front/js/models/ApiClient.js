class ApiClient {
  constructor() {
    this.baseUrl = "http://localhost:3000/";
  }

  get(path) {
    return fetch(this.baseUrl + path).then((response) => response.json());
  }

  //méthode pour récupérer les infos de tous les produits
  getTeddies() {
    return this.get("api/teddies/");
  }

  //méthode pour récupérer les infos d'un produit selon l'id donnée
  getTeddy() {
    return this.get(`api/teddies/${this.getTeddyIdFromUrl()}`);
  }

  //récupération de l'id du produit depuis la query string
  getTeddyIdFromUrl() {
    const queryString = window.location.search;
    const productId = queryString.substr(4); ///on supprime les 4 1ers caractères de la string ("?=id") pour n'avoir que l'id
    return productId;
  }

  //méthode pour l'envoi des données formulaire et la création d'une nouvelle commande
  post(path, body) {
    return fetch(this.baseUrl + path, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  createOrder(orderData) {
    return this.post("api/teddies/order", orderData).catch(() =>
      alert("Impossible de créer la commande")
    );
  }
}

export const apiClient = new ApiClient();
