const i18n = require('./i18n')

const error = (res, message, status) => {
  console.log(error, message || {}, status || {})
  res
    .status(status || 500)
    .set('Content-Type', 'application/json')
    .json({
      error: (message || i18n.translate('generic_error'))
    })
}

const json = (res, data) => {
  res
    .status(200)
    .set('Content-Type', 'application/json')
    .json(data)
}

const callbackResponse = (res) => {
  return {
    callback: (error, results, response) => {
      error ? error(res) : json(res, results)
    },
    response: res
  }
}

module.exports = {
  error,
  json,
  callbackResponse
}
