const router = require('express').Router({ mergeParams: true })
const Tabela = require('./tabelaProduto')
const Produto = require('./Produto')

router.get('/', async (req, res) => {
	const produtos = await Tabela.listar(req.fornecedor.id)
	res.send(produtos)
})

router.post('/', async (req, res, next) => {
	try {
        const idFornecedor = req.fornecedor.id
        const body = req.body

        const dados = { ...body, fornecedor: idFornecedor }
        const produto = new Produto(dados)

        await produto.criar(dados)

        res.status(201).send(produto)
    } catch (error) {
        next(error)
    }
})

router.delete('/:idProduto', async (req, res) => {
	const dados = {
        fornecedor: req.fornecedor.id,
        id: req.params.idProduto
    }
    const produto = new Produto(dados)
    await produto.deletar()

    res.status(204).end()
})
module.exports = router
