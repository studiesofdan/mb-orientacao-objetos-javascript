// Object literals (ES6)
// parte 3
let marcaRacao = "Biofresh"
let saborRacao = "frango, maçã e blueberry";
let precoRacao = 125.00

fabr = "fabricante_"

let comprarRacaoXanis = {
    [fabr+"racao"]: "Hercosul",
    marcaRacao,
    saborRacao,
    precoRacao,
    efetivarCompra(){
        console.log("Compra efetivada!")
    }
}

let outrasFabricantes = {
    [fabr+"concorrente"]: "Affinity"
}

console.log(comprarRacaoXanis.marcaRacao)
comprarRacaoXanis.efetivarCompra();

console.log(outrasFabricantes)