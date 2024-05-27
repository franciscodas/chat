const venom = require ('venom-bot')

venom
.create({
    session: 'ayla'
})
.then((client) => start(client))
.catch((erro) => {
  console.log(erro);
});

var nome = `👋Olá, como vai?  Eu sou a Dijè, a sua *assistente virtual* da *MARIA DO LANCHE.*👩🏻‍🍳 como posso ajudar?  👩‍🍳-------------------------------👩‍🍳 
    
1️⃣FAZER PEDIDO
2️⃣TAXA DE  ENTREGA
3️⃣FALE CONOSCO
0️⃣ENCERRAR ATENDIMENTO`

// ---------------------------------------------------------

function start(client) {
    client.onMessage((message) => {
        if (message.body === "Oi" && message.isGroupMsg === false){
            client
            .sendText(message.from, nome )
    }
})   
};

