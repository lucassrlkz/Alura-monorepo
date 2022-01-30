const mysql = require('mysql')
const config = require('config')

const conexao = mysql.createConnection({
	host: config.get('mysql.host'),
	port: config.get('mysql.port'),
	user: config.get('mysql.username'),
	password: config.get('mysql.password'),
	database: config.get('mysql.database'),
})

module.exports = conexao
