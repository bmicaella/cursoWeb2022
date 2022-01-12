const rand = ({min = 0, max = 1000}) => Math.floor(Math.random() * (max - min) + min);

const obj = {min: 5, max: 10}
console.log(rand(obj))
console.log(rand({}))
console.log(rand({min: 700}))
//console.log(rand())
console.log(rand(5, 25)) // nao funciona