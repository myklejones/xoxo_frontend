import React,{ useState, useEffect, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actionCreator from '../store/actions';
import {Form, Header, Button, FormInput } from 'semantic-ui-react'

function EditUserForm(props){

  const {userData} = useSelector(state=>state)
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [username, setUserName] = useState("")
  const [age, setAge] = useState(userData.age)
  const [dob, setDob] = useState(userData.dob)
  const [interest, setInterest] = useState(userData.interest)
  const [sex, setSex] = useState(userData.sex)
  const [aboutMe, setAboutme] = useState(userData.about_me)
  const [preference, setPreference] = useState(userData.preference)  
  const [bodytype , setBodyType] = useState(userData.body_type)  
  const [profession, setProfession] = useState(userData.profession)  
  


  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'a', text: 'All', value: 'all' },
  ]

  const options1 = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'p', text: 'Other', value: 'Other' },
  ]

  const bodyType = [
    { key: 's', text: 'Slim', value: 'slim' },
    { key: 'p', text: 'Petite', value: 'petite' },
    { key: 'a', text: 'Average', value: 'average' },
    { key: 'f', text: 'Fit', value: 'fit' },
    { key: 't', text: 'Thick', value: 'thick' },
    { key: 'b', text: 'BBW', value: 'bbw' },
    { key: 'h', text: 'Husky', value: 'husky' },
    
  ]
  const editFormSubmit = evt =>{
    evt.preventDefault()
    console.log(evt)
  }

  const FormInput = evt =>{
    switch(evt.target.name){
      case 'First Name':
        setFirstName(evt.target.value)
        break;
      case 'Last Name':
        setLastName(evt.target.value)
        break;
      case 'username':
        setUserName(evt.target.value)
        break;
      case 'email':
        setEmail(evt.target.value)
        break;
      case 'age':
        setAge(evt.target.value)
        break;
      case 'dob':
      setDob(evt.target.value)
      break;
      case 'sex':
        setSex(evt.target.value)
        break;
      case 'about_me':
        setAboutme(evt.target.value)
        break;
      case 'interest':
        setInterest(evt.target.value)
      case 'preference':
        setPreference(evt.target.value)
        break;
      case 'body_type':
        setBodyType(evt.target.value)
        break;
      case 'profession':
        setProfession(evt.target.value)
        break; 
    }
  }
  

return(
<>
<Header as="h1">Edit</Header>
<Form onSubmit={editFormSubmit} >
<Form.Group widths='equal'>
<Form.Input
              fluid
              label='First Name'
              name='First Name'
              placeholder='First Name'
              type='text'
              onChange={FormInput}
              />
            <Form.Input
              fluid
              label='Last Name'
              name='Last Name'
              placeholder='Last Name'
              type='text'
              />
            </Form.Group>
  <Form.Input  label='Username' name='username' placeholder={userData.username} />
  <Form.Input  label='Email' name='email' placeholder={userData.email} />
  {/* <Form.Input  label='Photo'  /> */}
  <Form.Input  label='Age' name='age' placeholder={userData.age} />
  <Form.Input  label='Dob' name='dob' placeholder={userData.dob} />
  <Form.Input  label='City,State' placeholder={userData.city_state} />
  <Form.Select
            fluid
            label='Sex'
            name='sex'
            options={options1}
            placeholder='Gender'
          />
  <Form.Input  label='About me' name='about_me' placeholder={userData.about_me} />
  <Form.Input  label='Interest' name='interest' placeholder={userData.interest} />
  <Form.Select
            fluid
            label='Preference'
            name='preference'
            options={options}
            placeholder='Gender'
          />
   <Form.Select
            fluid
            name='body_type'
            label='Body Type'
            options={bodyType}
            placeholder='Gender'
          />

  <Form.Input  label='Profession' name='profession' placeholder={userData.profession} />
  <Button basic color='blue'type='submit' >Update</Button>
</Form>

</>
)}

export default EditUserForm;