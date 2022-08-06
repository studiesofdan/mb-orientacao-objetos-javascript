// Getters e Setters
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    sayHello(){
        console.log("Hello")
    }

    get receberNomePessoa(){
        return "O nome da pessoa é: " + this.nome
    }

    set mudarNomeDaPessoa(novoNome){
        this.nome = "Sr(a). " + novoNome;
    }
}

console.log(typeof Pessoa)

let dan = new Pessoa("Dan", 27)
console.log(dan)

dan.sayHello()

// Referenciar get e set
// get
dan.mudarNomeDaPessoa = "Lepix"
console.log(dan.nome)

// set
console.log(dan.receberNomePessoa)