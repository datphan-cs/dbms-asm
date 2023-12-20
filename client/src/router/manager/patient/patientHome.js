import React from 'react'
import { Link } from 'react-router-dom'

import './patientHome.css'

const PatientHome = () => {

    return(
        <div className='home'>
            <div className = 'patientTagAdd'>
                <Link className='user-link' to='/manager/patient/add'>
                    ADD
                </Link>
            </div>

            <div className = 'patientTagSearch'>
                <Link className='patient-link' to='/manager/patient/search'>
                    SEARCH
                </Link>
            </div>
        </div>
    )
}

export default PatientHome