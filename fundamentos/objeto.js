const produto1 = {}
produto1.nome = 'celular mt bom'
produto1.preco = 1200.00
produto1['desconto maneiro'] = 0.50

console.log(produto1)

const produto2 = {
    nome: 'camisa polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(produto2)

const listaProdutos = [
    {
         id: 1,
         descricao: 'manteiga de cacau',
         preco: 2.00,
         quantidade: 5
    },
    {
        id: 2,
        descricao: 'manteiga de código',
        preco: 3.00,
        quantidade: 6

    }
]

console.log(listaProdutos)
console.log(listaProdutos[1])
console.log(listaProdutos[1].descricao)