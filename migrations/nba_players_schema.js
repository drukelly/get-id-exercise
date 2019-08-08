require('dotenv').config()

exports.up = (knex, _Promise) => {
  knex.schema.hasTable(process.env.db_table).then(exist => {
    if (!exist) {
      return knex.schema.createTable(process.env.db_table, table => {
        table.increments('id')
        table.decimal('ast', 4, 2).defaultTo(0.00)
        table.decimal('3pt', 3, 1).default(0.0)
        table.decimal('blocks', 2, 1).default(0.0)
        table.integer('field_goals').defaultTo(0)
        table.integer('free_throws').defaultTo(0)
        table.integer('games_played').defaultTo(0)
        table.string('jersey_number').notNullable()
        table.decimal('pts', 3, 1).defaultTo(0.0)
        table.decimal('rebounds', 2, 1).defaultTo(0.0)
        table.decimal('steals', 2, 1).defaultTo(0.0)
        table.string('image')
        table.string('name').notNullable()
        table.string('position')
      })
    }
  })
}

exports.down = knex => {
  return ([
    knex.schema.dropTable(process.env.db_table)
  ])
}
