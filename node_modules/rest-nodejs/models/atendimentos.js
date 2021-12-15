const { default: axios } = require('axios')
const moment = require('moment')
const conexao = require('../infraestrutura/database/conection')
const repositorio = require('../repositorios/atendimentos')

class Atendimento {
	constructor() {
		this.dataValida = ({ data, dataCriacao }) => moment(data).isSameOrAfter(dataCriacao)
		this.clienteValido = (tamanho) => tamanho >= 5

		this.valida = (params) =>
			this.validacoes.filter((campo) => {
				const { nome } = campo
				const parametro = params[nome]

				return !campo.valido(parametro)
			})

		this.validacoes = [
			{
				nome: 'data',
				valido: this.dataValida,
				mensagem: 'data deve ser maior ou igual a data atual',
			},
			{
				nome: 'cliente',
				valido: this.clienteValido,
				mensagem: 'cliente deve ter pelo menos 5 caracteres',
			},
		]
	}

	adiciona(atendimento) {
		const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
		const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

		const params = {
			data: { data, dataCriacao },
			cliente: { tamanho: atendimento.cliente.length },
		}

		const erros = this.valida(params)
		const existemErros = erros.length

		if (existemErros) {
			return new Promise((resolve, reject) => reject(erros))
		} else {
			const atendimentoDatado = { ...atendimento, dataCriacao, data }

			return repositorio.adiciona(atendimentoDatado).then((resultados) => {
				const id = resultados.insertId
				return { ...atendimento, id }
			})
		}
	}

	lista() {
		return repositorio.lista()
	}

	buscaId(id) {
		return repositorio.buscaId(id)
	}

	alterar([valores, id]) {
		return repositorio.alterar([valores, id])
	}

	deletar(id) {
		return repositorio.deletar(id)
	}
}

module.exports = new Atendimento()
