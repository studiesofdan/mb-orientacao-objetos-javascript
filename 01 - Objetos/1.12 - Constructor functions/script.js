// Constructor functions
function viagem(destino){
    this.destino = destino;
    this.welcome = function(){
        console.log("Bem-vindo a", this.destino)
    }
}

let destinoUm = new viagem("São Paulo")
// console.log(destinoUm.destino)
destinoUm.welcome()