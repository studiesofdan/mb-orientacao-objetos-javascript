// Prototype
function Carro(marca, preco){
    this.marca = marca;
    this.preco = preco;
}

Carro.prototype.rodas = 4;

let bmw = new Carro("BMW", 100000)

console.log(bmw)
console.log(bmw.rodas)