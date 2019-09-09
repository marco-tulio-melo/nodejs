const database = require('../utils/database')

const show = (req, res, callbackResponse) => {
  database.selectSql('getProducer', { filter_id: 1 }, callbackResponse)
}

module.exports = {
  show
}
