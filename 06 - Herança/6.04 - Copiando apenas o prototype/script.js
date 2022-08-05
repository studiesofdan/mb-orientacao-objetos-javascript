 /*
// Copiando apenas o prototype

 Precauções:
 * Ao utilizar a abordagem para o clone, só o prototype tem um side effect
 * Se você mudar o prototype, toda a cadeia que o utiliza também vai ser alterada;
 * Utilize desse jeito apenas quando não precisar mudar métodos e propriedades.
 
 */

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


 function Carro() {}
 Trem.prototype.pneus = 4;


 // Copiando só o prototype ao invés de instanciar uma classe
 Trem.prototype = Veiculo.prototype;
 Carro.prototype = Veiculo.prototype;
 
 // Instâncias:
 let tremBala = new Trem('Trem Bala')
 let picanto = new Carro()

 tremBala.ligar();
 picanto.ligar()
 
 console.log(tremBala.carenagem)