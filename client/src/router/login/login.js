import './login.css';
import { useHistory } from "react-router-dom"
import React, {useState} from 'react'
import Axios from 'axios'

const Login = () => {
    let history = useHistory()

    //Login
    const [userID, setUserID] = useState('')
    const [password, setPassword] = useState('')

    const authLogin = (res) => {
        let data = res.data
        if(data.length == 0) {
            alert('You are not DBA')
        }
        else{
            localStorage.setItem('accessToken', true)
            history.replace ('/manager')
        }
    }

    const loginSubmit = () => {
        Axios.get('http://localhost:3001/api/user/login/',{
            params:{
                userID: userID,
                password: password
            }
        }).then((res) => authLogin(res) )
    }

    return (
        <div className="LoginForm">
            <div className="Login">
                <h1>Hospital DBA</h1>
                <input type="text" placeholder="Username" onChange={(e) => {setUserID(e.target.value)}}/>
                <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                
                <div>
                    <button onClick={loginSubmit}>LOGIN</button>
                </div>
            </div>
        </div>
    )
}

export default Login
