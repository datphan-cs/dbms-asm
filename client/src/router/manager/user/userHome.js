import React from 'react'
import { Link } from 'react-router-dom'

import './userHome.css'

const UserHome = () => {

    return(
        <div className='home'>
            <div className = 'userTagAdd'>
                <Link className='user-link' to='/manager/user/add' Style={{textDecoration:'none'}}>
                    ADD
                </Link>
            </div>
        </div>
    )
}

export default UserHome