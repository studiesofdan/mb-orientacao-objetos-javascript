// Tipos de dados e propriedades
let maquina = {
    material: "Aço inox",
    equipamentos: ['motor', 'freio', 'esteira', 'cilindro'],
    vaiMontada: false,
    numeroDeMotores: 1,
}

for (let i = 0; i < maquina.equipamentos.length; i++) {
    console.log("Lista de equipamentos:", maquina.equipamentos[i])
}


if (maquina.vaiMontada == false) {
    console.log("Máquina precisa ser montada")
}

console.log(maquina)
console.log(maquina.material)
console.log(maquina.equipamentos)
console.log(maquina.vaiMontada)
console.log(maquina.numeroDeMotores)