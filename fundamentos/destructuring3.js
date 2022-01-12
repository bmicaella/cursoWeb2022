function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min]
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(rand([2, 34]))
console.log(rand([, 3]))
console.log(rand([2,]))
console.log(rand([230]))
console.log(rand([]))
//console.log(rand()) //da erro pq n tem como vc fazer o destructuring de algo que não eh um array ou pbjeto, n tem como desestruturar um treco q esteja undefined por assim dizer