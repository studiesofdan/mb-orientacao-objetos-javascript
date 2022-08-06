// Estrutura de uma classe
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }   
}

console.log(typeof Pessoa)

let dan = new Pessoa("Dan", 27)
console.log(dan)