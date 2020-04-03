const totalvoice = require('totalvoice-node');
const client = new totalvoice("coloque sua chave-key");
client.sms.enviar("ddd+numero", "Escreva sua mensagem aqui")
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });