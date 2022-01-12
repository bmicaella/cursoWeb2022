//ctrl alt m interrompe o código

//opção 1
function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa 

//opção 2
function Kim() {
    this.age = 10

    const self = this

    setInterval(function() {
        self.age--
        console.log(self.age)
    }, 1000)
}

new Kim