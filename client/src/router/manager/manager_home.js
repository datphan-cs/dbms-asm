import React from 'react'
import { Link } from 'react-router-dom'

import './manager_home.css'

const ManagerHome = () => {
    return(
        <div className='home'>
            <div className = 'userTag'>
                <Link className='user-link' to='/manager/user' Style={{textDecoration:'none'}}>
                    USER
                </Link>
            </div>

            <div className = 'patientTag'>
                <Link className='patient-link' to='/manager/patient'  Style={{textDecoration:'none'}}>
                    PATIENT
                </Link>
            </div>
        </div>
    )
}

export default ManagerHome