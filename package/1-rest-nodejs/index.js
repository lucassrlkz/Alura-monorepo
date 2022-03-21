const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/database/conection')
const Tabelas = require('./infraestrutura/database/tabelas')

conexao.connect((err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('tudo certo com o banco de dados')

		Tabelas.init(conexao)
		const app = customExpress()

		app.listen(3000, () => console.log('servidor rodando na porta 3000'))

		app.get('/', (_req, res) => res.send('servidor rodando, tudo certo!'))
	}
})
