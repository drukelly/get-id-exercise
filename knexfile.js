
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.mysql_host,
      port: process.env.mysql_port,
      user: process.env.mysql_user,
      password: process.env.mysql_pass,
      database: process.env.mysql_db,
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },
  staging: {
    client: 'mysql',
    connection: {
      host: process.env.mysql_host,
      port: process.env.mysql_port,
      user: process.env.mysql_user,
      password: process.env.mysql_pass,
      database: process.env.mysql_test_db,
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: process.env.mysql_prod_host,
      port: process.env.mysql_prod_port,
      user: process.env.mysql_prod_user,
      password: process.env.mysql_prod_pass,
      database: process.env.mysql_prod_db
    }
  }
}
