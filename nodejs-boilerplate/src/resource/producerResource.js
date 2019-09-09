const express = require('express')
const producerResource = express.Router()
const http = require('../utils/http')
const producerService = require('../service/producerService')

producerResource.get('', (req, res) => {
  producerService.show(req, res, http.callbackResponse(res))
})

module.exports = producerResource
