// Prototype igual a objeto
// * Ordem de acesso: primeiro o objeto, depois o prototype
// * As propriedades podem coexistir

function Carro(marca, preco){
    this.marca = marca;
    this.preco = preco;
    this.calota = true;
}

Carro.prototype.cor = 'vermelho';
Carro.prototype.calota = false;

let fusca = new Carro("VW", 10000);
console.log(fusca.cor)

fusca.cor = 'verde'
console.log(fusca.cor)

console.log(fusca.calota)