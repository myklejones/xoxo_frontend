import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'
import {Image, Form, Button, Comment, Header} from 'semantic-ui-react'

function MessageTo({}){
    const {interactingUser} = useSelector(state => state)
return(
    <>
  <Image src={interactingUser.photo}  size='small' circular />
  <Form reply>
      <Form.TextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
    </>
)
}
export default MessageTo