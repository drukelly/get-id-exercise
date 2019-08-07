
const Player = require('../models/players')

module.exports = app => {
  app.get('/api/players', (req, res) => {
    Player.getAll(req.body)
      .then(results => {
        console.log(results)
        res.json(results)
      })
      .catch(error => console.log(error))
  })
  app.get('/api/players/:id', (req, res) => {
    Player.getID(req.params.id)
      .then(results => {
        console.log(results)
        res.json(results)
      })
      .catch(error => console.log(error))
  })
}
