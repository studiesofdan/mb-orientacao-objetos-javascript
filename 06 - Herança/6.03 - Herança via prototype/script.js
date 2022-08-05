 // Herança via prototype
 function Veiculo(){
     Veiculo.prototype.carenagem = "aço";
     Veiculo.prototype.ligar = function(){
         console.log("O veículo está ligado :D")
     }
 }

 // Filhos
 function Trem(tipo){
     this.tipo = tipo;
 }
 Trem.prototype.vagoes = 13;


 function Carro(tipo){
     this.tipo = tipo;
 }
 Trem.prototype.pneus = 4;


 Trem.prototype = new Veiculo();
 Carro.prototype = new Veiculo();
 
 // Instâncias:
 let tremBala = new Trem("Trem bala")
 let picanto = new Carro("Picanto XSARA")

 tremBala.ligar();