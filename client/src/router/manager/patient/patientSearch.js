import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Axios from "axios"

import './patientSearch.css'

const PatientSearch = () => {

    const [patientList, setPaList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/patient/getAll').then((res) => {
            setPaList(res.data)
        })
    }, [])

    const [searchPaID, setSearchPaID] = useState('')
    const searchWithPaID = () => {
        Axios.get('http://localhost:3001/api/patient/getIDstart', {
            params:{
                Pcode: searchPaID
            }
        }).then((res) => {
            setPaList(res.data)
        })
    }

    const [searchDocID, setSearchDocID] = useState('')
    const searchWithDocID = () => {
        Axios.get('http://localhost:3001/api/patient/getDocIDstart', {
            params:{
                Pcode: searchDocID
            }
        }).then((res) => {
            let Palist = []
            res.data.map((e) => Palist.push(e[0]))
            setPaList(Palist)
        })
    }

    return (
        <div className='patientSearch'>
            <div className='search'>
                <input type="text" placeholder="Search Patient ID" onChange={(e) => {setSearchPaID(e.target.value)}}/>
                <button className='searchButton' onClick={searchWithPaID}>Search</button>
            </div>
        
            <div className='search'>
                <input type="text" placeholder="Search Doctor ID" onChange={(e) => {setSearchDocID(e.target.value)}}/>
                <button className='searchButton' onClick={searchWithDocID}>Search</button>
            </div>

            {patientList.map((val) => {
                return (
                <div className = 'patientList'>
                    <h3>Patient: {val.Pcode}, Name: {val.P_fname + ' ' + val.P_lname}</h3>
                    <button className='detailButton' onClick={ () => {localStorage.setItem('Pcode', val.Pcode)} }>
                        <Link to='/manager/patient/detail'>
                            Detail
                        </Link>
                    </button>
                </div>
                )
            })}
        </div>
    )
}

export default PatientSearch