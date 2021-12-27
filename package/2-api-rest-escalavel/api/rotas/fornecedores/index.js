const router = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor')

router.get('/', async (req, res) => {
	const resultados = await TabelaFornecedor.listar()
	res.status(200).send(JSON.stringify(resultados))
})

router.post('/', async (req, res) => {
	try {
		const dadosRecebidos = req.body
		const fornecedor = new Fornecedor(dadosRecebidos)
		await fornecedor.criar()
		res.status(201).send(JSON.stringify(fornecedor))
	} catch (erro) {
		res.status(400).send(
			JSON.stringify({
				mensagem: erro.message,
			})
		)
	}
})

router.get('/:idFornecedor', async (req, res) => {
	try {
		const id = req.params.idFornecedor
		const fornecedor = new Fornecedor({ id: id })
		await fornecedor.carregar()
		res.status(200).send(JSON.stringify(fornecedor))
	} catch (error) {
		res.status(404).send(
			JSON.stringify({
				mensagem: error.message,
			})
		)
	}
})

router.put('/:idFornceedor', async (req, res) => {
	try {
		const id = req.params.idFornceedor
		const recebidos = req.body
		const dados = Object.assign({}, recebidos, { id: id })
		const fornecedor = new Fornecedor(dados)
		await fornecedor.atualizar()
		res.end()
	} catch (error) {
		res.status(400).send(
			JSON.stringify({
				mensagem: error.message,
			})
		)
	}
	res.end()
})

router.delete('/:idFornecedor', async (req, res) => {
	try {
		const id = req.params.idFornecedor
		const fornecedor = new Fornecedor({ id: id })
		await fornecedor.carregar()
		await fornecedor.remover()
		res.status(204).end()
	} catch (erro) {
		res.status(404).send(
			JSON.stringify({
				mensagem: error.message,
			})
		)
	}
})

module.exports = router
