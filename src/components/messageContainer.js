import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Button, Comment,Image , Segment, Card ,Form, Header, Grid, List} from 'semantic-ui-react'
import * as actionCreator from '../store/actions'
import AllUsers from './ASinlgleUser';


function MessageContainer(props){
    
    
    const {userData,userMessages, userConversations, allUsers, interactingUser}= useSelector(state => state)
    const dispatch = useDispatch()
    const c = ()=>{
        dispatch(actionCreator.convos(localStorage.token))
    }

    useEffect(()=>{dispatch(actionCreator.convos(localStorage.token))},[])

    const imageClicked =(evt)=>{
 
        let selectedId = parseInt(evt.target.id)
        const userToBeSet = allUsers.find(u => u.id === selectedId)

        dispatch(actionCreator.interactingUser(userToBeSet))
        props.history.push(`/${userData.username}/users/${selectedId}`)
    }
    const messageClicked = evt =>{
        console.log("message clicked")
    }
    return(
        <>
      <List>
            {userConversations.map(c=>{
                if(c.sender_id === userData.id){
                    let thisOne = allUsers.find(u=> u.id === c.recipient_id)
                    let thisOneLastMessage = userMessages.filter(m => m.conversation_id === c.id )
                    let lastMessage = thisOneLastMessage.pop()
                    
                    {console.log(thisOneLastMessage)}
                    return(
                        
                        //    <Segment>
                        //         <Header>
                        //                <Image size='small' circular src={thisOne.photo} /> RE: {lastMessage.body}   

                        //                </Header>
                               
                        //     </Segment>
                        <List.Item>
                             <Image id={thisOne.id} onClick={imageClicked} size='mini' circular src={thisOne.photo} /> 
                            <List.Content id={thisOne.id} onClick={messageClicked} >
                                <List.Header>{thisOne.username}</List.Header>
                                <List.Description>RE: {lastMessage.body}   </List.Description>    
                            </List.Content>
                        </List.Item>
                          
                    )
                }else if (c.recipient_id === userData.id){
                    let thisOne = allUsers.find(u=> u.id === c.sender_id)
                    return(
                     
                  
                        <Segment>
                        <Image size='small' src={thisOne.photo} />   
                     </Segment>  
                      
                    )}
                
            })
        }  
      </List>
           
     
    
         

       
        
        </>
    )
} 

export default MessageContainer


