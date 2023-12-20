import React, {useState, useEffect} from 'react'
import {Switch,Route,Link, Redirect} from "react-router-dom"
import Axios from 'axios'

import PatientHome from './patientHome'
import PatientAdd from './patientAdd'
import PatientSearch from './patientSearch'
import PatientDetail from './patientDetail'


const Patient = () => {

    // const [newLname, setNewLname] = useState('')

    // const [patientList, setPaList] = useState([])

    // useEffect(() => {
    //     Axios.get('http://localhost:3001/api/patient/getAll').then((res) => {
    //     setPaList(res.data)
    //     })
    // }, [])

    // const deleteButton = (P_code) => {
    //     Axios.delete(`http://localhost:3001/api/patient/delete/${P_code}`).then(() => {alert('del success')})
    // }

    // const updateButton = (P_code) => {
    //     Axios.put('http://localhost:3001/api/patient/update', {
    //     P_code: P_code,
    //     P_lname: newLname,

    //     }).then(() => {alert('update success')})
    // }

    // const [searchPatient, setSearchPatient] = useState('')

    return(
        <div className='managerPatient'>
            <Switch>
                <Route exact path='/manager/patient'>
                    <PatientHome />
                </Route>

                <Route path='/manager/patient/add'>
                    <PatientAdd />
                </Route>

                <Route path='/manager/patient/search'>
                    <PatientSearch />
                </Route>

                <Route path='/manager/patient/detail'>
                    <PatientDetail/>
                </Route>
            </Switch>
        </div>

    )
}

export default Patient