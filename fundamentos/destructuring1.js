const [a] = [10]
const array = [1, 2, 3, 4, 5]

const [n1, , n3] = array

console.log(n1, n3)

const array2 = [ [1, 2], [3, 4], [5, 6] ]

const [[], [], [, n2]] = array2

console.log(n2)

const [[], [], [nome, sobrenome]] = [[], [], ['save your ', 'tears for another day']]
console.log(nome + sobrenome)