import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'
import AUser from './aUser'

function AllUsersContainer(props){
   
console.log(props)

    

    useEffect(()=>{
        },[])
       
return(
    <>
 {props.users.filter(us => us.id !== parseInt(localStorage.loggedInUserId)).map(user=><AUser aUser={user} />)}
   
    </>
)
}
export default AllUsersContainer