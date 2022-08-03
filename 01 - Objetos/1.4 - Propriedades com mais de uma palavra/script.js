// Propriedades com mais de uma palavra
let cavalo = {
    patas : 4,
    "está domesticado": false,
    estaDomesticado: false,
}

// mostrando as propriedades do objeto
console.log(cavalo)

// propriedade com mais de uma palavra (não recomendado)
console.log(cavalo["está domesticado"])

// propriedade com mais de uma palavra (recomendado)
console.log(cavalo.estaDomesticado)