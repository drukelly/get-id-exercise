exports.up = (knex, _Promise) => {
  knex.schema.hasTable(process.env.db_table).then(exist => {
    if (!exist) {
      return knex.schema.createTable(process.env.db_table, table => {
        table.increments('id')
        table.string('name').notNullable()
        table.string('jersey_number').notNullable()
        table.string('image').notNullable()
      })
    }
  })
}

exports.down = knex => {
  return ([
    knex.schema.dropTable(process.env.db_table)
  ])
}
