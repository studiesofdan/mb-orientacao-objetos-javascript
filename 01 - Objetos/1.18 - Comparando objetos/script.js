// Comparando objetos
function ninja(nome, arma){
    this.nome = nome
    this.arma = arma
}

const naruto = new ninja('naruto', 'shuriken')
const rocklee = new ninja('Rock Lee', 'punhos')
const cloneDoNaruto = new ninja('Naruto', 'shuriken')
const cloneVerdadeiroDoNaruto = naruto;

console.log(naruto === rocklee)
console.log(naruto === cloneDoNaruto)
console.log(naruto === cloneVerdadeiroDoNaruto)
console.log(cloneDoNaruto === cloneVerdadeiroDoNaruto)