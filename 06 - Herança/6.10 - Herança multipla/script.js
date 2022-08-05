// Herança multipla
function multi(){
    let n={}, stuff, j = 0, len = arguments.length;
    for(j = 0; j < len; j++){
        stuff = arguments[j]
        for(let i in stuff) {
            if(stuff.hasOwnProperty(i)) {
                n[i] = stuff[i];
            }
        }
    }
}

let pneu = {
    material: 'borracha',
}

let aro = {
    tamanho: 20,
}

let armacao = {
    arame: '2mm',
}

let pneuMontado = multi(pneu, aro, armacao)
console.log(pneuMontado)