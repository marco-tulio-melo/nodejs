const express = require('express')
const router = express.Router()

const user = require('./services/user')

// middleware em todas as rotas
router.use((req, res, next) => {
  console.log('Before: ', Date.now())
  next()
  console.log('After: ', Date.now())
})

router.use('/user', user)

module.exports = router
