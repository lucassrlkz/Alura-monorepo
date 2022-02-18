const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const router = require('./rotas/fornecedores')
const NaoEncontrado = require('./erros/NaoEncontrado')
const CampoInvalido = require('./erros/CampoInvalido')
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos')
const ValorNaoSuportado = require('./erros/ValorNaoSuportado')
const formatosAceitos = require('./Serializador').formatosAceitos
const SerializadorError = require('./Serializador').SerializadorError
const Cors = require('cors')

const app = express()
app.use(bodyParser.json())

app.use((req, res, next) => {
	let formatoRequisitado = req.header('Accept')

	if (formatoRequisitado === '*/*') formatoRequisitado = 'application/json'

	if (formatosAceitos.indexOf(formatoRequisitado) === -1) {
		res.status(406).end()
		return
	}

	res.setHeader('Content-Type', formatoRequisitado)

	next()
})
app.use(Cors())
app.use('/api/fornecedores', router)

app.use((error, req, res, next) => {
	let status = 500

	error instanceof NaoEncontrado
		? (status = 404)
		: error instanceof CampoInvalido || error instanceof DadosNaoFornecidos
		? (status = 400)
		: error instanceof ValorNaoSuportado
		? (status = 406)
		: status

	const serializador = new SerializadorError(res.getHeader('content-Type'))
	res.status(status).send(
		serializador.serializar({
			mensagem: error.message,
			id: error.idErro,
		})
	)
})

app.listen(config.get('api.porta'), () =>
	console.log('Api esta rodando perfeiramente')
)
app.get('/', (req, res) => res.send('tudo certo por aqui'))
