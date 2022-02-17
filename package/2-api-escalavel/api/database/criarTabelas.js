const modelos = [
	require('../rotas/fornecedores/modeloTabelaFornecedor'),
	require('../rotas/fornecedores/produtos/modeloTabelaProduto'),
]

// * cria tabelas no banco de dados com base nos modelos das tabelas
// TODO: esse método foi refatorado para um loop foreach

function criarTabelas() {
	modelos.forEach((modelo) => {
		modelo.sync()
	})
}
criarTabelas()
