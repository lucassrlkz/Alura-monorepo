const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')
const router = require('./rotas/fornecedores')

const app = express()
app.use(bodyParser.json())

app.listen(config.get('api.porta'), () => console.log('Api esta rodando perfeiramente'))

app.use('/api/fornecedores', router)

app.get('/', (req, res) => res.send('tudo certo por aqui'))
