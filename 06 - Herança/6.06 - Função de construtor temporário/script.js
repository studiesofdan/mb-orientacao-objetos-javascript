// Função de construtor temporário
function extend(Filho, Pai){
    let F = function(){}
    F.prototype = Pai.prototype
    Filho.prototype = new F();
}


 function Veiculo(){
     Veiculo.prototype.carenagem = "aço";
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