// Mais sobre métodos
let pessoa = {
    nome: "Danilo",
    idade: 27,
    profissao: "Desenvolvedor",
    fraseFavorita: function() {
        console.log("'You are what you love' - [Daylight, Taylor Swift]")
    },
    aniversario(){
        this.idade += 1
    }
}

console.log(pessoa)
pessoa.fraseFavorita()

// Idade atual
console.log(pessoa.idade)

// Nova idade
pessoa.aniversario()
console.log(pessoa.idade)