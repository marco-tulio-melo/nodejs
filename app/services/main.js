const express = require('express')
const router = express.Router()

router.get('/teste', (req, res) => {
  console.log('teste')
  res.send('hello world')
}).get('/teste2', (req, res) => {
  console.log('teste 2')
  res.send('hello world 2')
})

module.exports = router
