import React, {useState, useEffect} from "react"
import "./App.css"
import zendaya from "./zendaya.jpeg"
import 'bootstrap/dist/css/bootstrap.css';
import UserForm from "./components/UserForm";
import {getProfile, postProfile, getNews, getUsers} from "./api/user"
import { useNavigate } from 'react-router-dom'


function Home() {
    const [user, setUser]= useState({name: "", biography: ""})
    const [users, setUsers] = useState([])
    const [news, setNews]= useState("")
    const navigate = useNavigate();

    useEffect(()=>{
        ( async ()=>{
            const user =  await localStorage.getItem('@user')
            if(!user) return navigate('/login')
            setUser(JSON.parse(user))
        })()
        getNewsFeed()
        getAllUsers()
    },[])

    const updateProfile =async(event)=>{
        event.preventDefault()
        const name = event.target.name.value
        const bio = event.target.biography.value
        const profile = await postProfile(name, bio)
        setUser(profile.user)
        localStorage.setItem('@user', JSON.stringify(profile.user))
    }


    const getNewsFeed=async()=>{
        const newsData = await getNews()
        setNews(newsData.article.text)
        console.log(newsData)
    }

    const getAllUsers = async () => {
        console.log("this is all the users");
        const allUsers = await getUsers()
        console.log(allUsers,"this is all the users");
        setUsers(allUsers.data)
    }  

    return (

    <div>
        <div class="current-user">
            <h1>
                Current User
            </h1>
        </div>
        <div class="row">
            <div class="col-sm-2">
                <div class = "img-tag">
                    <img src={zendaya} alt = "Kosi's image should be here"/>
                </div>    
            </div>
            <div class="col-sm-8 bio-tag">
                <h1>{user?.name}</h1>
                <div class ="biography">
                    <p>
                       {user?.bio}
                    </p>
                </div>
            </div>
        </div>

        <div class = "row">
            <div class="col-md-6">
                <UserForm updateProfile={updateProfile}/>
            </div>
            <hr/>
            <div class="all-users">
                <h1>
                    All Users Profile
                </h1>
            </div>
            <div>
                {users.map((usr,index)=>                   
                    <div class="row">
                        <div class="col-sm-2">
                            <div class = "img2-tag">
                                <img src={zendaya} alt = "Kosi's image should be here"/>
                            </div>    
                        </div>
                        <div class="col-sm-8 bio-tag">
                            <div>
                                <h1>{usr.name}</h1>
                                <h6>{usr.email}</h6>
                            </div>
                            <div class ="biography">
                                <p>
                                {usr.bio}
                                </p>
                            </div>
                        </div>
                    </div>


                )}
            </div>
            <div class="col-md-12">
                <p>{news}</p>
            </div>
        </div>

    </div>
  );
}

export default Home;