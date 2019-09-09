const fs = require('fs')
const path = require('path')
const Mustache = require('mustache')
var findup = require('findup-sync')
var config = require(findup('config.json'))
const showQueryDefault = config.showQuery
const sqlDir = config.sqlDir

const openSqlFile = (sqlDir, name) => {
  return fs.readFileSync(
    path.resolve(sqlDir, `${name}.sql`)
  ).toString()
}

const getAllIndexes = (arr, val) => {
  let indexes = []
  indexes = []
  let i = -1

  while ((i = arr.indexOf(val, i + 1)) !== -1) {
    indexes.push(i)
  }

  return indexes
}

const exportQuery = (name, params) => {
  const sql = openSqlFile(sqlDir, name)
  let rendered = Mustache.render(sql, params)

  const arrayParam = []

  Object.keys(params).forEach(el => {
    const queryParam = `:${el}`
    const indexes = getAllIndexes(rendered, queryParam)
    if (indexes.length) {
      indexes.forEach(() => {
        const atributo = params[el]
        if (atributo.constructor.name === 'Array') {
          const attrArray = atributo.reduce((acc, cur) => {
            acc.push(`$${arrayParam.length + 1}`)
            arrayParam.push(cur)
            return acc
          }, [])

          rendered = rendered.replace(queryParam, attrArray.join(', '))
          return
        }

        rendered = rendered.replace(queryParam, atributo)
        arrayParam.push(atributo)
      })
    }
  })

  if (showQueryDefault === true) {
    console.log('Query: ', rendered)
    console.log('Params: ', arrayParam)
  }

  return {
    rendered,
    arrayParam
  }
}

module.exports = exportQuery
