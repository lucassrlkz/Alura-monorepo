const conexao = require('./conection')

const execQuery = (query, params = '') => {
	return new Promise((resolve, reject) => {
		conexao.query(query, params, (erros, resultados, campos) => {
			if (erros) {
				reject(erros)
			} else {
				resolve(resultados)
			}
		})
	})
}

module.exports = execQuery
