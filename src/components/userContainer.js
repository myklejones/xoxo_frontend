import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import User from './user'
import EditUserForm from './editUserForm'
import * as actionCreator from '../store/actions'
import AllUsersContainer from './allUsersContainer.js'
 

function UserContainer(props){
    const user = useSelector(state => state.user)
    const token = useSelector(state => state.token)
    const userData= useSelector(state => state.userData)
    const uLoaded = useSelector(state => state.uLoaded)
    const [profile, setProfile] = useState(false)
    const allUsers = useSelector(state => state.userData)
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [viewUsers, setViewUsers] = useState(false)

   

    useEffect(()=>{
      
        },[])
   

  const logoutClicked = ()=>{
      localStorage.clear()
    dispatch(actionCreator.logout(false))
  }
  console.log(uLoaded)

  if(!uLoaded){
    props.history.push('/login')  
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
    <h1></h1>
    {/* <button onClick={logoutClicked}>Log Out</button> */}
     <button onClick={logoutClicked} class="ui basic blue button">
        <i aria-hidden="true" class="logout icon"></i>
            Logout
        </button>
            {/* {!viewUsers ? <button onClick={viewProfileClicked} class="ui basic blue button">
<i aria-hidden="true" class="profile icon"></i>
View Profile
</button>: null} */}
            {!viewUsers ? <button class="ui basic blue button">Messages</button> :null}
            {!viewUsers ? <button class="ui basic blue button" onClick={viewUsersClicked}>      <i aria-hidden="true" class="users icon"></i> Users</button> : <button class="ui basic blue button" onClick={viewUsersClicked}><i aria-hidden="true" class="profile icon"></i>Back to Profile</button>}
            {!viewUsers ? null : <AllUsersContainer  users={allUsers} />}
           
            {!viewUsers ?<><User viewSelf={viewProfileClicked} props={props} showAll={profile} />{edit ? <><EditUserForm from="Edit" self={user} /><button class="ui basic button blue"  onClick={editClicked}>Cancel</button></> : <button  class="ui basic blue button" onClick={editClicked}>Edit Profile</button>}</> : null} 
        
       

        </>
    )
} 

export default UserContainer
