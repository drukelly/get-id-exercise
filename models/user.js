const knex = require('../config/connection.js')

class User {
  constructor (table = 'users') {
    this.table = table
  }
  getAll (data) {
    return knex(this.table)
  }
  getID (where, data) {
    return knex(this.table)
      .select(where)
  }
}

module.exports = new User()
