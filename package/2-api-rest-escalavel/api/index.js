const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const router = require('./rotas/fornecedores')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos')

const app = express()
app.use(bodyParser.json())

app.use('/api/fornecedores', router)

app.use((error, req, res, next) => {
	let status = 500

	error instanceof NaoEncontrado
		? (status = 404)
		: error instanceof CampoInvalido || error instanceof DadosNaoFornecidos
		? (status = 400)
		: status

	res.status(status)
	res.send(
		JSON.stringify({
			mensagem: error.message,
			id: error.idErro,
		})
	)
})

app.listen(config.get('api.porta'), () => console.log('Api esta rodando perfeiramente'))
app.get('/', (req, res) => res.send('tudo certo por aqui'))
