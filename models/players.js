const knex = require('../config/connection.js')

class Player {
  constructor (table = process.env.db_table) {
    this.table = table
  }
  getAll (table) {
    return knex.select()
      .table(this.table)
  }
  getID (id) {
    return knex.select()
      .table(this.table)
      .where('id', id)
  }
}

module.exports = new Player()
