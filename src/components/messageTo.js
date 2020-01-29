import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'
import {Image, Form, Button, Icon,Comment, Header, Modal, Sticky, List, Label} from 'semantic-ui-react'

function MessageTo({}){
    const {interactingUser, userData, userMessages, userConversations, messageLoading, interactingConvo} = useSelector(state => state)
    const [message, setMessage] = useState('')
    const [clickedTwice, setClickedTwice] = useState(false)
    const [messageId, setMessageId] = useState(null)
    const [tog, setTog] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{ dispatch(actionCreator.getUser(localStorage.token, localStorage.loggedInUserId))},[tog])

    const messageFormsubmit = evt => {
        evt.preventDefault()
        console.log(message)
        let to = parseInt(evt.target.id)
        setMessage("")
        dispatch(actionCreator.sendMessage(message, localStorage.token, localStorage.loggedInUserId, to))
        dispatch(actionCreator.getUser(localStorage.token, localStorage.loggedInUserId))

        setTog(!tog)
        setTog(!tog)
    }
    const messageInput = evt =>{
        switch(evt.target.name){
            case 'messageTyped':
                setMessage(evt.target.value)
                break;
        }}
    
  

        const filteredConvos = userConversations.filter(c => c.sender_id &&c.recipient_id == interactingUser.id)
        // const filterdMessages = userMessages.filter(m => {return(m.conversation_id == filteredConvos[0].id )})
    const DoubleClick = (evt) =>{
        let mesId = parseInt(evt.target.parentElement.id)
        setMessageId(mesId)
        setClickedTwice(!clickedTwice)

    }
    const editMessageClicked = () =>{
            console.log("edit")

    }

    const DeletemessageClicked = (evt)=>{
        console.log("delete")
        dispatch(actionCreator.deleteMessage(messageId, localStorage.token))
        dispatch(actionCreator.getUser(localStorage.token, localStorage.loggedInUserId))
        setClickedTwice(false)
        setTog(!tog)
    }
    const doubleClickOptions =()=>{
        return(
            <>
            <Label onClick={editMessageClicked} >

                <Icon circular name='edit' />
                Edit
            </Label>
            <Label onClick={DeletemessageClicked} >
                <Icon circular name='trash' />
                Delete
            </Label>
            <Label onClick={DoubleClick} >
                <Icon name="triangle up" circular />
            </Label>
            </>
        )
    }
    
  
return(
    <>
    <List>

        {interactingConvo.id ? interactingConvo.attributes.messages.map(m=>{
           if(m.user_id === parseInt(interactingUser.id)){
               return(
                <List.Item >
                    <Image src={interactingUser.photo} floated='left'  size='mini' circular />
                    <List.Content>
                        <List.Description> {m.body}</List.Description>
                    </List.Content>
                 </List.Item>    
               )
           }else if(m.user_id === userData.id){
                return(
                    <List.Item >
                    <Image src={userData.photo} floated='right'  size='mini' circular />
                    <List.Content id={m.id} onDoubleClick={DoubleClick} floated='right' >
                        <List.Description> {m.body} </List.Description>
                        {
                            clickedTwice && m.id === messageId ? doubleClickOptions() : null
                        }
                    </List.Content>
                </List.Item>    
                )
           }
        }): null}  
    </List>
    <Sticky>
        <Form id={interactingUser.id} onSubmit={messageFormsubmit} >
            <Form.TextArea name ='messageTyped' value={message} onChange={messageInput} />
            <Button type='submit' content='Send' labelPosition='left' icon='edit' primary />
        </Form>   
    </Sticky>  
    </>
)
}
export default MessageTo