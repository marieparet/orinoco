const jsonOrderInfos = localStorage.getItem("infoOfConfirmedOrder");
const orderInfos = JSON.parse(jsonOrderInfos);

document.querySelector("#confirmation-text").innerHTML = `
Votre commande n° <span class="font-weight-bold">${orderInfos.orderId}</span> d'un montant de 
<span class="font-weight-bold">${orderInfos.totalPrice} €</span> a bien été confirmée, merci !
`;
