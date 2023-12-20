import React from 'react'
import {Switch,Route} from "react-router-dom"

import Nav from './nav'
import ManagerHome from './manager_home'
import Patient from './patient/patient'
import User from './user/user'


const Manager = () => {
    return(
      <div>
        <Nav />
        <Switch>
            <Route exact path='/manager'> 
              <ManagerHome />
            </Route>

            <Route path='/manager/home'> 
              <ManagerHome />
            </Route>

            <Route path='/manager/user'> 
              <User />
            </Route>

            <Route path='/manager/patient'> 
              <Patient />
            </Route>
        </Switch>
      </div>
    )
}

export default Manager