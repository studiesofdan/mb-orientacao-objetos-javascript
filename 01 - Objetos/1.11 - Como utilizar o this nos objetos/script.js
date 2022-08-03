// Como utilizar o this nos objetos
let viagem = {
    destino: "São Paulo",
    welcome: function(){
        console.log("Bem-vindo a", this.destino)
    }
}

viagem.welcome();