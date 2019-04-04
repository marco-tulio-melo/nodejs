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
  console.log("Android" > "ios")

  console.log('null == undefined => ' + (null == undefined));
  console.log('null == 0 => ' + (null == 0));

  // coalesce like in javascript
  console.log(null || "user")
  console.log("Agnes" || "user")

  console.log(`a / b = ${c}`)
  console.log(Number.isNaN(c))

  // console.log(userBO.test)
  res.send('Primeira aula')
}).get('/teste2', (req, res) => {

  let x = 0

  if (true) {
    let y = 10
    var z = 5

    console.log(x, y, z)
  }

  // if (typeof y != null) {
  //   console.log(x, y, z)
  // } else {
  //   console.log('Y nao foi definido')
  // }

  const fn = (x, y) => {
    return x * y
  }

  const fn2 = x => x * x

  console.log('Resultado (x, y): ' + fn(1, 2))
  console.log('Resultado (x): ' + fn2(9))

  res.send('hello world 2')
})

module.exports = router
