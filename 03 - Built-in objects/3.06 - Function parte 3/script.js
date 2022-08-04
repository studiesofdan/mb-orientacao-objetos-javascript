// Object function (parte 3)
let motomami = {
    nomeFaixa: "CUUUUuuuuuute",
    tocarFaixa(){
        console.log("Keep it cute, manito, keep it " + this.nomeFaixa)
    }
}

let trechoFaixa = {
    nomeFaixa: "cute"
}

motomami.tocarFaixa()
motomami.tocarFaixa.call(trechoFaixa) // function -> call
