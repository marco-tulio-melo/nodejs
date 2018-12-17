const express = require('express')
const server = express()

server.get('/', function(req, res, next) {
    console.log('Inicio')
    next()
    console.log('Fim')
})

server.get('/', function(req, res) {
    console.log('Resposta')
    res.send('Ola express')
})

const port = 456

server.listen(port, function () {
    console.log('Executando...')
})