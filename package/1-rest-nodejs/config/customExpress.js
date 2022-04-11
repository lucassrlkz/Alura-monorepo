const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
<<<<<<< HEAD
 
module.exports = () => {
 const app = express()
 
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: true }))
 
 consign()
   .include('controllers')
   .into(app)
 
 return app
}
=======

module.exports = () => {
	const app = express()

	app.use(bodyParser.json())

	consign().include('controllers').into(app)

	return app
}
>>>>>>> origin/dev
