console.log(Math.ceil(5.2))

const obj1 = {}
console.log(obj1)
obj1.name = 'coder'
obj1['year'] = 2000
console.log(obj1)

function Obj(name) {
    this.name = name //o this torna publico o objeto name, a função exec
    this.exec = function() {
        console.log('Executingg....')
    }
}

const obj2 = new Obj('yes')
console.log(obj2)
console.log(obj2.name)
obj2.exec()