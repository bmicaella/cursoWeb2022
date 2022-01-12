const soBoaNoticia = nota => { if(nota >= 7) console.log('Aprovad com ' + nota) }

soBoaNoticia(9)
soBoaNoticia(5)

const ifTrueISpeak = value => { if(value) console.log(`It's true.. ${value}`) }

ifTrueISpeak(5)
ifTrueISpeak()
ifTrueISpeak('')
ifTrueISpeak(null)
ifTrueISpeak(undefined)
ifTrueISpeak(' ')
ifTrueISpeak('roxannee')
ifTrueISpeak(NaN)
ifTrueISpeak(1)
ifTrueISpeak(0)
ifTrueISpeak(-1)
ifTrueISpeak({})
ifTrueISpeak([])
ifTrueISpeak([3, 4])
ifTrueISpeak([3, 0])
ifTrueISpeak([null, null])