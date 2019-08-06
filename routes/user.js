// eslint-disable-next-line no-unused-vars
const path = require('path')
const User = require('../models/user')

module.exports = app => {
  app.get('/test', (req, res) => {
    User.get(req.body)
      .then(results => console.log(results))
      .catch(error => console.log(error))
  })
}
