const pessoa = {
    saudacao: 'Oi! Bom diaa',
    falar() {
        console.log(this.saudacao) //poderia usar pessoa.saudacao, mas não só saudacao
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //conflito entre oo e p. funcional
//o this na const falar não mais aponta para pessoa, que é o objeto que definiu a função

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()