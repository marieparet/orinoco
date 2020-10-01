const jsonOrderInfos = localStorage.getItem("infosOfConfirmedOrder");
const orderInfos = JSON.parse(jsonOrderInfos);

document.querySelector("#confirmation-text").innerHTML = `
<p>Bonjour ${orderInfos.userName},</p>
<p>Votre commande  a bien été confirmée, et nous vous en remercions !</p><br /><br />

<p>Vous trouverez ci-dessous le récapitulatif de votre commande :</p>
<p class="font-weight-bold"><ins>N° de commande</ins> : ${orderInfos.orderId}</p>
<p class="font-weight-bold"><ins>Prix total TTC</ins> : ${orderInfos.totalPrice} €</p>
`;
