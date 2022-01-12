const nome = 'Mica'
const concatenar = 'Olá ' + nome + '!'
const templateString = `
    Olá ${nome}!`

console.log(concatenar)
console.log(templateString)

console.log(`1 + 1 = ${1 + 1}`)

const uppercase = texto => texto.toUpperCase()

console.log(`Oi! ${uppercase('cuidado!!')}`)