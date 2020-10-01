const jsonOrderInfos = localStorage.getItem("infosOfConfirmedOrder");
const orderInfos = JSON.parse(jsonOrderInfos);
console.log(orderInfos);
console.log(orderInfos.orderId);
console.log(orderInfos.totalPrice);

document.querySelector("#confirmation-text").innerHTML = `
Votre commande n° <span class="font-weight-bold">${orderInfos.orderId}</span> d'un montant de 
<span class="font-weight-bold">${orderInfos.totalPrice} €</span> a bien été confirmée, merci !
`;
