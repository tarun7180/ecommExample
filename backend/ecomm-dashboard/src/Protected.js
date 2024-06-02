import Header from "./Header"
import {useNavigate} from 'react-router-dom'
import React, {useEffect } from 'react'

function Protected(props) {
    let Cmp = props.Cmp
    const history = useNavigate();
    useEffect(() => {
        if(!localStorage.getItem('user-info')) {
            history("./login")
        }
    },[]
    )
    return (
        <div>
            <div>
                <Cmp />
            </div>
        </div>
    )
}

export default Protected