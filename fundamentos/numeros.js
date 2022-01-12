const peso1 = 1
const peso2 = Number('2.0')

const av1 = 7
const av2 = 8.7

const media = av1 * peso1 + av2 * peso2
const total = media / (peso1 + peso2)

console.log(peso1 + peso2)
console.log(typeof peso2)

console.log(total)
console.log(total.toFixed(2))
console.log(total.toString(2)) //binario
console.log(total.toString(16)) //hexadecimal

const testeArredondar = 11.447
console.log(testeArredondar.toFixed(2)) //arredonda
console.log(Number.isInteger(testeArredondar))

//curiosidades ""

console.log(7/0)
console.log("10"/2)
console.log("3" + 2) //por fazer sentido para as strings, ela tem precedencia
console.log("3" - 2)
console.log("uauaua" * 2)
console.log(0.1 + 0.11)
// console.log(11.toString())
console.log((11).toString(2))
console.log((7).toFixed(2))
