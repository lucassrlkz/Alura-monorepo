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

		res.set('ETag', produto.versao)
		res.set('Last-Modified', new Date(produto.dataAtualizacao).getTime())
		res.set(
			'Location',
			`/api/fornecedores/${produto.fornecedor}/produtos/${produto.id}`
		)

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
		res.set('ETag', produto.versao)
		res.set('Last-Modified', new Date(produto.dataAtualizacao).getTime())

		res.send(serializador.serializar(produto))
	} catch (error) {
		next(error)
	}
})

router.head('/:idProduto', async (req, res, next) => {
	try {
		const dados = {
			id: req.params.idProduto,
			fornecedor: req.fornecedor.id,
		}
		const produto = new Produto(dados)
		await produto.carregar()

		res.set('ETag', produto.versao)
		res.set('Last-Modified', new Date(produto.dataAtualizacao).getTime())
		res.status(200).end()
	} catch (error) {
		next(error)
	}
})

router.put('/:idProduto', async (req, res, next) => {
	try {
		const dados = {
			...req.body,
			id: req.params.idProduto,
			fornecedor: req.fornecedor.id,
		}
		const produto = new Produto(dados)
		await produto.atualizar()
		await produto.carregar()

		res.set('ETag', produto.versao)
		res.set('Last-Modified', new Date(produto.dataAtualizacao).getTime())

		res.status(204).end()
	} catch (error) {
		next(error)
	}
})

router.post('/:idProduto/diminuir-estoque', async (req, res, next) => {
	try {
		const produto = new Produto({
			id: req.params.idProduto,
			fornecedor: req.fornecedor.id,
		})
		await produto.carregar()
		produto.estoque = produto.estoque - req.body.quantidade
		await produto.diminuirEstoque()
		await produto.carregar()

		res.set('ETag', produto.versao)
		res.set('Last-Modified', new Date(produto.dataAtualizacao).getTime())

		res.status(204).end()
	} catch (error) {
		next(error)
	}
})
module.exports = router
