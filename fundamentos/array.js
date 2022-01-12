const valores = [1, 2, 3, 4]
console.log(valores[0], valores[3], valores[4], valores[1])
console.log(valores[7])
console.log(valores)

valores[4] = 5
console.log(valores)
console.log(valores.length)
console.log(valores.lastIndexOf(0))
console.log(valores.lastIndexOf(3, 1))
console.log(valores.lastIndexOf(3, valores.length))

valores.push(6)
valores.push({id: 2}, null, false, true, 'oiia')
console.log(valores)

console.log(valores.pop())
console.log(valores)
delete valores[0]
console.log(valores)

console.log(typeof valores)
console.log(valores)

valores[0] = 1
console.log(valores)