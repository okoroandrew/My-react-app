import React from "react"
import "../App.css"

const UserForm = ({updateProfile})=>{
    return(
    <form onSubmit={updateProfile} class="form-inline custom_form">
        <div class="form-group">
            <label class="sr-only" for="name">Full Name:</label>
            <input name="name" type="text" class="form-control custom_input" id="email"/>
        </div>
        <div class="form-group">
            <label class="sr-only" for="Biography">Biography</label>
            <textarea name="biography" class="form-control custom_input" id="biography" placeholder="Please Enter you biography"></textarea>
        </div>
        <button type="submit" id= "custom_btn1" class="btn btn-default">Submit</button>
    </form>

    )
}




export default UserForm;