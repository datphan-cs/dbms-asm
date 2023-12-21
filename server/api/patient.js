export const insert = (req, res, db) => {
	const P_type = req.body.P_type
	const P_fname = req.body.P_fname
	const P_lname = req.body.P_lname
	const P_dob = req.body.P_dob
	const P_gender = req.body.P_gender
	const P_phone = req.body.P_phone

	const sqlInsert = 'INSERT INTO patient (P_Type,P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES (?, ?, ?, ?, ?, ?);'
	db.run(sqlInsert, [P_type, P_fname, P_lname, P_dob, P_gender, P_phone],

		(err, ) => {
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
	const sqlSelcet = 'SELECT * FROM patient;'

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
	const Pcode = req.query.Pcode

	const sqlSelcet = 'SELECT * FROM patient WHERE Pcode = ?;'
	db.all(sqlSelcet, Pcode,

		(err, result) => {
			if (err) {
				console.log(err)
			} else {
				// console.log(result)
				res.send(result)
			}
		}
	)
}

export const selectAllWithStart = (req, res, db) => {
	const Pcode = req.query.Pcode

	const sqlSelect = 'SELECT * FROM patient WHERE Pcode = ?';
	db.all(sqlSelect, Pcode,

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
// Get all or get all
function getCodeFromDocID(sql, docID, db) {
	let promise = new Promise((resolve, reject) => {
		db.all(sql, [docID],

			(err, result) => {
				if (err) {
					console.log(err);
				} else {
					resolve(result);
				}
			}
		)
	})
	return promise
}

export const getInPatientIDFromDocID = async (req, res, db) => {
	const docID = req.query.Pcode;
	console.log(req.query)


	const sqlSelect = 'SELECT * FROM patient WHERE Pcode IN (SELECT Picode FROM inpatient WHERE Doc_code = ?);'
	const sqlSelect2 = 'SELECT Count(Pcode) as Total FROM patient WHERE Pcode IN (SELECT Picode FROM inpatient WHERE Doc_code = ?);'
	db.all(sqlSelect, [docID], (err, result1) => {
		if (err) {
			console.log(err);
		} else {
			db.get(sqlSelect2, docID, (err, result2) => {
				if (err) {
					console.log(err)
				} else {
					const responses = {
						query: result1,
						total: result2
					}
					console.log(responses)
					res.send(responses)
				}
			})

		}
	})

	// console.log(res1)

	// console.log(result.result)
	// res.send(result)
	// const piCode = await getCodeFromDocID(sqlTakePicode, docID, db);

	// const poCode = await getCodeFromDocID(sqlTakePocode, docID, db);
	// const pCodes = piCode.concat(poCode);

	// const sendResToFE = async () => {

	// 	const piResult = pCodes.map(async (e) => {
	// 		if (e.Picode) {
	// 			const piValue = await getCodeFromDocID(sqlSelect, e.Picode, db)

	// 			return piValue
	// 		}
	// 		if (e.Pocode) {
	// 			const poValue = await getCodeFromDocID(sqlSelect, e.Pocode, db)
	// 			return poValue
	// 		}
	// 	})

	// 	return Promise.all(piResult)
	// }
	// const result = await sendResToFE()
	// console.log(`The final result is ${result[0]}`)
	// res.send(result)
}

export const del = (req, res, db) => {

	const P_code = req.query.P_code
	// console.log(P_code)
	const sqlDelete = 'DELETE FROM patient WHERE Pcode = ?'
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
	const P_code = req.query.P_code
	const P_lname = req.query.P_lname
	console.log(req.query)
	// console.log(P_code)
	const sqlUpdate = 'UPDATE patient SET P_lname = ? WHERE Pcode = ?'
	db.run(sqlUpdate, [P_lname, P_code],

		(err) => {
			if (err) {
				console.log(err)
			} else {
				res.sendStatus(200)
				// res.send(result)
			}
		})
}