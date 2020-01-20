import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import User from './user'
import EditUserForm from './editUserForm'
import * as actionCreator from '../store/actions'
import AllUsersContainer from './allUsersContainer.js'
import {Button} from 'semantic-ui-react'
 

function UserContainer(props){
    const {userData, activeItem, uLoaded, allUsers, token} = useSelector(state => state)
    const [profile, setProfile] = useState(false)
    const [viewUsers, setViewUsers] = useState(false)
 
    const dispatch = useDispatch()
   


    const outlog = () =>{
      props.history.push('/login')  
    }
    const users = () => {
      props.history.push(`/${userData.username}/users`)
    }
   
    useEffect(()=>{
      
        },[])
   

  const logoutClicked = ()=>{
      localStorage.clear()
    dispatch(actionCreator.logout(false))
  }
  
  
  if(!uLoaded){
    outlog()
  }

  const editClicked = ()=>{
    props.history.push(`/edit/${userData.username}`)
  }
const viewProfileClicked = () =>{
     setProfile(!profile)
  }
const viewUsersClicked=()=>{
    setViewUsers(!viewUsers)
}  

return(  
    <> 
    <User viewSelf={viewProfileClicked} props={props} showAll={profile} />
     <Button color="blue" onClick={editClicked}>Edit Profile</Button>
        </>
    )
} 

export default UserContainer
