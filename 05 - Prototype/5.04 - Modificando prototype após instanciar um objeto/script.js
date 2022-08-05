// Modificando prototype após instanciar um objeto
function Carro(marca, preco){
    this.marca = marca;
    this.preco = preco;
}

Carro.prototype = {
    cor: "vermelho",
    ano: 2022,
    ligar(){
        console.log("O carro ligou!")
    }
}

Carro.prototype.rodas = 4;

let bmw = new Carro("BMW", 100000)

console.log(bmw)
console.log(bmw.rodas)
console.log(bmw.cor)
console.log(bmw.ano)

bmw.ligar()

// modificação
let ferrari = new Carro("Ferrari", 2000000)

Carro.prototype.tetoSolar = true;

Carro.prototype.abrirTetoSolar = function(){
    console.log("O teto abriu :)")
}

console.log(bmw.tetoSolar)
ferrari.abrirTetoSolar()