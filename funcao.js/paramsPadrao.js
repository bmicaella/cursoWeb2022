//opção 1

function soma1(a, b, c) {
    a = a || 1
    b = b || 1 // nao funciona caso receba valor 0, porque considera como falso
    c = c || 1

    return a + b + c
}

console.log(soma1(1, 2, 3), soma1(), soma1(2, 3), soma1(0,0,0))

//opção 2

function soma2(a, b, c) {
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // mais segura

    return a + b + c
}

console.log(soma2(), soma2(2,2,2), soma2(2), soma2(0, 1), soma2(0,0,0))

//opção 3, padrão es2015!

const soma3 = (a = 1, b = 1, c = 1) => a + b + c

console.log(soma3(), soma3(1), soma3(2, 3, 5), soma3(0,0,0))