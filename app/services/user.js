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

  let entry = [1,2,3,4,5]

  entry.unshift(0)
  entry.push(6)

  for (let a of entry) {
    console.log(`valor do vetor: ${a}`)
  }

  const remove = (list, pos) => {
    return list.slice(0, pos).concat(list.slice(pos + 1, list.lenght))
  }

  console.log(`remove(2) ${remove(entry, 2)}`)

  const add = (list, ...x) => {
    for(let i of x) {
      list.push(i)
    }
    return list
  }

  console.log(`add(7) ${add(entry, 7, 8, 9, 10)}`)

  const sum = (...elements) => {
    return elements.reduce((sum, item) => sum + item)
  }

  console.log(`sum(1,2,3,4) = ${sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`)

  const sumOdds = (...elements) => {
    return elements.filter((item) => item && item > 0 && item % 2 != 0)
      .reduce((sum, item) => sum + item)
  }

  console.log(`sumOdds(1,2,3,4) = ${sumOdds(1,2,3,4,5)}`)

  // console.log(userBO.test)
  res.send('Primeira aula')
}).get('/teste2', (req, res) => {


  res.send('hello world 2')
})

module.exports = router
