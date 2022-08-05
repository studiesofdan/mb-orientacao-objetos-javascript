// Como fazer loops em objetos
function Carro(marca, preco){
    this.marca = marca;
    this.preco = preco;
    this.calota = true;
}

let fusca = new Carro("VW", 10000);

for(prop in fusca){
    console.log(prop + ' => ' + fusca[prop])
}

// obj['prop']
// obj.prop
