// Acessando propriedades por variável
let meuGato = {
    nome: "Lenin Pique Swift",
    tipagemECor: "cinza tigrado",
    raca: false,
    kg: 4.500,
    vacinado: true,
    gatoBravo: false,
}

const bravo = 'gatoBravo'

console.log("Nome do gato:",meuGato.nome)

// acesso da propridade com variável
console.log("Bravo?", meuGato[bravo])