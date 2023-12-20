export const selectAll = (req, res, db) => {
	const sqlSelect = 'SELECT * FROM OUTPATIENT;'

	db.all(sqlSelect,

		(err, result) => {
			if (err) {
				console.log(err)
			} else {
				res.send(result)
			}
		}
	)
}