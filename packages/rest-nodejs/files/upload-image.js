const fs = require('fs')

fs.createReadStream('./assets/purple-sky.jpg')
	.pipe(fs.createWriteStream('./assets/purple-sky-stream.jpg'))
	.on('finish', () => console.log('Imagem foi escrita com sucesso'))
