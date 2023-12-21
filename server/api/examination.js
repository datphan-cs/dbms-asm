export const selectAll = (req, res, db) => {
	const Pocode = req.query.Pocode
	const sqlSelect = 'SELECT * FROM EXAMINATION WHERE Pocode = ?;'

	db.all(sqlSelect, Pocode,

		(err, result) => {
			if (err) {
				console.log(err)
			} else {
				res.send(result)
			}
		}
	)
}