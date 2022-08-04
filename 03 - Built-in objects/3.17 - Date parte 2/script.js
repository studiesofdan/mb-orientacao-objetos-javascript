// Date parte 2
let data = new Date();

console.log(data)

console.log(new Date(data.setMonth(0)))

console.log(new Date(Date.now()))

console.log(Date.parse(new Date(data.setMonth(0))))