import Header from "./Header"
import {useNavigate} from 'react-router-dom'
import React, {useEffect } from 'react'

function Login() {

    const history = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('user-info')) {
            history("./add")
        }
    },[]
    )
    return (
        <div>
            <Header />
            <div>
                <h1>Login Page</h1>
            </div>
        </div>
    )
}

export default Login