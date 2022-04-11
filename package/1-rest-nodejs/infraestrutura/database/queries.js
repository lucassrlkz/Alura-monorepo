<<<<<<< HEAD
const conexao = require('./conexao')

const executaQuery = (query, parametros = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, (erros, resultados, campos) => {
            if (erros) {
                reject(erros)
            } else {
                resolve(resultados)
            }
        })
    })
}

module.exports = executaQuery
=======
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
>>>>>>> origin/dev
