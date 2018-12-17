const express = require('express')
const server = express()

server.use('/api', function(req, res, next) {
    console.log('Inicio')
    next()
    console.log('Fim')
})

server.use('/api', function(req, res) {
    console.log('Resposta')
    res.send('API')
})

const port = 456

server.listen(port, function () {
    console.log('Executando...')
})
