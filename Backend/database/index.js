const Sequelize = require('sequelize')
const config = require('../models/database')

const Pessoa = require('../models/pessoas')

const connection = new Sequelize(config)

Pessoa.init(connection)
Pessoa.associate(connection.models)

module.exports = connection