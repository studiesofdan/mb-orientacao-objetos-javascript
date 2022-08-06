// Subclasses
class Humano {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    falar(){
        console.log('O ser humano falou :)')
    }
}

class Developer extends Humano {
    constructor(nome, idade, specs) {
        super(nome, idade)
        this.profissao = 'Developer'
        this.especializacoes = specs
    }
}

let dan = new Developer('Dan', 27, 'Front-end')

console.log(dan)
dan.falar()