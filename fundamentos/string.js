const kim = 't4ehyung'

console.log(kim.charAt(1))
console.log(kim.charAt(9))
console.log(kim.charCodeAt(5))

console.log(kim.endsWith('g'))
console.log(kim.match('t4ehyung'))

console.log(kim.indexOf('h'))
console.log(kim.indexOf('a'))

console.log(kim.substring(2))
console.log(kim.substring(3, 7)) //a partir do indice 3, printar 7 digitos
console.log(kim.substring(1, kim.length))

console.log('The great '.concat(kim.replace(/\d/, 'a')).concat('!'))
console.log('The great ' + kim.replace(/\d/, 'a') + ('!'))

console.log(kim.replace(/\d/, 'AA'))
console.log(kim.replace(/\s/, 'S')) //??
console.log(kim.replace(/\w/g, 'flamengo'))

console.log(kim.split(""))
console.log(kim.split(/h/))
console.log('nj, s, y, j, pj, t, jjk'.split(','))
console.log('nj, s, y, j, pj, t, jjk'.split(/,/))

console.log(kim.valueOf())

