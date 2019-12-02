import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'



function User(props){
    
    const user = useSelector(state => state.user)
console.log(user)
   

    return(
        <>
        <h1>Welcome {user.data ? user.data.attributes.username : null}!</h1>
        </>
    )
} 

export default User