import React, {useState, useEffect} from "react"
import "./App.css"
import zendaya from "./zendaya.jpeg"
import 'bootstrap/dist/css/bootstrap.css';
import UserForm from "./components/UserForm";
import {getProfile, postProfile, getNews} from "./api/user"

function Home() {
    const [user, setUser]= useState({name: "", biography: ""})
    const [news, setNews]= useState("")
    const updateProfile =async(event)=>{
        event.preventDefault()
        const name = event.target.name.value
        const bio = event.target.biography.value
        const profile = await postProfile(name, bio)
        setUser(profile.user)
    }

    const userResponse=async()=>{
        const profile = await getProfile()
        setUser(profile.user)
    }

    const newsResponse=async()=>{
        const newsData = await getNews()
        setNews(newsData.article.text)
        console.log(newsData)
    }

    useEffect(()=>{
        userResponse()
        newsResponse()
    }, [])   

    return (

    <div>
        <div class="row">
            <div class="col-sm-4">
                <div class = "img-tag">
                    <img src={zendaya} alt = "Kosi's image should be here"/>
                </div>    
            </div>
            <div class="col-sm-8 bio-tag">
                <h1>{user?.name}</h1>
                <div class ="biography">
                    <p>
                       {user?.biography}
                    </p>
                </div>
            </div>
  
        </div>

        <div class = "row">
            <div class="col-md-6">
                <UserForm updateProfile={updateProfile}/>
            </div>
            <div class="col-md-12">
                <p>{news}</p>
            </div>
        </div>

    </div>
  );
}

export default Home;