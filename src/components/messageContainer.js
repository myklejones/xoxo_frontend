import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Button, Input,Image , Segment, Card ,Form, Header, Grid, List} from 'semantic-ui-react'
import * as actionCreator from '../store/actions'
import AllUsers from './ASinlgleUser';


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
        console.log("message clicked")
    }
    const searchInput =(evt)=>{
        setSearchinput(evt.target.value)
      
    }
    console.log(searchinput)
  
    return(
        <>
          <Input
    onChange={searchInput}
    icon='search'
    iconPosition='left'
    placeholder='Search...'
  />
      <List>
            {userConversations.map(c=>{
                if(c.sender_id === userData.id){
                    // let thisOne = allUsers.filter(u => u.username === searchi)
                    
                    let thisOne = allUsers.find(u=> u.id === c.recipient_id)
                    let thisOneLastMessage = userMessages.filter(m => m.conversation_id === c.id )
                    let lastMessage = thisOneLastMessage.pop()



                    
                    if(searchinput.length > 0 && thisOne.username.toUpperCase().startsWith(searchinput.toUpperCase())){
                        return(
                        <List.Item>
                             <Image id={thisOne.id} onClick={imageClicked} size='mini' circular src={thisOne.photo} /> 
                            <List.Content id={thisOne.id} onClick={messageClicked} >
                                <List.Header>{thisOne.username}</List.Header>
                                <List.Description>RE: {lastMessage.body}   </List.Description>    
                            </List.Content>
                        </List.Item>
                          
                    ) 
                    }else if(searchinput.length === 0 ){
                        return(
                            <List.Item>
                            <Image id={thisOne.id} onClick={imageClicked} size='mini' circular src={thisOne.photo} /> 
                           <List.Content id={thisOne.id} onClick={messageClicked} >
                               <List.Header>{thisOne.username}</List.Header>
                               <List.Description>RE: {lastMessage.body}   </List.Description>    
                           </List.Content>
                       </List.Item>
                        )
                    }
                   
                }else if (c.recipient_id === userData.id){
                    let thisOne = allUsers.find(u=> u.id === c.sender_id)
                    let thisOneLastMessage = userMessages.filter(m => m.conversation_id === c.id )
                    let lastMessage = thisOneLastMessage.pop()
                    return(
                        <List.Item>
                             <Image id={thisOne.id} onClick={imageClicked} size='mini' circular src={thisOne.photo} /> 
                            <List.Content id={thisOne.id} onClick={messageClicked} >
                                <List.Header>{thisOne.username}</List.Header>
                                <List.Description>RE: {lastMessage.body}   </List.Description>    
                            </List.Content>
                        </List.Item>
                          
                    ) }
                
            })
        }  
      </List>
           
     
    
         

       
        
        </>
    )
} 

export default MessageContainer


