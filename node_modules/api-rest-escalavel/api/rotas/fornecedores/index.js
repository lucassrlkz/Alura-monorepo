const router = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor')

router.get('/', async (req, res) => {
	const resultados = await TabelaFornecedor.listar()
	res.status(200).send(JSON.stringify(resultados))
})

router.post('/', async (req, res,next) => {
	try {
		const dadosRecebidos = req.body
		const fornecedor = new Fornecedor(dadosRecebidos)
		await fornecedor.criar()
		res.status(201).send(JSON.stringify(fornecedor))
	} catch (error) {
		next(error)
	}
})

router.get('/:idFornecedor', async (req, res, next) => {
	try {
		const id = req.params.idFornecedor
		const fornecedor = new Fornecedor({ id: id })
		await fornecedor.carregar()
		res.status(200).send(JSON.stringify(fornecedor))
	} catch (error) {
		next(error)
	}
})

router.put('/:idFornecedor', async (req, res, next) => {
	try {
		const id = req.params.idFornecedor
		const recebidos = req.body
		const dados = Object.assign({}, recebidos, { id: id })
		const fornecedor = new Fornecedor(dados)
		await fornecedor.atualizar()
		res.end()
	} catch (error) {
		next(error)
	}
	res.end()
})

router.delete('/:idFornecedor', async (req, res, next) => {
	try {
		const id = req.params.idFornecedor
		const fornecedor = new Fornecedor({ id: id })
		await fornecedor.carregar()
		await fornecedor.remover()
		res.status(204).end()
	} catch (error) {
		next(error)
	}
})

module.exports = router
