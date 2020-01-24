import React,{ useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {Image, Header, Container, Button} from 'semantic-ui-react'
import * as actionCreator from '../store/actions'


function AUser(props){
  
  const {allUsers, interactingUser, userData, oneUser} = useSelector(state => state)
  const dispatch = useDispatch()

  const messageUserclicked = ()=>{
    props.history.push(`/${userData.username}/conversations/${interactingUser.id}`)

  }

  const showOtherUsers = (evt) =>{
    dispatch(actionCreator.interactingUser({})) 
    props.history.push(`/${userData.username}/users`)
}
console.log(interactingUser)
  return(
    <>
      <Image src={interactingUser.photo} 
    
        size='medium'
        attached='top'
      
      />
      <Header as='h1'  attached >
        {interactingUser.username}, {interactingUser.age}
      </Header>
      <Container fluid > 
      <Header as='h3' >
        City/state
      </Header>
        {interactingUser.city_state}
      <Header as='h3' >
        Occupation
      </Header>
        {interactingUser.profession}
      <Header as='h3' >
        About me
      </Header>
        {interactingUser.about_me}
      <Header as='h3' >
        Interested in
      </Header>
        {interactingUser.interest}
      <Header as='h3' >
        Body Type
      </Header>
        {interactingUser.body_type}
    </Container>
    {interactingUser.id === userData.id ? null :  <Button.Group attached='bottom' > 
      <Button basic color='blue' onClick={messageUserclicked} > Message </Button>
      <Button basic color='teal' onClick={showOtherUsers} > Other Users </Button>
    </Button.Group> }
  

</>
  )


}

export default AUser

