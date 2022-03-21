const mysql = require('mysql')
<<<<<<< HEAD
const config = require('config');
=======
const config = require('config')
>>>>>>> dev

const conexao = mysql.createConnection({
	host: config.get('mysql.host'),
	port: config.get('mysql.port'),
<<<<<<< HEAD
	user: config.get('mysql.user'),
	password: config.get('mysql.root'),
=======
	user: config.get('mysql.username'),
	password: config.get('mysql.password'),
>>>>>>> dev
	database: config.get('mysql.database'),
})

module.exports = conexao
