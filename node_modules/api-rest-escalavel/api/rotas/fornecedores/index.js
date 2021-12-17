const router = require('express').Router()
const TabelaFornecedor = require('./tabelaFornecedor')

router.use('/', async (req, res) => {
	const resultados = await TabelaFornecedor.listar()
	res.send(JSON.stringify(resultados))
})

module.exports = router
