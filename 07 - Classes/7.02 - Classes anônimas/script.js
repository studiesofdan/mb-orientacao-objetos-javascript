// Classes anônimas
let Pessoa = class {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    sayHello(){
        console.log("Hello")
    }
}

console.log(typeof Pessoa)

let dan = new Pessoa("Dan", 27)
console.log(dan)

dan.sayHello()