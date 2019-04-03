const express = require('express')
const router = express.Router()

const userBO = require('../bo/userBO')

router.get('', (req, res) => {

  let a = 0,
    b = 0,
    d = 'teste'

  let c = a / b

  console.log('a eh: ' + typeof a)
  console.log('d eh: ' + typeof d)

  console.log("Amarildo" < "Zenaide")
  console.log("Zenaide" < "america")

  console.log('null == undefined => ' + (null == undefined));
  console.log('null == 0 => ' + (null == 0));

  // coalesce like in javascript
  console.log(null || "user")
  console.log("Agnes" || "user")

  console.log(`a / b = ${c}`)
  console.log(Number.isNaN(c))

  // console.log(userBO.test)
  res.send('hello world 2')
}).get('/teste2', (req, res) => {
  console.log('teste 2')
  res.send('hello world 2')
})

module.exports = router
