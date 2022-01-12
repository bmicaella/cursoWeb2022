function treatError(err) {
    // throw new Error('Error processing..')
    // throw 10
    // throw true
    // throw 'Error message'
    throw {
        nome: err.message,
        msg: err.message,
        date: new Date()
    }
}

function printUpperCaseName(obj) {
    try {
        console.log(obj.name.toUpperCase()  + '!!!')
    } catch (err) {
        treatError(err)
        //alert('Please try again later')
    } finally {
        console.log("It's over!")
    }
}

const person = { nome: 'John', age: 23 }
const person1 = { name: 'max', age: 23 }
printUpperCaseName(person1)
printUpperCaseName(person)