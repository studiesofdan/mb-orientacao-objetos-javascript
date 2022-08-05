 // Prototype chain
 // Pai
 function Veiculo(){
     this.carenagem = 'aço';
     this.ligar = function(){
         console.log("O veiculo está ligado :)")
     }
 }

 // Filhos
 function Trem(tipo){
     this.tipo = tipo;
     this.vagoes = 13;
 }

 function Carro(tipo){
     this.tipo = tipo;
     this.pneus = 4;
 }

 Trem.prototype = new Veiculo();
 Carro.prototype = new Veiculo();

 
 // Instâncias:
 // Trem bala
 let tremBala = new Trem("Trem bala")
 console.log(tremBala.tipo)
 tremBala.ligar()

 // Carro
 let picanto = new Carro("Picanto XSARA")
 console.log(picanto.tipo)
 picanto.ligar()