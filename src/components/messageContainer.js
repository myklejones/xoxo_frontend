import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Button, Input,Image , Segment, Card ,Form, Header, Grid, List} from 'semantic-ui-react'
import * as actionCreator from '../store/actions'



function MessageContainer(props){
    
    
    const {userData,userMessages, userConversations, allUsers, interactingUser}= useSelector(state => state)
    const [searchinput, setSearchinput] = useState("")
    const [right, setRight] = useState(false)
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
        
        let selectedId = parseInt(evt.target.id)
        const userToBeSet = allUsers.find(u => u.id === selectedId)
        dispatch(actionCreator.interactingUser(userToBeSet))
        let selectedConvoId = parseInt(evt.target.parentElement.id)
        const convoToBeSet = userConversations.find(c => parseInt(c.id) === selectedConvoId )
        dispatch(actionCreator.interactingConvo(convoToBeSet))
        props.history.push(`/${userData.username}/conversations/${userToBeSet.id}`)
        
    }
    const searchInput =(evt)=>{
        setSearchinput(evt.target.value)
      
    }
    const dubClickConvo =(evt)=>{
    }


   for(let i = 0; i<userConversations.length; i++){
            userConversations[i].attributes.messages.reverse()
    }
    const sortedConvos = userConversations.sort((a,b)=>{if(a.attributes.messages.length >= 1){
        return a.attributes.messages[0].created_at -  b.attributes.messages[0].created_at }})
    const rightClick =(evt)=>{
        evt.preventDefault()
        let selectedId = parseInt(evt.target.id)
        const userToBeSet = allUsers.find(u => u.id === selectedId)
        dispatch(actionCreator.interactingUser(userToBeSet))
        let selectedConvoId = parseInt(evt.target.parentElement.id)
        const convoToBeSet = userConversations.find(c => parseInt(c.id) === selectedConvoId )
        dispatch(actionCreator.interactingConvo(convoToBeSet))
        setRight(!right)
        debugger
        console.log("rightClicked")
    }

   
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
               if(searchinput.length===0 ){
                 return(
                <List.Item id={a_user.id} onDoubleClick={dubClickConvo} >
                         <Image id={a_user.id} onClick={imageClicked} size='mini' circular src={a_user.photo} /> 
                        <List.Content id={c.id} onContextMenu={rightClick} onClick={messageClicked} >
                            <List.Header id={a_user.id}>{a_user.username}</List.Header>
                            <List.Description id={a_user.id} >{c.attributes.messages[0] ? c.attributes.messages[0].body : null}  </List.Description>    
                        </List.Content>
                        {right&& a_user.id === interactingUser.id ? <Header>Delete this conversation ?<Button>Yes</Button><Button>No</Button></Header> : null}
                    </List.Item>
                ) 
               }else if(a_user.username.toUpperCase().startsWith(searchinput.toUpperCase()) ){
                return(
                    <List.Item id={a_user.id} onDoubleClick={dubClickConvo} >
                    <Image id={a_user.id} onClick={imageClicked} size='mini' circular src={a_user.photo} /> 
                   <List.Content id={c.id} onContextMenu={rightClick} onClick={messageClicked} >
                       <List.Header id={a_user.id}>{a_user.username}</List.Header>
                       <List.Description id={a_user.id} >{c.attributes.messages[0] ? c.attributes.messages[0].body : null}  </List.Description>    
                   </List.Content>
                   {right&& a_user.id === interactingUser.id ? <Header>Delete this conversation ?<Button>Yes</Button><Button>No</Button></Header> : null}
               </List.Item>
                )
                }  
               
           }else if(c.attributes.recipient_id  === userData.id){
                  let a_user = allUsers.find(u=>{return u.id === c.attributes.sender_id })
                  if(searchinput.length === 0){
                    return(
                    <List.Item id={a_user.id} onDoubleClick={dubClickConvo} >
                    <Image id={a_user.id} onClick={imageClicked} size='mini' circular src={a_user.photo} /> 
                   <List.Content id={c.id} onContextMenu={rightClick} onClick={messageClicked} >
                       <List.Header id={a_user.id}>{a_user.username}</List.Header>
                       <List.Description id={a_user.id} >{c.attributes.messages[0] ? c.attributes.messages[0].body : null}   </List.Description>    
                       {right&& a_user.id === interactingUser.id ? <Header>Delete this conversation ?<Button>Yes</Button><Button>No</Button></Header> : null}
                   </List.Content>
                  
               </List.Item>)  
                  }else if(a_user.username.toUpperCase().startsWith(searchinput.toUpperCase())){
                    return(
                        <List.Item id={a_user.id} onDoubleClick={dubClickConvo} >
                        <Image id={a_user.id} onClick={imageClicked} size='mini' circular src={a_user.photo} /> 
                       <List.Content id={c.id} onContextMenu={rightClick} onClick={messageClicked} >
                           <List.Header id={a_user.id}>{a_user.username}</List.Header>
                           <List.Description id={a_user.id} >{c.attributes.messages[0] ? c.attributes.messages[0].body : null}   </List.Description>  
                           {right&& a_user.id === interactingUser.id ? <Header>Delete this conversation ?<Button>Yes</Button><Button>No</Button></Header> : null}  
                       </List.Content>
                     
                   </List.Item>) 
                  }
                
           }
          

       })}
        
      </List>
           
     
    
               

       
        
        </>
    )
} 

export default MessageContainer


