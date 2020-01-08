import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'
import AUser from './aUser'
import { Card, Grid, Image} from 'semantic-ui-react'

function AllUsersContainer(props){
   
    const {uLoaded, id,token,userData,user,activeItem, allUsers } = useSelector(state => state)
    const st  = useSelector(state => state)
    
    console.log( st)

    useEffect(()=>{
        },[])
       
return(
    <>
    

   
    {}
  <Card.Group itemsPerRow={4}>
      {allUsers.map(auser => {
          return(
                 <Card color='red' image={auser.photo} />     
          )
  

      })}
  
  </Card.Group>

 {/* {props.users.filter(us => us.id !== parseInt(localStorage.loggedInUserId)).map(user=><AUser aUser={user} />)} */}
   
    </>
)
}
export default AllUsersContainer