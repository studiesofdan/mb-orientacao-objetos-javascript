// Prototype
function abc(){
    console.log("music")
}

abc()

console.log(abc.prototype)
console.log(typeof abc.prototype)

abc.prototype.music = 1;
console.log(abc.prototype)