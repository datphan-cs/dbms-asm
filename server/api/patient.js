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
	db.get(sqlSelcet, Pcode,

		(err, result) => {
			if (err) {
				console.log(err)
			} else {
				res.send(result)
			}
		}
	)
}

export const selectAllWithStart = (req, res, db) => {
	const Pcode = req.query.Pcode

	const sqlSelect = 'SELECT * FROM patient WHERE Pcode LIKE ?';
	db.all(sqlSelect, Pcode + '%',

		(err, result) => {
			if (err) {
				console.log(err)
			} else {
				res.send(result)
			}
		}
	)
}
// Get all or get all
function getCodeFromDocID(sql, docID, db) {
	let promise = new Promise((resolve, reject) => {
		db.all(sql, [docID],

			(error, result) => {
				if (error) {
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

	const sqlTakePicode = 'SELECT Picode FROM inpatient WHERE Doc_code = ?';
	const sqlTakePocode = 'SELECT Pocode FROM examination WHERE Doc_code = ?';

	const sqlSelect = 'SELECT * FROM patient WHERE Pcode = ?;'

	const piCode = await getCodeFromDocID(sqlTakePicode, docID, db);
	const poCode = await getCodeFromDocID(sqlTakePocode, docID, db);
	const pCodes = piCode.concat(poCode);

	const sendResToFE = async () => {

		const piResult = pCodes.map(async (e) => {
			if (e.Picode) {
				const piValue = await getCodeFromDocID(sqlSelect, e.Picode, db)
				return piValue
			}
			if (e.Pocode) {
				const poValue = await getCodeFromDocID(sqlSelect, e.Pocode, db)
				return poValue
			}
		})

		return Promise.all(piResult)
	}

	res.send(await sendResToFE())
}

export const del = (req, res, db) => {
	const P_code = req.params.P_code

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
	const P_code = req.body.P_code
	const P_lname = req.body.P_lname

	const sqlUpdate = 'UPDATE patient SET P_lname = ? WHERE P_code = ?'
	db.query(sqlUpdate, [P_lname, P_code],

		(err, result) => {
			if (err) {
				console.log(err)
			} else {
				res.send(result)
			}
		})
}