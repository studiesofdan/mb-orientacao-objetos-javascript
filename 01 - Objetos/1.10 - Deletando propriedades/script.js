// Propriedades e métodos em objetos já criados
let carro = {
    tipo: "SUV",
    ligar: function(){
        console.log("Carro ligado :)")
    }
}

console.log(carro.tipo)

delete carro.tipo;
delete carro.ligar;

console.log(carro.tipo)
console.log(carro)