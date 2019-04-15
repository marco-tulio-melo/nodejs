const express = require('express')
const app = express()

const router = require('./router')

const port = 3000

app.use('/', router)

app.listen(port, () => console.log(`Running on port ${port}.`))
