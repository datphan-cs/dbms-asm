export const insert = (req, res, db) => {
	const code = req.body.code
	const lname = req.body.lname

	const sqlInsert = "INSERT INTO employee VALUES (?, ?);"
	db.run(sqlInsert, [code, lname], (err) => {
		if (err) {
			console.log(err)
		} else {
			res.send('New Employee Added')
		}
	})
}