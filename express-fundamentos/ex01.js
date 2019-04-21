const express = require('express')
const server = express()

server.get('/', function(req, res){
    res.send('Requisicao!')
})

server.all('/teste', function (req, res) {
    res.send('Rota de teste')
})

server.get(/api/, function (req, res) {
    res.send('Usando expressao regular')
})

const port = 456

server.listen(port, function () {
    console.log('Executando...')
})