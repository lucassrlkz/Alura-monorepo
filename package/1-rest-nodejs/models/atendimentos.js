const moment = require('moment')
<<<<<<< HEAD
const axios = require('axios')
const conexao = require('../infraestrutura/database/conexao')
const repositorio = require('../repositorios/atendimento')

class Atendimento {
    constructor() {
        this.dataEhValida = ({ data, dataCriacao }) =>
            moment(data).isSameOrAfter(dataCriacao)
        this.clienteEhValido = tamanho => tamanho >= 5

        this.valida = parametros =>
            this.validacoes.filter(campo => {
                const { nome } = campo
                const parametro = parametros[nome]

                return !campo.valido(parametro)
            })

        this.validacoes = [
            {
                nome: 'data',
                valido: this.dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: this.clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]
    }

    adiciona(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format(
            'YYYY-MM-DD HH:MM:SS'
        )

        const parametros = {
            data: { data, dataCriacao },
            cliente: { tamanho: atendimento.cliente.length }
        }

        const erros = this.valida(parametros)
        const existemErros = erros.length

        if (existemErros) {
            return new Promise((resolve, reject) => reject(erros))
        } else {
            const atendimentoDatado = { ...atendimento, dataCriacao, data }

            return repositorio.adiciona(atendimentoDatado).then(resultados => {
                const id = resultados.insertId
                return { ...atendimento, id }
            })
        }
    }

    lista() {
        return repositorio.lista()
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        conexao.query(sql, async (erro, resultados) => {
            const atendimento = resultados[0]
            const cpf = atendimento.cliente
            if (erro) {
                res.status(400).json(erro)
            } else {
                const { data } = await axios.get(`http://localhost:8082/${cpf}`)

                atendimento.cliente = data

                res.status(200).json(atendimento)
            }
        })
    }

    altera(id, valores, res) {
        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format(
                'YYYY-MM-DD HH:MM:SS'
            )
        }
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ ...valores, id })
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ id })
            }
        })
    }
=======

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

	alterar([id, valores]) {
		return repositorio.alterar([valores, id])
	}

	deletar(id) {
		return repositorio.deletar(id)
	}
>>>>>>> origin/dev
}

module.exports = new Atendimento()
