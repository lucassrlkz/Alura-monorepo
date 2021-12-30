const mysql = require('mysql')
const config = require('config');

const conexao = mysql.createConnection({
	host: config.get('mysql.host'),
	port: config.get('mysql.port'),
	user: config.get('mysql.user'),
	password: config.get('mysql.root'),
	database: config.get('mysql.database'),
})

module.exports = conexao
