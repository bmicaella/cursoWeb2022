let valor //nao inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
// console.log(valor.toString()) //erroo

const produto = {}
console.log(produto)
console.log(produto.preco)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //eviteeeee
console.log(produto)
console.log(!!produto.preco)

produto.preco = null //sem preco
console.log(!!produto.preco)
