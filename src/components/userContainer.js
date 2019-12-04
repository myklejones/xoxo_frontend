import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import User from './user'
import EditUserForm from './editUserForm'
import * as actionCreator from '../store/actions'
import AllUsers from './allUsers'

function UserContainer(props){
    const user = useSelector(state => state.user)
    const token = useSelector(state => state.token)
    const userData= useSelector(state => state.userData)
    const uLoaded = useSelector(state => state.uLoading)
    const [profile, setProfile] = useState(false)

    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [showAll, setShowAll] = useState(false)

    console.log(userData, user)
    console.log(props)

    useEffect(()=>{
        if(localStorage.loggedInUserId && localStorage.token && !user.id){
            dispatch(actionCreator.getUser(localStorage.token, localStorage.loggedInUserId)) }
        },[])
   

  const logoutClicked = ()=>{
      localStorage.clear()
    dispatch(actionCreator.logout(false))
  }

  if(!uLoaded){
    props.history.push('/login')  
  }

  const editClicked = ()=>{
    setEdit(!edit)
  }
  const allUserShow = ()=>{setShowAll(!showAll)}

  const viewProfileClicked = () =>{
     setProfile(!profile)
  }
const profileClicked=()=>{
    console.log("hello")
    props.history.push(`/${user.username}/users`)
}  
    return(
        <>
        <button onClick={logoutClicked}>Log Out</button>
        <button onClick={viewProfileClicked}>View Profile</button>
        <User   props={props} showAll={profile} />

        {edit ? <><EditUserForm from="Edit" self={user} /><button  onClick={editClicked}>Cancel</button></> : <button  onClick={editClicked}>Edit Profile</button>}
        {showAll ? <button onClick={allUserShow} >Hide Users</button>:null}
        {showAll ? userData.filter(aUsers => aUsers.id !== user.id).map(users =><> <AllUsers profileClicked={profileClicked} users={users} /></>) : <button onClick={allUserShow}> ❤️</button>}
        
        </>
    )
} 

export default UserContainer