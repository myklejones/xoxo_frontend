import React,{ useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import User from './user'

function AllUsers(props){
    const [userProfile, setUserProfile] = useState(false)
    const user = useSelector(state=>state.user)
    console.log(props)

    const imgClicked= ()=>{
        props.profileClicked()
    }
return(
     <>
    <h1>{props.users.username}</h1>
    <img onClick={imgClicked} src={props.users.photo} rel="Photo"/>
    </>  
    )
}

export default AllUsers