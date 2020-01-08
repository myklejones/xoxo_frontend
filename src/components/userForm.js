import React,{ useState, useEffect, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Button, Form, Icon, Message } from 'semantic-ui-react'
import * as actionCreator from '../store/actions'

function UserForm(props){

    const dispatch = useDispatch()
    const created = useSelector(state=> state.newUserCreated)
    const newUserError = useSelector(state => state.newUserError)


        const [password, setPassword] = useState("")
        const [username, setUsername] = useState("")
        const [name, setName] = useState("")
        const [age, setAge] = useState("")
        const [dob, setDob] = useState("")
        const [cityState, setCityState] = useState("")
        const [aboutMe, setAboutMe] = useState("")
        const [email, setEmail] = useState("")
        const [lastName, setLastName] = useState("")
        const [firstName, setFirstName] = useState("")
const formInput= (evt)=>{
    switch(evt.target.name){
        case "username":
           setUsername(evt.target.value)
           break;
        case "password":
            setPassword(evt.target.value)
            break;
        case 'First Name':
            setFirstName(evt.target.value)
            break;
        case 'Last Name':
            setLastName(evt.target.value)
            break;
        case "email":
            setEmail(evt.target.value)
            break;
      

   }

}


const loginClicked = () => {
    props.history.push('/login')
}


const formSubmit = (e)=>{
e.preventDefault() 
let name = firstName +" "+ lastName
console.log(name)
let data = {
    username: username,
    name: name,
    password: password,
    email: email,
    active: false
   
}
dispatch( actionCreator.newUser(data))
}

return(
    <>
        <Message
        attached
        header='Welcome to XoXo'
        content='Fill out the form below to sign-up for a new account'
      />
        <Form onSubmit={formSubmit} className='attached fluid segment'>
          <Form.Group widths='equal'>
             <Form.Input
              fluid
              onChange = {formInput}
              label='First Name'
              name='First Name'
              placeholder='First Name'
              type='text'
              />
            <Form.Input
             onChange = {formInput}
              fluid
              label='Last Name'
              name='Last Name'
              placeholder='Last Name'
              type='text'
              />
            </Form.Group>
            <Form.Input label='Username' placeholder='Username' type='text' />
            <Form.Input 
            id="password"
            label='Password' 
            type='password'  
            onChange = {formInput}
            name="password"
            placeholder='Password'
             value={password}  />
            <Form.Input 
            label='Email' 
            id="email"
            type="text"
            onChange = {formInput}
            name="email"
            value={email}
            placeholder='Email' 
            />
          
            <Form.Checkbox inline label='I agree to the terms and conditions' />
            <Button color='blue' type="submit" > Submit</Button>
        </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Already signed up?&nbsp;<a href='/login'>Login here</a>&nbsp;instead.
    </Message>
    {created ? loginClicked(): null}
    {created ? loginClicked(): null}
    {newUserError.errors ? newUserError.errors.map(error=> <li>{error}</li>) : null}
    


</>
)
}
export default UserForm