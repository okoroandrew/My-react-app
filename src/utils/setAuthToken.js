import axios from "axios"

export function setAuthToken(token) {
    if(token) {
        axios.defaults.headers.common['Authorization']= `bearer ${token}`
    }else{
        axios.defaults.headers.common['Authorization']= null
    }
}
