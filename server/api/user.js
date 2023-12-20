export const login = (req, res, db) => {
	const id = req.query.userID
	const password = req.query.password

	const sql_statement = 'SELECT userType FROM user_table WHERE id = ? AND password = ?;'
	db.get(sql_statement, [id, password], (err, result) => {
		if (err) {
			console.log(err)
		} else {
			res.send(result)
		}
	})
}

export const signup = (req, res, db) => {
	const userID = req.body.userID
	const password = req.body.password
	const sqlInsertUser = 'INSERT INTO user_table VALUES (?, ?, 1);'
	db.run(sqlInsertUser, [userID, password], (err) => {
		if (err) {
			console.log(err)
		}
		res.sendStatus(200)
	})
}