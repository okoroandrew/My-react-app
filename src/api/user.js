import axios from "axios"

export const getProfile=async()=>{
    const getUser=await axios.get("http://localhost:3000/users/profile")
    return getUser.data        
}

export const postProfile=async(name, biography)=>{
    const newUser=await axios.post("http://localhost:3000/users/profile", {name, biography})
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