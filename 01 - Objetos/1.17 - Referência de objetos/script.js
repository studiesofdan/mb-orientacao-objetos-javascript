// Referência de objetos
// Ao alterar a referência de um objeto por uma variável, o valor original é alterado.
// Ensinamento para ficar atento caso precise fazer a cópia de um objetos
let qtdEstoque = {
    tipoFrutas: 1,
}

console.log(qtdEstoque.tipoFrutas)

// alterando a referência
let estoque = qtdEstoque
estoque.tipoFrutas = 2

console.log(qtdEstoque.tipoFrutas)