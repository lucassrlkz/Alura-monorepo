const query = require('../infraestrutura/database/queries')
const axios = require('../infraestrutura/database/conection')
class Atendimento {
	adiciona(atendimento) {
		const sql = 'INSERT INTO Atendimentos SET ?'
		return query(sql, atendimento)
	}

	lista() {
		const sql = 'SELECT * FROM Atendimentos'
		return query(sql)
	}

	buscaId(id) {
		const sql = `SELECT * FROM Atendimentos WHERE id=?`

		return query(sql, id, async (erros, resultados) => {
			const atendimento = resultados[0]
			const cpf = atendimento.cliente

			const { data } = await axios.get(`http://localhost:8082/${cpf}`)
			atendimento.cliente = data
		})
	}
	alterar([valores, id]) {
		if (valores.data) {
			valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
		}

		const sql = 'UPDATE Atendimentos SET ? WHERE id=?'
		return query(sql, [valores, id])
	}

	deletar(id) {
		const sql = 'DELETE FROM Atendimentos WHERE id=?'
		return query(sql, id)
	}
}

module.exports = new Atendimento()
