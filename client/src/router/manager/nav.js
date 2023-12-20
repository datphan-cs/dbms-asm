import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import './nav.css'
const Nav = () => {
    const history = useHistory()

    const logOut = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('Pcode')
        history.replace('/')
    }
    
    return(
        <div className='navBar'>
            <Link className='nav-links' to='/manager/home'>
                Home
            </Link>     

            <button className='logout' onClick={logOut}>LogOut</button>
        </div>
    )
}

export default Nav