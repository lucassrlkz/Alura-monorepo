const Sequelize = require('sequelize')
const config = require('config')

// * comfiguracão do banco de dados, pegas as variaveis do arquivo config/ defautl.json
const newSequelize = new Sequelize(
	config.get('mysql.database'), 
	config.get('mysql.user'),
	config.get('mysql.password'),
	{
		host: config.get('mysql.host'),
		dialect: 'mysql',
	}
)

module.exports = newSequelize
