const i18n = require('i18n')
var findup = require('findup-sync')
var config = require(findup('config.json'))
const i18nConfig = config.i18n

i18n.configure(i18nConfig)

i18n.translate = (text) => i18n.__(text)

module.exports = i18n
