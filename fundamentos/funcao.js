//funcao sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma('a', 'b')
imprimirSoma(2, 5)
imprimirSoma(3, 4, 6, 7)
imprimirSoma()
imprimirSoma(4)

//funcao com retorno

const soma = (a = 0, b = 0) => {
    return a + b
}

let total = soma(1, 3)
console.log(total)
console.log(soma(25, 5))
console.log(soma())