// Comparando objetos via metodo
let frutaUm = {
    fruta: "Kiwi"
}

let frutaDois = {
    fruta: "Kiwi"
}

// vai dar false, pois apesar das propriedades serem iguais, os objetos são diferentes
console.log(Object.is(frutaUm, frutaDois))