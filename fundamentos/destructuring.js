const pessoa = {
    name: 'v',
    //surname: 'vante',
    age: 25,
    address: {
        street: 'John Street',
        number: 12
    }
}

const { name, age } = pessoa
console.log(name, age)

const { address } = pessoa
console.log(address)

const { name: n } = pessoa
console.log(name, n)

const { address: { street, number } } = pessoa
console.log(street, number)

const { surname: personSurname = '--' } = pessoa
console.log(personSurname)

// const { telephone, occupation = false } = pessoa
// console.log(telephone, occupation)

// const { account: { agency, number } } = pessoa
// console.log(agency, number)