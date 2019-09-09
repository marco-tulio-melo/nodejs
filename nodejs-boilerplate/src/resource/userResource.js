const express = require('express')
const userResource = express.Router()

const userService = require('../service/userService')

userResource.get('', (req, res) => {
  userService.all(req, res)
})

userResource.post('/create', (req, res) => {
  userService.create(req, res)
})

userResource.get('/update', (req, res) => {
  userService.update(req, res)
})

userResource.get('/delete', (req, res) => {
  userService.deleteSoft(req, res)
})

module.exports = userResource
