const router = require('express').Router({ mergeParams: true })
const Tabela = require('./tabelaProduto')
const Produto = require('./Produto')
const Serializador = require('../../../Serializador').SerializadorProduto

router.get('/', async (req, res) => {
	const produtos = await Tabela.listar(req.fornecedor.id)
	const serializador = new Serializador(res.getHeader('Content-Type'))

	res.send(serializador.serializar(produtos))
})

router.post('/', async (req, res, next) => {
	try {
		const idFornecedor = req.fornecedor.id
		const body = req.body

		const dados = { ...body, fornecedor: idFornecedor }
		const produto = new Produto(dados)

		await produto.criar(dados)
		const serializador = new Serializador(res.getHeader('Content-Type'))

		res.status(201).send(serializador.serializar(produto))
	} catch (error) {
		next(error)
	}
})

router.delete('/:idProduto', async (req, res) => {
	const dados = {
		fornecedor: req.fornecedor.id,
		id: req.params.idProduto,
	}
	const produto = new Produto(dados)
	await produto.deletar()

	res.status(204).end()
})

router.get('/:idProduto', async (req, res, next) => {
	try {
		const dados = {
			id: req.params.idProduto,
			fornecedor: req.fornecedor.id,
		}
		const produto = new Produto(dados)
		await produto.carregar()
		const serializador = new Serializador(res.getHeader('Content-Type'), [
			'preco',
			'estoque',
			'fornecedor',
			'dataCriacao',
			'dataAtualizacao',
			'versao',
		])

		res.send(serializador.serializar(produto))
	} catch (error) {
		next(error)
	}
})
module.exports = router
