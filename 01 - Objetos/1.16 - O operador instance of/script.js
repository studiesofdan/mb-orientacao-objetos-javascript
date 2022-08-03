// O operador instance of
// Função com objeto 1
function criarArvore(especie, temFruto){
    return {
        especie: especie,
        temFruto: temFruto,
    }
}

let laranjeira = new criarArvore("laranjeira", true)

console.log(laranjeira)
console.log(laranjeira.constructor)


// Função com objeto 2
function tipoTransporte(descricaoTipo, destino, valorPassagem){
        this.descricaoTipo = descricaoTipo;
        this.destino = destino;
        this.valorPassagem = valorPassagem;
}

let tipo = new tipoTransporte("aviao", "Manaus", 2500)
console.log(tipo)

// Objeto 3
let objeto = {
    fruta: 'manga',
}


// Usando instanceOf
// vai retornar false, pois a função não é pai do objeto laranjeira
console.log (laranjeira instanceof criarArvore)

// agora retorna true, pois o pai da função é o objeto
console.log (laranjeira instanceof Object)

// retorno do instanceOf com this
console.log(tipo instanceof tipoTransporte)

// instância de objeto vai retornar true
console.log(objeto instanceof Object)