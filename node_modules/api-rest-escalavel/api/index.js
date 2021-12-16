const express = require('express')
const config = require('config')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.listen(config.get('api.porta'), () => console.log('Api esta rodando perfeiramente'))

app.get('/', (req, res) => res.send('tudo certo por aqui'))
