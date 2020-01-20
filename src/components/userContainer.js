import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import User from './user'
import EditUserForm from './editUserForm'
import * as actionCreator from '../store/actions'
import AllUsersContainer from './allUsersContainer.js'
import {Button} from 'semantic-ui-react'
 

function UserContainer(props){
    const {user, activeItem} = useSelector(state => state)
    const token = useSelector(state => state.token)
    const userData= useSelector(state => state.userData)
    const uLoaded = useSelector(state => state.uLoaded)
    const [profile, setProfile] = useState(false)
    const allUsers = useSelector(state => state.userData)
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [viewUsers, setViewUsers] = useState(false)


    const outlog = () =>{
      props.history.push('/login')  
    }
    const users = () => {
      props.history.push(`/${user.username}/users`)
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
    setEdit(!edit)
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
            {edit ? <><EditUserForm  /><Button basic color="blue" onClick={editClicked}>Cancel</Button></> : <Button color="blue" onClick={editClicked}>Edit Profile</Button> }
        </>
    )
} 

export default UserContainer
