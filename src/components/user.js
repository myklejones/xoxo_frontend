import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'



function User(props){
    const [profile, setProfile] = useState(false)
    const [edit, setEdit] = useState(false)
    
    const user = useSelector(state => state.user)
    console.log(user, props)
   

    return(
        <>
        <div onClick={props.viewSelf} class="ui card">
  <div class="image"><img src={user.photo} /></div>
  <div class="content">
    <div class="header">{user.username}</div>
    <div class="meta"><span class="date">{user.city_state}</span></div>
        {props.showAll ?<><div class="description">Birthday: {user.dob}</div><div class="description">Aboutme: {user.about_me}</div><div class="description">Email: {user.email}</div><div class="description">Sex: {user.sex}</div></> :null}
  </div>
  
</div>
        
        </>
    )
} 

export default User


