import React, { useState } from 'react'

function Register() {

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userEmail, setUserEmail] = useState("");

    async function userRegistration() {
        let userDetails = {userName, userPassword, userEmail}
        console.log("userDetails:", userDetails)

        let apiResponse = await fetch("http://localhost:8088/user/process", {
            method:'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(userDetails)
        });
        apiResponse = await apiResponse;
        console.log("api response:",apiResponse)
        localStorage.setItem("user-info",JSON.stringify(apiResponse))
    }

    return (
        <div className='col-sm-6 offset-sm-3'>
            <h1>User Sign Up</h1>
            <input type="text" placeholder="User Name" className='form-control' 
            value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <br />
            <input type="text" placeholder="User Password" className='form-control' 
            value={userPassword} onChange={(e) => setUserPassword(e.target.value)}/>
            <br />
            <input type="text" placeholder="User Email" className='form-control' 
            value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            <br />
            <button onClick={userRegistration} className='btn btn-primary'>Sign Up</button>
        </div>
    )
}

export default Register;