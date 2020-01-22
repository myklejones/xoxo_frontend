import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'
import {Image, Form, Button, Comment, Header} from 'semantic-ui-react'

function MessageTo({}){
    const {interactingUser, userData} = useSelector(state => state)
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const messageFormsubmit = evt => {
        evt.preventDefault()
        console.log(message)
        let to = parseInt(evt.target.id)
        dispatch(actionCreator.sendMessage(message, localStorage.token, localStorage.loggedInUserId, to))
    }
    const messageInput = evt =>{
        switch(evt.target.name){
            case 'messageTyped':
                setMessage(evt.target.value)
                break;
        }

    }
return(
    <>
  <Image src={interactingUser.photo}  size='small' circular />
  <Form id={interactingUser.id} onSubmit={messageFormsubmit} >
      <Form.TextArea name ='messageTyped' onChange={messageInput} />
      <Button type='submit' content='Send' labelPosition='left' icon='edit' primary />
    </Form>
    </>
)
}
export default MessageTo