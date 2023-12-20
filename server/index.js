import express from 'express'
import cors from 'cors'
import sqlite3 from 'sqlite3'

const app = express()

import * as user from './api/user.js'
import * as employee from './api/employee.js'
import * as patient from './api/patient.js'
import * as outpatient from './api/out_patient.js'
import * as inpatient from './api/in_patient.js'
import * as examination from './api/examination.js'
import * as treatment from './api/treatment.js'
import * as medication from './api/medication.js'


// const db = sqlite3.createPool({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'tienphat1719',
// 	database: 'hospital'
// })
const db = new sqlite3.Database('../hospital.db', (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log('Connected to the hospital database.');
});
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
	extended: true
}))

//user
app.get('/api/user/login', (req, res) => {
	user.login(req, res, db)
})
app.post('/api/user/signup', (req, res) => {
	user.signup(req, res, db)
})

//employee
app.post('/api/employee/insert', (req, res) => {
	employee.insert(req, res, db)
})

//nurse
//doctor

//department


//patient
app.post('/api/patient/insert', (req, res) => {
	patient.insert(req, res, db)
})
app.get('/api/patient/getAll', (req, res) => {
	patient.selectAll(req, res, db)
})
app.get('/api/patient/getOne', (req, res) => {
	patient.selectOne(req, res, db)
})
app.get('/api/patient/getIDstart', (req, res) => {
	patient.selectAllWithStart(req, res, db)
})
app.get('/api/patient/getDocIDstart', (req, res) => {
	patient.getInPatientIDFromDocID(req, res, db)
})
app.delete('/api/patient/delete/:Pcode', (req, res) => {
	patient.del(req, res, db)
})
app.put('/api/patient/update', (req, res) => {
	patient.update(req, res, db)
})

//outpatient
app.get('/api/outpatient/getAll', (req, res) => {
	outpatient.selectAll(req, res, db)
})
//examination
app.get('/api/examination/getAll', (req, res) => {
	examination.selectAll(req, res, db)
})
//e_contain

//inpatient
app.get('/api/inpatient/getOne', (req, res) => {
	inpatient.selectOne(req, res, db)
})
//treatment
app.get('/api/treatment/getAll', (req, res) => {
	treatment.selectAll(req, res, db)
})
//t_contain

//medication
// app.post('/api/medication/insert', (req, res) => { medication.insert(req, res, db) })
// app.get('/api/medication/getAll', (req, res) => { medication.selectAll(req, res, db) })
// app.get('/api/medication/getOne', (req, res) => { medication.selectOne(req, res, db) })
// app.delete('/api/medication/delete/:P_code', (req, res) => { medication.del(req, res, db) })
// app.put('/api/medication/update', (req, res) => { medication.update(req, res, db)} )

//provider

app.listen(3001, () => {
	console.log('Running on port 3001')
})