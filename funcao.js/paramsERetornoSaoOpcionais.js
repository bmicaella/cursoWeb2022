function area(largura, altura) { //pra setar valor padrão é só deixar (largura = 0, altura = 0)
    const area = largura * altura;

    if(area > 20) console.log(`Valor acima do permitido (${area})`)
    else return area
}

console.log(area())
console.log(area('1', 3))
console.log(area(2))
console.log(area(3, 4))
console.log(area(10, 0, 1, 2, 3))
console.log(area(7, 7))