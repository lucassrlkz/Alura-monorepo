const Modelo = require('./ModeloTabelaFornecedor')
const NaoEncontrado = require('../../erros/NaoEncontrado');

module.exports = {
	listar() {
		return Modelo.findAll()
	},

	inserir(fornecedor) {
		return Modelo.create(fornecedor)
	},

	async pegarPorId(id) {
		const encontrado = await Modelo.findOne({
			where: { id: id },
		})
		if (!encontrado) {
			throw new NaoEncontrado()
		}

		return encontrado
	},

	async atualizar(id, atualizar) {
		return Modelo.update(atualizar, {
			where: { id: id }
		})
	},

	remover(id) {
		return Modelo.destroy({
			where: { id: id },
		})
	},
}
