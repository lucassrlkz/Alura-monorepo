const ValorNaoSuportado = require('./erros/ValorNaoSuportado')
const jsontoxml = require('jsontoxml')

class Serializador {
	json(dados) {
		return JSON.stringify(dados)
	}

	xml(dados) {
		let tag = this.tagSingular

		if (Array.isArray(dados)) {
			tag = this.tagPlural
			dados = dados.map((item) => {
				return {
					[this.tagSingular]: item,
				}
			})
		}

		return jsontoxml({ [tag]: dados })
	}

	serializar(dados) {
		dados = this.filtrar(dados)
		if (this.contentType === 'application/json') return this.json(dados)

		if (this.contentType === 'application/xml') return this.xml(dados)

		throw new ValorNaoSuportado(this.contentType)
	}

	filtrarObjeto(dados) {
		const novoObjeto = {}

		this.camposPublicos.forEach((campo) => {
			if (dados.hasOwnProperty(campo)) novoObjeto[campo] = dados[campo]
		})
		return novoObjeto
	}

	filtrar(dados) {
		Array.isArray(dados) ? (dados = dados.map((item) => this.filtrarObjeto(item))) : (dados = this.filtrarObjeto(dados))

		return dados
	}
}

class SerializadorFornecedor extends Serializador {
	constructor(contentType, extras) {
		super()
		this.contentType = contentType
		this.camposPublicos = ['id', 'empresa', 'categoria'].concat(extras || [])
		this.tagSingular = 'fornecedor'
		this.tagPlural = 'fornecedores'
	}
}

class SerializadorError extends Serializador {
	constructor(contentType, extras) {
		super()
		this.contentType = contentType
		this.camposPublicos = ['id', 'mensagem'].concat(extras || [])
		this.tagSingular = 'error'
		this.tagPlural = 'errorS'
	}
}
module.exports = {
	Serializador: Serializador,
	SerializadorFornecedor: SerializadorFornecedor,
	SerializadorError: SerializadorError,
	formatosAceitos: ['application/json', 'application/xml'],
}
