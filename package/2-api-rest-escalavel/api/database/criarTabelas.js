const modeloTabela = require('../rotas/fornecedores/modeloTabelaFornecedor')

modeloTabela
	.sync()
	.then(() => console.log('Tabela criada com sucesso'))
	.catch(console.log)
