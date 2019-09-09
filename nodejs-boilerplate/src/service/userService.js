// const database = require('../utils/database')
// const i18n = require('../utils/i18n')

// const showUsers = (error, results, response) => {
//   console.log(i18n.translate('Hello'), results)
//   if (error) {
//     console.log(error)
//     response.status(500)
//       .json({
//         'error': 'Erro interno de sistema'
//       })
//   }
//   response.json(results)
// }

// const all = (req, res) => {
//   let params = {
//     id: 1
//   }

//   const callback = {
//     callback: showUsers,
//     response: res
//   }

//   database.selectSql('getAllUsers', params, callback)
// }

// const create = (req, res) => {
//   let params = {
//     name: 'Ola marilene',
//     type: 1,
//     status: 1,
//     email: 'stanleygomesdasilva1@gmail.com',
//     password: '12345'
//   }

//   const callback = {
//     callback: all,
//     response: res
//   }

//   database.insertSql('users', params, callback)
// }

// const update = (req, res) => {
//   let params = {
//     name: 'Ola marilene',
//     type: 1,
//     status: 1,
//     email: 'stanleygomesdasilva12@gmail.com',
//     password: '12345'
//   }

//   let conditions = {
//     id: 36
//   }

//   const callback = {
//     callback: showUsers,
//     response: res
//   }

//   database.updateSql('users', params, conditions, callback)
// }

// const deleteSoft = (req, res) => {
//   let conditions = {
//     id: 38
//   }

//   const callback = {
//     callback: showUsers,
//     response: res
//   }

//   database.deleteSoftSql('users', conditions, callback)
// }

// module.exports = {
//   all,
//   create,
//   update,
//   deleteSoft
// }
