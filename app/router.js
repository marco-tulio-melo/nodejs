const express = require('express')
const router = express.Router()

const main = require('./services/main')

router.get('/', (req, res) => {
  console.log('teste')
  res.send('hello world')
})

// router.get('/main', (req, res) => {
//   console.log('teste')
//   res.send('hello world')
// })

router.use('/main', main)

module.exports = router
