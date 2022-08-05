// Adicionando métodos aos built-in objects do JS
Array.prototype.checkLength = function() {
    return this.length
}

Array.prototype.somaDoisPrimeiros = function() {
    return this[0] + this[1];
}

let a = [1,2,3,4,5,6,7]
let b = [13, 21, 80]

console.log(a.checkLength())
console.log(b.checkLength())

console.log(a.somaDoisPrimeiros())