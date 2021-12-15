const query = require('../infraestrutura/database/queries')

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
		const sql = `SELECT * FROM Atendimentos WHERE id =${id}`
		return query(sql, id)
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
