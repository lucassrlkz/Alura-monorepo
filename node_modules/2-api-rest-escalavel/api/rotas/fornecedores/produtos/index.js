const router = require('express').Router({mergeParams: true})
const Tabela = require('./tabelaProduto')

router.get('/', async (req, res)=>{
    const produtos = await Tabela.listar(req.params.idFornecedor)
    res.send(produtos)
})

module.exports = router