const express = require('express')
const router = express.Router()

const userBO = require('../bo/userBO')

router.get('', (req, res) => {
  console.log(userBO.test)
}).get('/teste2', (req, res) => {
  console.log('teste 2')
  res.send('hello world 2')
})

module.exports = router
