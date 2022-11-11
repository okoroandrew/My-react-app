import axios from "axios"

const apiURL = process.env.REACT_APP_API_URL

export const getProfile=async()=>{
    const getUser=await axios.get(`${apiURL}/users/profile`)
    return getUser.data        
}

export const postProfile=async(name, bio)=>{
    const newUser=await axios.put(`${apiURL}/users/update-user`, {name, bio})
    return newUser.data        
}

const options = {
  method: 'GET',
  url: 'https://extract-news.p.rapidapi.com/v0/article',
  params: {
    url: 'https://www.theverge.com/2020/4/17/21224728/bill-gates-coronavirus-lies-5g-covid-19'
  },
  headers: {
    'X-RapidAPI-Key': 'fc8c2380famsh149a45591b6692ap1ef721jsn2588205a9da0',
    'X-RapidAPI-Host': 'extract-news.p.rapidapi.com'
  }
};


export const getNews=async()=>{
    const news = await axios.request(options)
    return news.data
}

export const signup = async (user) => {
  const signedUpUser = await axios.post(`${apiURL}/users/signup`, user)
  return signedUpUser.data
}

export const login = async (user) => {
  const loggedInUser = await axios.post(`${apiURL}/users/login`, user)
  return loggedInUser.data
}

export const getUsers = async () => {
  const allUsers = await axios.get(`${apiURL}/users/get-users`)
  return allUsers.data
}