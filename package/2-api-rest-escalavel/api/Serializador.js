const ValorNaoSuportado = require('./erros/ValorNaoSuportado')

class Serializador {
	json(dados) {
		return JSON.stringify(dados)
	}

	serializar(dados) {
		if (this.contentType === 'application/json') return this.json(this.filtrar(dados))

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
	}
}

class SerializadorError extends Serializador {
	constructor(contentType, extras) {
		super()
		this.contentType = contentType
		this.camposPublicos = ['id', 'mensagem'].concat(extras || [])
	}
}
module.exports = {
	Serializador: Serializador,
	SerializadorFornecedor: SerializadorFornecedor,
	SerializadorError: SerializadorError,
	formatosAceitos: ['application/json'],
}
