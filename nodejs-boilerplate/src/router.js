const express = require('express')
const router = express.Router()

const userResource = require('./resource/userResource')
const producerResource = require('./resource/producerResource')

// middleware em todas as rotas
router.use((req, res, next) => {
  next()
})

router.use('/user', userResource)
router.use('/producer', producerResource)

module.exports = router
