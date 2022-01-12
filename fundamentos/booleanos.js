let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('\nos verdadeiros!')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!`texto`)
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('\nos falsos!')
console.log(!!0)
console.log(!!NaN)
console.log(!!'')
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("\npra finalizar!")
console.log('' || null || 0 || 'epa') //retorna o verdadeiro

console.log('\nuns testes!')
let nome = ''
console.log(nome || 'Não preenchido')

nome = 'cod3r'
console.log(nome || 'Não preenchido')
