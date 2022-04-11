const Pet = require('../models/pets')

<<<<<<< HEAD
module.exports = app => {
    app.post('/pet', (req, res) => {
        const pet = req.body

        Pet.adiciona(pet, res)
    })
=======
module.exports = (app) => {
	app.post('/pet', (req, res) => {
		const pet = req.body

		Pet.adiciona(pet, res)
	})
>>>>>>> origin/dev
}
