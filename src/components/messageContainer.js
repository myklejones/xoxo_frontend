import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Button, Input,Image , Segment, Card ,Form, Header, Grid, List} from 'semantic-ui-react'
import * as actionCreator from '../store/actions'
import AllUsers from './ASinlgleUser';
import User from './user';


function MessageContainer(props){
    
    
    const {userData,userMessages, userConversations, allUsers, interactingUser}= useSelector(state => state)
    const [searchinput, setSearchinput] = useState("")
    const dispatch = useDispatch()
    const c = ()=>{
        dispatch(actionCreator.convos(localStorage.token))
    }

    useEffect(()=>{dispatch(actionCreator.convos(localStorage.token))},[searchinput])

    const imageClicked =(evt)=>{
 
        let selectedId = parseInt(evt.target.id)
        const userToBeSet = allUsers.find(u => u.id === selectedId)

        dispatch(actionCreator.interactingUser(userToBeSet))
        props.history.push(`/${userData.username}/users/${userToBeSet.username}`)
    }

    const messageClicked = evt =>{
        let selectedId = parseInt(evt.target.parentElement.id)
        const userToBeSet = allUsers.find(u => u.id === selectedId)

        dispatch(actionCreator.interactingUser(userToBeSet))
        props.history.push(`/${userData.username}/conversations/${interactingUser.id}`)
    }
    const searchInput =(evt)=>{
        setSearchinput(evt.target.value)
      
    }
    const dubClickConvo =(evt)=>{
    }


   for(let i = 0; i<userConversations.length; i++){
            userConversations[i].attributes.messages.reverse()
    }
    const sortedConvos = userConversations.sort((a,b)=>{
       return a.attributes.messages[0].updated_at - b.attributes.messages[0].updated_at
    })

    debugger
    return( 
        <>
          <Input
    onChange={searchInput}
    icon='search'
    iconPosition='left'
    placeholder='Search...'
  />

      <List>
       {sortedConvos.map(c=>{
           if(c.attributes.sender_id  === userData.id){
               let a_user = allUsers.find(u=>{return u.id === c.attributes.recipient_id })
                return(
                <List.Item id={c.id} onDoubleClick={dubClickConvo} >
                         <Image id={a_user.id} onClick={imageClicked} size='mini' circular src={a_user.photo} /> 
                        <List.Content id={a_user.id} onClick={messageClicked} >
                            <List.Header>{a_user.username}</List.Header>
                            <List.Description>RE: {c.attributes.messages[0].body}   </List.Description>    
                        </List.Content>
                    </List.Item>
           )
           }else if(c.attributes.recipient_id  === userData.id){
                  let a_user = allUsers.find(u=>{return u.id === c.attributes.sender_id })
                return(
                <List.Item id={c.id} onDoubleClick={dubClickConvo} >
                         <Image id={a_user.id} onClick={imageClicked} size='mini' circular src={a_user.photo} /> 
                        <List.Content id={a_user.id} onClick={messageClicked} >
                            <List.Header>{a_user.username}</List.Header>
                            <List.Description>RE: {c.attributes.messages[0].body}   </List.Description>    
                        </List.Content>
                    </List.Item>)
           }
          

       })}
        
      </List>
           
     
    
               

       
        
        </>
    )
} 

export default MessageContainer


