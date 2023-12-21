export const selectOne = (req, res, db) => {
	const Pcode = req.query.Pcode

	const sqlSelcet = 'SELECT * FROM inpatient JOIN patient ON inpatient.Picode = patient.Pcode WHERE Picode = ?;'
	db.all(sqlSelcet, Pcode,

		(err, result) => {
			if (err) {
				console.log(err)
			} else {
				console.log(result)
				res.send(result)
			}
		}
	)
}