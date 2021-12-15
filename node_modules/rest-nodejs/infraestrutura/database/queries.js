const conexao = require('./conection')

const execQuery = (query, params = '') => {
	return new Promisse((resolve, reject) => {
		conexao.query(query, params, (erros, resultados, campos) => {
			if (erros) {
				reject(erros)
			} else {
				resolve(resultados)
			}
		})
	})
}

module.exports = execQuery()
