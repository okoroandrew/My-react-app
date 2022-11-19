import React, { useState } from "react";
import {login} from '../api/user'
import { setAuthToken } from '../utils/setAuthToken'
import {useNavigate} from 'react-router-dom'

export default function Login(props) {
    const navigate = useNavigate()

    const [user, setUser] = useState({email: "", password: ""})

    const loginUser =async (event) => {
        event.preventDefault()
        try{
            const authUser = await login(user)
            await localStorage.setItem('@authToken', authUser.token)
            await localStorage.setItem('@user', JSON.stringify(authUser.user))
            setAuthToken(authUser.token)
            navigate('/')
            console.log("this function is meant to login the user", authUser)
        }catch(e) {
            alert(e.message)
        }
       
    }

    return(
        <div class="col-md-12 signup_login-tag">
            <div class="topnav">
                <a class="active" href="/">Profiles</a>
                <a href="/login">Login</a>
                <a href="/signup">SignUp</a>
            </div> 
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={(e)=> loginUser(e)}>
                <div class="form-group">
                    <label class="sr-only" for="name">Email:</label>
                    <input onChange={(e)=>setUser({...user, email: e.target.value})} class="form-control custom_input_signup"/>
                </div>
                <div class="form-group">
                    <label class="sr-only" for="name">Password:</label>
                    <input onChange={(e)=>setUser({...user, password: e.target.value})} type='password' class="form-control custom_input_signup"/>
                </div>
                <button type="submit" id= "custom_btn1" class="btn btn-default">Login</button>
            </form>

        </div>
    )
}