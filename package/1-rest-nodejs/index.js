const customExpress = require('./config/customExpress')
<<<<<<< HEAD
const conexao = require('./infraestrutura/database/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')

        Tabelas.init(conexao)

        const app = customExpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
=======
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
>>>>>>> origin/dev
})
