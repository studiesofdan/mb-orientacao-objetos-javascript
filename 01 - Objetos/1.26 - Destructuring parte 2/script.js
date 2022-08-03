// Destructuring parte 2
let config = {
    ip: '127.0.0.1',
    porta: 9090,
    blocked: false,
}

// antes
console.log(config)

// depois
let porta = 8080;
//console.log(porta)

({porta} = config);
console.log(porta)
