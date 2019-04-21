const express = require('express')
const server = express()

server.route('/clientes')
    .get((req, res) => res.send('Lista de clientes'))
    .post((req, res) => res.send('Novo cliente'))
    .put((req, res) => res.send('Altera cliente'))
    .delete((req, res) => res.send('Deleta cliente'))

const port = 456

server.listen(port, function () {
    console.log('Executando...')
})
