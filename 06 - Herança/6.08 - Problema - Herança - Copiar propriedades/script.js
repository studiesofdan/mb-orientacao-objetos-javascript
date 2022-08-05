// Copiando propriedades
function extend(Filho, Pai){
    let paiProto = Pai.prototype
    let filhoProto = Filho.prototype
    for (let i in paiProto){
        filhoProto[i] = paiProto[i]
    }
    // Filho tem acesso ao objeto pai
    filhoProto.uber = paiProto
}

 function Veiculo(){
     Veiculo.prototype.carenagem = "aço";
     Veiculo.prototype.itens = ['Teto solar', 'blindagem'];
     Veiculo.prototype.ligar = function(){
         console.log("O veículo está ligado :D")
     }
 }

 // Filhos
 // Trem
 function Trem(tipo){
     this.tipo = tipo;
 }
 Trem.prototype.vagoes = 13;
 Trem,prototype.itens.push('Janelas fixas')

 // Carro
 function Carro() {}
 Trem.prototype.pneus = 4;
 
 // Construtor temporário por função
 extend(Trem, Veiculo)
 extend(Carro, Veiculo)

 // Copiando só o prototype ao invés de instanciar uma classe
 Trem.prototype = Veiculo.prototype;
 Carro.prototype = Veiculo.prototype;
 
 // Instâncias:
 let tremBala = new Trem('Trem Bala')
 let picanto = new Carro()


 Carro.prototype.ligar = function(){
     console.log("O carro ligou")
 }

 Trem.prototype.ligar = function(){
    console.log("Piuiiiiiiiii")
}


 tremBala.ligar();
 picanto.ligar()
 
 console.log(tremBala.carenagem)