import React from "react"
import {Switch, Route, Link} from "react-router-dom"

import UserAdd from './userAdd'
import UserHome from "./userHome"

const User = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/manager/user'> 
                    <UserHome />
                </Route>

                <Route path='/manager/user/add'> 
                    <UserAdd />
                </Route>
            </Switch>
        </div>
    )
}

export default User