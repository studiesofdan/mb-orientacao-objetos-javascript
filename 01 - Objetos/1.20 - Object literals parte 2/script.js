// Object literals (ES6)
// parte 2
let marcaRacao = "Biofresh"
let saborRacao = "frango, maçã e blueberry";
let precoRacao = 125.00

let comprarRacaoXanis = {
    marcaRacao,
    saborRacao,
    precoRacao,
    efetivarCompra(){
        console.log("Compra efetivada!")
    }
}

console.log(comprarRacaoXanis.marcaRacao)
comprarRacaoXanis.efetivarCompra();