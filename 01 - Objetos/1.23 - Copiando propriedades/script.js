// Copiando propriedades
let pessoa = {
    nome: "Danilo",
    getNome(){
        console.log("Nome da pessoa: " + this.nome)
    }
}

let pessoaDois = {

}

Object.assign(pessoaDois, pessoa)
console.log(pessoaDois)

pessoaDois.getNome()