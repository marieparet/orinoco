let cartItemContainer = document.querySelector(".cart-items-container");

//contenu du panier
function renderCartContent() {
  cartItemContainer.innerHTML = "";

  cart.cartContent.forEach((cartItem, index) => {
    cartItemTemplate(cartItem, index); //fonction déclarée dans le dossier "template", fichier "cartItemTemplate"

    removeButton(index);

    quantityInputChanged(index);
  });

  displayTotalPrice();

  if (cart.isCartEmpty()) {
    document.querySelector("#empty-cart").classList.remove("d-none");
    document.querySelector(".form-container").classList.add("d-none");
  }
}

renderCartContent();

//bouton supprimer
function removeButton(index) {
  let removeButtonIndex = document.querySelectorAll(`.remove-button-${index}`);

  removeButtonIndex.forEach((removeButton) => {
    removeButton.addEventListener("click", function () {
      cart.removeFromCart(index);
      renderCartContent();
    });
  });
}

//modifier quantité d'un item dans le panier
function quantityInputChanged(index) {
  let inputQuantityIndex = document.querySelector(`#input-quantity-${index}`);

  inputQuantityIndex.addEventListener("change", function (event) {
    cart.updateCartItemQuantity(index, parseInt(event.target.value));
    renderCartContent();
  });
}

//afficher le prix total du panier s'il n'est pas vide
function displayTotalPrice() {
  let totalPriceBloc = document.querySelector(".cart-total-price");

  if (cart.isCartEmpty()) {
    return (totalPriceBloc.innerHTML = "");
  } else {
    totalPriceTemplate(); //fonction déclarée dans le dossier "template", fichier "totalPriceTemplate"
  }
}

//Formulaire de validation de commande
let orderForm = document.querySelector("#orderForm");

//écouter la modification de l'email
orderForm.email.addEventListener("change", function () {
  validEmail(this);
});

function validEmail(inputEmail) {
  //création de la reg exp pour validation email
  let emailRegexp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

  //on teste la reg exp
  let smallDiv = inputEmail.nextElementSibling;
  if (emailRegexp.test(inputEmail.value)) {
    smallDiv.innerHTML = "Adresse valide";
    smallDiv.classList.remove("text-danger");
    smallDiv.classList.add("text-success");
    return true;
  } else {
    smallDiv.innerHTML = "Adresse non valide";
    smallDiv.classList.remove("text-success");
    smallDiv.classList.add("text-danger");
    return false;
  }
}

//écouter la soumission du formulaire
orderForm.addEventListener("submit", function (event) {
  event.preventDefault();

  function validField() {
    const fieldsToCheck = ["lastName", "firstName", "email", "address", "city"];
    let areAllFieldsValid = true;
    for (let field of fieldsToCheck) {
      let fieldElement = document.querySelector(`#${field}`);
      let fieldErrorElement = document.querySelector(`.${field}-error`);

      if (!fieldElement.value) {
        fieldErrorElement.innerHTML = "Veuillez renseigner ce champ";
        fieldErrorElement.classList.add("text-danger");
        areAllFieldsValid = false;
      } else {
        fieldErrorElement.innerHTML = "";
        fieldErrorElement.classList.remove("text-danger");
      }
    }
    return areAllFieldsValid;
  }

  if (validField() && validEmail(orderForm.email)) {
    orderFormSent();
  } else {
    console.log("erreur");
  }
});

//fetch envoi formulaire
function orderFormSent() {
  let requestContent = {
    contact: {
      lastName: document.querySelector("#lastName").value,
      firstName: document.querySelector("#firstName").value,
      email: document.querySelector("#email").value,
      address: document.querySelector("#address").value,
      city: document.querySelector("#city").value,
    },
    products: cart.productIds(),
  };

  const options = {
    method: "POST",
    body: JSON.stringify(requestContent),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("http://localhost:3000/api/teddies/order", options)
    .then((response) => response.json())

    .then(function (response) {
      let orderInfos = {
        userName: requestContent.contact.firstName,
        totalPrice: cart.totalPrice(),
        orderId: response.orderId,
      };
      localStorage.setItem("infosOfConfirmedOrder", JSON.stringify(orderInfos));
      cart.clearCart();
      window.location.replace("./confirmation.html");
    });
}
