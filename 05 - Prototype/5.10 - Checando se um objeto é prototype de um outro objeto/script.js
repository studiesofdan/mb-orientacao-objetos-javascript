// Checando se um objeto é prototype de um outro objeto
let equipamentosDoCarro = {
    preco: 10000,
    calota: true,
    cor: 'Azul',
    aro: 16
}

function Carro(marca){
    this.marca = marca;
}

Carro.prototype = equipamentosDoCarro

let fusca = new Carro("VW");

console.log(fusca.preco)
console.log(equipamentosDoCarro.isPrototypeOf(fusca))