import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import { setAuthToken } from './utils/setAuthToken'

( async ()=>{
    const authToken =  await localStorage.getItem('@authToken')
    if(authToken) setAuthToken(authToken)
})()

export default function App() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<Home/>}/>
                <Route path="login" element = {<Login/>}/>
                <Route path="signup" element = {<Signup/>}/>
            </Routes>
        </BrowserRouter>
    )
}