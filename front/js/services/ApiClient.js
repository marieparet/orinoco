class ApiClient {
  constructor() {
    this.baseUrl = "http://localhost:3000/";
  }

  get(path) {
    return fetch(this.baseUrl + path)
      .then((response) => response.json())
      .catch(() => alert("Impossible de récupérer les données de l'API"));
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
