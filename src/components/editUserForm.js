import React,{ useState, useEffect, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actionCreator from '../store/actions';
import {Form, Header, Button, FormInput } from 'semantic-ui-react'

function EditUserForm(props){

  const {userData, uLoaded} = useSelector(state=>state)
  const dispatch = useDispatch()
  const [email, setEmail] = useState(userData.email)
  let name = userData.name.split(' ')
  const [lastName, setLastName] = useState(name[1])
  const [firstName, setFirstName] = useState(name[0])
  const [username, setUserName] = useState(userData.username)
  const [age, setAge] = useState(userData.age)
  const [dob, setDob] = useState(userData.dob)
  const [interest, setInterest] = useState(userData.interest)
  const [sex, setSex] = useState(userData.sex)
  const [aboutMe, setAboutme] = useState(userData.about_me)
  const [preference, setPreference] = useState(userData.preference)  
  const [bodytype , setBodyType] = useState(userData.body_type)  
  const [profession, setProfession] = useState(userData.profession)  
  const [cityState, setCityState] = useState(userData.city_state)

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
  const options2 = [
    { key: 'f', text: 'Friends', value: 'friends' },
    { key: 'd', text: 'Dating', value: 'dating' },
    { key: 'r', text: 'Relationship', value: 'relationship' },
  ]
  const editFormSubmit = evt =>{
    evt.preventDefault()
    let nameInput = firstName+" "+lastName

    let updateInfo = {
      id:userData.id,
      name: nameInput,
      username: username,
      email: email,
      age: age,
      dob: dob,
      sex: sex,
      city_state: cityState,
      interest: interest,
      about_me: aboutMe,
      preference: preference,
      body_type:bodytype, 
      profession: profession 

    }
    dispatch(actionCreator.editUserProfile(updateInfo, localStorage.token, localStorage.loggedInUserId))
    
  }
console.log(lastName)
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
      case 'citystate':
        setCityState(evt.target.value)
        break;
    }
  }
  

return(
<>
  
{ }
<Header as="h1">Edit</Header>
<Form onSubmit={editFormSubmit} >
<Form.Group widths='equal'>
<Form.Input
              fluid
              label='First Name'
              name='First Name'
              placeholder={name[0]}
              type='text'
              onChange={FormInput}
              />
            <Form.Input
              fluid
              label='Last Name'
              name='Last Name'
              placeholder={name[1]}
              type='text'
              onChange={FormInput}
              />
            </Form.Group>
  <Form.Input  label='Username' name='username' placeholder={userData.username}   onChange={FormInput} />
  <Form.Input  label='Email' onChange={FormInput}  name='email' placeholder={userData.email} />
  {/* <Form.Input  label='Photo'  /> */}
  <Form.Input  label='Age' name='age' placeholder={userData.age} onChange={FormInput} />
  <Form.Input  label='Dob' name='dob' placeholder={userData.dob} onChange={FormInput} />
  <Form.Input  label='City,State' name='citystate' placeholder={userData.city_state} onChange={FormInput} />
  <Form.Select
            fluid
            label='Sex'
            onChange={FormInput}
            name='sex'
            options={options1}
            placeholder={userData.sex}
          />
  <Form.Input  label='About me' name='about_me' placeholder={userData.about_me} onChange={FormInput} />
  <Form.Select
    label='Interest' 
    name='interest'
    options={options2}
    placeholder={userData.interest} 
    onChange={FormInput} />
  <Form.Select
            fluid
            onChange={FormInput}
            label='Preference'
            name='preference'
            options={options}
            placeholder='Gender'
          />
   <Form.Select
            fluid
            onChange={FormInput}
            name='body_type'
            label='Body Type'
            options={bodyType}
            placeholder={userData.body_type}
          />

  <Form.Input onChange={FormInput} label='Profession' name='profession' placeholder={userData.profession} />
  <Button basic color='blue'type='submit' >Update</Button>
</Form>


</>
)}

export default EditUserForm;