const router = require('express').Router()
const TabelaFornecedor = require('./TabelaFornecedor')
const Fornecedor = require('./Fornecedor')
const SerializadorFornecedor = require('../../Serializador').SerializadorFornecedor

router.get('/', async (req, res) => {
	const resultados = await TabelaFornecedor.listar()
	const serializador = new SerializadorFornecedor(res.getHeader('Content-Type'))
	
	res.status(200).send(serializador.serializar(resultados))
})

router.post('/', async (req, res, next) => {
	try {
		const dadosRecebidos = req.body
		const fornecedor = new Fornecedor(dadosRecebidos)
		await fornecedor.criar()

		const serializador = new SerializadorFornecedor(res.getHeader('Content-Type'))
		res.status(201).send(serializador.serializar(fornecedor))
	} catch (error) {
		next(error)
	}
})

router.get('/:idFornecedor', async (req, res, next) => {
	try {
		const id = req.params.idFornecedor
		const fornecedor = new Fornecedor({ id: id })
		await fornecedor.carregar()

		const serializador = new SerializadorFornecedor(res.getHeader('Content-Type'))
		res.status(200).send(serializador.serializar(fornecedor))
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
		res.status(204).end()
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
