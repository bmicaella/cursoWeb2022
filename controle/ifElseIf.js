Number.prototype.between = function (start, end) {
    return this >= start && this <= end
}

const printResult = function(grade) {
    if (grade.between(9,10))
        console.log('honor!!')
    else if (grade.between(6,8.99))
        console.log('approved!!')
    else if (grade.between(4, 5.99))
        console.log('recuperationn! lets goo')
    else if (grade.between(0, 3.99))
        console.log('reproved! ;//')
    else console.log('not a valid grade! try againnn pls')
}

printResult(9)
printResult(5)
printResult(0)
printResult(8.67)
// printResult('8')
printResult(-1)