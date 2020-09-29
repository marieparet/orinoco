function totalPriceTemplate() {
  document.querySelector(".cart-total-price").innerHTML = `
  <div class="row text-center">
    <div class="col-12">
      <div class="card border-0">
        <div class="card-body">
          <p class="card-text font-weight-bold">Prix total = ${cart.totalPrice()} €</p>
        </div>
      </div>
    </div>
  </div>
  `;
}
