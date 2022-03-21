const Modelo = require('./modeloTabelaProduto')
const Sequelize = require('../../../database')
const NaoEncontrado = require('../../../erros/NaoEncontrado')

module.exports = {
	listar(idFornecedor) {
		return Modelo.findAll({
			where: {
				fornecedor: idFornecedor,
			},
			raw: true,
		})
	},

	inserir(dados) {
		return Modelo.create(dados)
	},

	remover(idProduto, idFornecedor) {
		return Modelo.destroy({
			where: {
				id: idProduto,
				fornecedor: idFornecedor,
			},
		})
	},

	async pegarPorId(idProduto, idFornecedor) {
		const encontrado = await Modelo.findOne({
			where: {
				id: idProduto,
				fornecedor: idFornecedor,
			},
			raw: true,
		})
		if (!encontrado) throw NaoEncontrado('Produto')
		return encontrado
	},

	atualizar(dadosdoProduto, dadosParaAtualizar) {
		return Modelo.update(dadosParaAtualizar, {
			where: dadosdoProduto,
		})
	},

	subtrair(idProduto, idFornecedor, campo, quantidade) {
		return Sequelize.transaction(async () => {
			const produto = await Modelo.findOne({
				where: {
					id: idProduto,
					fornecedor: idFornecedor,
				},
			})
			produto[campo] = quantidade
			return produto, await produto.save()
		})
	},
}
