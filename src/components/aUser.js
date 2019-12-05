import React,{ useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'


function AllUsers(props){
    const [userProfile, setUserProfile] = useState(false)
    console.log(props)

    const aUserClicked = (evt)=>{
        console.log("clicked")
        setUserProfile(!userProfile)
    }
return(
     
  <div  class="ui card">
  <div class="image"><img src={props.aUser.photo} /></div>
  <div class="content">
    <div class="header">{props.aUser.username}</div>
    <div class="meta">{props.aUser.city_state}</div>
    {userProfile ? <><div class="description">Birthday: {props.aUser.dob}</div><div class="description">Aboutme: {props.aUser.about_me}</div><div class="description">Email: {props.aUser.email}</div><div class="description">Sex: {props.aUser.sex}</div><button class="ui basic red button">Message User</button></> :null}
    {userProfile ? <button onClick={aUserClicked} class="ui basic pink button">Close</button> : <button onClick={aUserClicked} class="ui basic pink button">Profile</button>}
    <div class="extra content">
    
    </div>
    
  </div>
  
</div>
    
    )
}

export default AllUsers


