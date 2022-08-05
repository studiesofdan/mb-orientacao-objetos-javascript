// Copiando propriedades
function extend(Filho, Pai){
    let paiProto = Pai.prototype
    let filhoProto = Filho.prototype
    for (let i in paiProto){
        filhoProto[i] = paiProto[i]
    }
    // Filho tem acesso ao objeto pai
    filhoProto.uber = paiProto
}

function Veiculo(){
    this.carenagem = "aço";
    this.items = ['Teto solar', 'blindagem', 'motor turbo'];
    this.ligar = function(){
        console.log("O veículo está ligado :D")
    }
}

function objectClone(o, stuff){
    let n;
    function F(){
        F.prototype = o;
        n = new F();
        n.uber = o;
        for (let i in stuff) {
            n[i] = stuff[i];
        }
        return n;
    }
}


// Filhos
// Trem
function Trem(tipo){
    this.tipo = tipo;
    this.vagoes = 13;
}

// Carro
function Carro() {
    this.pneus = 4
}
 

// Instâncias:
let v = new Veiculo;

let tremBala = objectClone(v, {
    tipo: 'trem',
    vagoes: 50,
})

tremBala.items.push('janela ativa')

console.log(tremBala)
console.log(Veiculo)