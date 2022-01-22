const Sequelize = require('sequelize')
const newSequelize = require('../../../database')

const colunas = {
	titulo: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	preco: {
		type: Sequelize.DOUBLE,
		allowNull: false,
	},
	estoque: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 0,
	},
	fornecedor: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: require('../modeloTabelaFornecedor'),
			key: 'id',
		},
	},
}

const opcoes = {
	freezeTableName: true,
	tableName: 'produtos',
	timestamps: true,
	createdAt: 'dataCriacao',
	updatedAt: 'dataAtualizacao',
	version: 'versao',
}

module.exports = newSequelize.define('produto', colunas, opcoes)
