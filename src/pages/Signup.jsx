import React, { useState } from "react";
import {signup} from '../api/user'
import { setAuthToken } from '../utils/setAuthToken'
import {useNavigate} from 'react-router-dom'

export default function Signup(props) {
    const navigate = useNavigate()

    const [user, setUser] = useState({name: "", email: "", password: "", bio: ""})

    const signupUser =async (event) => {
        event.preventDefault()
        try{
            const authUser = await signup(user)
            await localStorage.setItem('@authToken', authUser.token)
            await localStorage.setItem('@user', JSON.stringify(authUser.user))
            setAuthToken(authUser.token)
            navigate('/')
        }catch(e) {
            alert(e.message)
        }
       
    }

    return(
        <div class="col-md-4 signup_login-tag">
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={(e)=> signupUser(e)}>
                <div class="form-group">
                    <label class="sr-only" for="name">Full Name:</label>
                    <input onChange={(e)=>setUser({...user, name: e.target.value})} class="form-control custom_input"/>
                </div>
                <div class="form-group">
                    <label class="sr-only" for="name">Email:</label>
                    <input onChange={(e)=>setUser({...user, email: e.target.value})} class="form-control custom_input"/>
                </div>
                <div class="form-group">
                    <label class="sr-only" for="name">Password:</label>
                    <input onChange={(e)=>setUser({...user, password: e.target.value})} class="form-control custom_input"/>
                </div>
                <div class="form-group">
                    <label class="sr-only" for="Biography">Biography</label>
                    <textarea onChange={(e)=>setUser({...user, bio: e.target.value})} class="form-control custom_input" placeholder="Please Enter you biography"></textarea>
                </div>
                <button type="submit" id= "custom_btn1" class="btn btn-default">Signup</button>
            </form>
        </div>
    ) 
}