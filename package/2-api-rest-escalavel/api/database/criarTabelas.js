const modelos = [
	require('../rotas/fornecedores/modeloTabelaFornecedor'),
	require('../rotas/fornecedores/produtos/modeloTabelaProduto'),
]

async function criarTabelas() {
	modelos.forEach((modelo) => {
		await modelo.sync()
	})
}
// async function criarTabelas() {
// 	for (let contador = 0; contador < modelos.length; contador++) {
// 		const modelo = modelos[contador]
// 		await modelo.sync()
// 	}
// }
criarTabelas()
