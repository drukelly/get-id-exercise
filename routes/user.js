const User = require('../models/user')

module.exports = app => {
  app.get('/api/players', (req, res) => {
    User.getAll(req.body)
      .then(results => {
        console.log(results)
        res.json()
      })
      .catch(error => console.log(error))
  })
  app.get('/api/players/:id', (req, res) => {
    User.getID(req.params.id)
      .then(results => {
        console.log(results)
        res.json()
      })
      .catch(error => console.log(error))
  })
}
