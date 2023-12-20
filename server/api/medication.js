export const insert = (req, res, db) => {
	const P_code = req.body.P_code
	const P_lname = req.body.P_lname

	const sqlInsert = 'INSERT INTO medication VALUES (?, ?);'
	db.run(sqlInsert, [P_code, P_lname],
		(err) => {
			if (err) {
				console.log(err)
			} else {
				// res.send(result)
				res.sendStatus(200)
			}
		}
	)
}

export const selectAll = (req, res, db) => {
	const sqlSelcet = 'SELECT * FROM medication;'

	db.all(sqlSelcet,

		(err, result) => {
			if (err) {
				console.log(err)
			} else {
				res.send(result)
			}
		}
	)
}

export const selectOne = (req, res, db) => {
	const Mcode = req.query.Mcode

	const sqlSelect = 'SELECT * FROM medication WHERE Mcode = ?;'
	db.get(sqlSelect, Mcode, (err, result) => {
		if (err) {
			console.log(err)
		} else {
			res.send(result)
		}
	})
}

export const del = (req, res, db) => {
	const P_code = req.params.P_code

	const sqlDelete = 'DELETE FROM medication WHERE P_code = ?'
	db.run(sqlDelete, P_code,

		(err) => {
			if (err) {
				console.log(err)
			} else {
				// res.send(result)
				res.sendStatus(200)
			}
		}
	)
}

export const update = (req, res, db) => {
	const P_code = req.body.P_code
	const P_lname = req.body.P_lname

	const sqlUpdate = 'UPDATE medication SET P_lname = ? WHERE P_code = ?'
	db.query(sqlUpdate, [P_lname, P_code],

		(err, result) => {
			if (err) {
				console.log(err)
			} else {
				res.send(result)
			}
		})
}