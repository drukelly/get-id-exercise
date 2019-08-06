const knex = require('../config/connection.js')

class User {
  constructor (table = 'users') {
    this.table = table
  }
  get (where, data) {
    return knex(this.table)
      .select(where)
  }
}

module.exports = new User()
