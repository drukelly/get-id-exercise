const ENV = process.env.NODE_ENV || 'development'
// eslint-disable-next-line no-unused-vars
const mysql = require('mysql')
const Knex = require('knex')(require('../knexfile'[ENV]))
module.exports = Knex
