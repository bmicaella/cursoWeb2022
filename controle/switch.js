const printResult = grade => {
    switch (Math.floor(grade)) { //inteiros only
        case 10:
        case 9:
            console.log('HQ')
            break
        case 8:
        case 7:
            console.log('A')
            break
        case 6:
        case 5:
        case 4:
            console.log('RC')
            break
        case 3: case 2: case 1: case 0:
            console.log('R')
            break
        default:
            console.log('I')
    }
}

printResult(9)
printResult(7)
printResult(5)
printResult(3)
printResult(0)
printResult(-12)