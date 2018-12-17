const _ = require('lodash')

const alunos = [
    {
        nome: "Fulano",
        nota: 300
    },
    {
        nome: "Ciclano",
        nota: 100
    },
    {
        nome: "Beltrano",
        nota: 200
    }
]

const media = _.sumBy(alunos, 'nota') / alunos.length

console.log(media)
