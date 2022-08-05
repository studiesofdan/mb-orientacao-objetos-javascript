// Verificando se a propriedade está em um objeto ou no prototype
function Carro(marca, preco){
    this.marca = marca;
    this.preco = preco;

    // Propriedade calota é do objeto
    //this.calota = true;
}

Carro.prototype.cor = 'vermelho';

// Propriedade calota é do prototype
Carro.prototype.calota = false;

let fusca = new Carro("VW", 10000);

if(fusca.hasOwnProperty('calota')){
    console.log("A propriedade calota é do objeto")
} else if(fusca.constructor.prototype.hasOwnProperty('calota')){
    console.log("A propriedade calota é do prototype")
} else {
    console.log("A propriedadae calota não existe")
}