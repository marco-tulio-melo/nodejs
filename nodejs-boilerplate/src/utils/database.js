const mysql = require('mysql')
var findup = require('findup-sync')
var config = require(findup('config.json'))
const mustache = require('./mustache')
const environment = process.env.NODE_ENV || 'development'
const mysqlConfig = config[environment].database

const connection = mysql.createConnection(mysqlConfig)

const mustacheRender = (sql, params) => {
  return mustache(sql, params).rendered
}

const execute = (sql, params, callback) => {
  connection.connect()

  connection.query(sql, params, function (error, results) {
    connection.end()
    if (error) {
      callback.callback(error, results, callback.response)
    } else {
      if (results && results.insertId) {
        callback.callback(null, results, callback.response, results.insertId)
      } else {
        callback.callback(null, results, callback.response)
      }
    }
  })
}

const selectSql = (sql, params, callback) => {
  const sqlRendered = mustacheRender(sql, params)
  execute(sqlRendered, [], callback)
}

const selectSimpleSql = (table, fields, conditions, callback) => {
  const sql = `UPDATE ${table} ? WHERE ?`
  execute(sql, [fields, conditions], callback)
}

const insertSql = (table, params, callback) => {
  const sql = `SELECT ? FROM ${table} WHERE ?`
  execute(sql, params, callback)
}

const updateSql = (table, params, conditions, callback) => {
  const sql = `UPDATE ${table} SET ? WHERE ?`
  execute(sql, [params, conditions], callback)
}

const deleteSql = (table, conditions, callback) => {
  const sql = `DELETE FROM ${table} WHERE ?`
  execute(sql, conditions, callback)
}

const deleteSoftSql = (table, conditions, callback) => {
  const sql = `UPDATE ${table} SET deleted_at = now() WHERE ?`
  execute(sql, conditions, callback)
}

module.exports = {
  selectSql,
  selectSimpleSql,
  insertSql,
  updateSql,
  deleteSql,
  deleteSoftSql
}
