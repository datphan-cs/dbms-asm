import React, {useState} from "react"
import Axios from 'axios'

import './patientAdd.css'

const PatientAdd = () => {
    const [type, setType] = useState('')
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [DD, setDD] = useState('')
    const [MM, setMM] = useState('')
    const [YYYY, setYYYY] = useState('')
    const [gender, setGender] = useState('')
    const [phone, setPhone] = useState('')

    const addSubmit = () => {
        Axios.post('http://localhost:3001/api/patient/insert', {
            P_type: type,
            P_fname: fname,
            P_lname: lname,
            P_dob: YYYY + '-' + MM + '-' + DD,
            P_gender: gender,
            P_phone: phone,

        }).then((res) => alert('Insert success'))
    }

    return (
        <div className='Login'>
            <h2>Add patient </h2>

            <div>
                <input className='name' type="text" placeholder="First Name" onChange={(e) => setFname(e.target.value)}/>
                <input className='name' type="text" placeholder="Last name" onChange={(e) => setLname(e.target.value)}/>
            </div>

            <div>
                <input className='dob' type="number" placeholder="DD" onChange={(e) => setDD(e.target.value)}/>
                <input className='dob' type="number" placeholder="MM" onChange={(e) => setMM(e.target.value)}/>
                <input className='dob' type="number" placeholder="YYYY" onChange={(e) => setYYYY(e.target.value)}/>
            </div>

            <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
            
            <div className='selectBox' onChange={(e) => setType(e.target.value)}>
                <select>
                    <option>Type of patient?</option>
                    <option value='IP'>Inpatient</option>
                    <option value='OP'>Outpatient</option>
                </select>

                <select onChange={(e) => setGender(e.target.value)}>
                    <option>Gender</option>
                    <option value='M'>Male</option>
                    <option value='F'>Female</option>
                    <option value='O'>Other</option>
                </select>
            </div>
            
            <button onClick = {addSubmit}>ADD</button>
        </div>
    )
}

export default PatientAdd