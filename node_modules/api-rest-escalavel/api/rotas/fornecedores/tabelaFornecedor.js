const Modelo = require('./modeloTabelaFornecedor')

module.exports = {
	listar() {
		return Modelo.findAll()
	},
}
