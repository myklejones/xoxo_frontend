import React,{ useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'


function AllUsers(props){
    const [userProfile, setUserProfile] = useState(false)
    const [messageUser, setMessageUser] = useState(false)
    const [messageUserId, setMessageUserId] = useState(null)
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()

    console.log(props)

    const aUserClicked = (evt)=>{
        console.log("clicked")
        setUserProfile(!userProfile)
    }

    const messageUserClicked = (evt) =>{
       
        setMessageUserId(evt.target.id)
        setMessageUser(true)
        console.log(message, localStorage.token,localStorage.loggedInUserId, evt.target.id)
        

    }
    const messageInput = (evt) =>{
        switch(evt.target.name){
            case "message":
                setMessage(evt.target.value)
                break;
                }
            
    }

    const messageSubmitted = (evt) => {
        evt.preventDefault()
        dispatch(actionCreator.sendMessage(message, localStorage.token,localStorage.loggedInUserId, evt.target.id))
          
    }
    
        if(!messageUser){  
             return( <div  class="ui card">
        <div class="image"><img src={props.aUser.photo} /></div>
        <div class="content">
          <div class="header">{props.aUser.username}</div>
          <div class="meta">{props.aUser.city_state}</div>
          {userProfile ? <><div class="description">Birthday: {props.aUser.dob}</div>
          <div class="description">Aboutme: {props.aUser.about_me}</div>
          <div class="description">Email: {props.aUser.email}</div>
          <div class="description">Sex: {props.aUser.sex}</div>
          <button id={ props.aUser.id} onClick={messageUserClicked}class="ui basic red button">Message</button></> :null}
          {userProfile ? <button onClick={aUserClicked} class="ui basic pink button">Close</button> : <button onClick={aUserClicked} class="ui basic pink button">Profile</button>}
          <div class="extra content">
          </div>
        </div>
      </div>)
      }else if (props.aUser.id == messageUserId && messageUser){
          return( 
              
          <div  class="ui card">
        <div class="image"><img src={props.aUser.photo} /></div>
        <div class="content">
          <div class="header">{props.aUser.username}</div>
          <div class="description">Name: {props.aUser.name}</div>
          <div class="meta">{props.aUser.city_state}</div>
          {userProfile ? <>
          <div class="description">Birthday: {props.aUser.dob}</div>
          <div class="description">Aboutme: {props.aUser.about_me}</div>
          <div class="description">Email: {props.aUser.email}</div>
          <div class="description">Sex: {props.aUser.sex}</div>
          <button onClick={aUserClicked} class="ui basic pink button">Close</button>
          <div class="extra content">
          <div class="ui form">
         <div class="field">
             <label>Text</label>
                <textarea name="message" onChange={messageInput}></textarea>
                 <button onClick={messageSubmitted} id={props.aUser.id} class="ui basic blue button" type="submit" value="submit">Send</button>
             </div>
            </div>
          </div></>: <button onClick={aUserClicked} class="ui basic pink button">Profile</button>}
        </div>
      </div>)}
 

    
        
   



}

export default AllUsers


