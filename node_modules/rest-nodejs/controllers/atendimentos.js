const Atendimento = require('../models/atendimentos')

module.exports = (app) => {
	app.get('/atendimentos', (req, res) => {
		Atendimento.lista(res)
	})

	app.get('/atendimentos/:id', (req, res) => {
		const id = parseInt(req.params.id)

		Atendimento.buscaId(id, res)
	})

	app.post('/atendimentos', (req, res) => {
		const atendimento = req.body

		Atendimento.adiciona(atendimento, res)
	})

	app.patch('/atendimentos/:id', (req, res) => {
		const id = parseInt(req.params.id)

		const valores = req.body

		Atendimento.alterar(id, valores, res)
	})

	app.delete('/atendimentos/:id', (req, res) => {
		const id = parseInt(req.params.id)

		Atendimento.deletar(id, res)
	})
}
