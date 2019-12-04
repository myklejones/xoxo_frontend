import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'



function User(props){
    const [profile, setProfile] = useState(false)
    const [edit, setEdit] = useState(false)
    
    const user = useSelector(state => state.user)
    console.log(user, props)
   

    return(
        <>
        <h1>Welcome {user.username}!</h1>
        <img src={user.photo} rel="user Photo" />
        <h2>{user.city_state}</h2>
        {props.showAll ?<><h3>Birthdate :</h3><ol>{user.dob}</ol><h3>About me:</h3><ol>{user.about_me}</ol><h3>Email: </h3><ol>{user.email}</ol><h4>Sex</h4><ol>{user.sex}</ol></> :null}
        
        </>
    )
} 

export default User