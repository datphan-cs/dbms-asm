export const selectAll = (req, res, db) => {
	const Pocode = req.query.Pocode
	const sqlSelcet = 'SELECT * FROM EXAMINATION WHERE Pocode = ?;'

	db.all(sqlSelcet, Pocode,

		(err, result) => {
			if (err) {
				console.log(err)
			} else {
				res.send(result)
			}
		}
	)
}