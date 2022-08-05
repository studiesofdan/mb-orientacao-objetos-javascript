 // Prototype chain parte 2
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
 tremBala.ligar()

 // Carro
 let picanto = new Carro("Picanto XSARA")
 picanto.ligar()



 // Checagem
 console.log(tremBala instanceof Trem)
 console.log(picanto instanceof Carro)

 console.log(tremBala instanceof Veiculo)
 console.log(picanto instanceof Veiculo)

 console.log(tremBala instanceof Object)
 console.log(picanto instanceof Object)

 console.log(tremBala instanceof Carro)
 console.log(picanto instanceof Trem)