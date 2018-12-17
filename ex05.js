const express = require('express')
const server = express()
const router = require('./ex05_routes')

server.use('/api', router)

const port = 456

server.listen(port, function () {
    console.log('Executando...')
})