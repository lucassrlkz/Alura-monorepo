const Atendimento = require('../models/atendimentos')

module.exports = (app) => {
	app.get('/atendimentos', (req, res) => {
		Atendimento.lista()
			.then((resultados) => res.json(resultados))
			.catch((erros) => res.status(400).json(erros))
	})

	app.get('/atendimentos/:id', (req, res) => {
		const id = parseInt(req.params.id)

		Atendimento.buscaId(id)
			.then((atendimento) => res.json(atendimento))
			.catch((erros) => res.status(400).json(erros))
	})

	app.post('/atendimentos', (req, res) => {
		const atendimento = req.body

		Atendimento.adiciona(atendimento)
			.then((atendimentoCadastrado) => res.json(atendimentoCadastrado))
			.catch((erros) => res.status(400).json(erros))
	})

	app.patch('/atendimentos/:id', (req, res) => {
		const id = parseInt(req.params.id)
		const valores = req.body

		Atendimento.alterar([id, valores])
			.then((alterados) => res.json(alterados))
			.catch((erros) => res.status(400).json(erros))
	})

	app.delete('/atendimentos/:id', (req, res) => {
		const id = parseInt(req.params.id)

		Atendimento.deletar(id)
			.then((deletado) => res.json(deletado))
			.catch((erros) => res.status(400).json(erros))
	})
}
