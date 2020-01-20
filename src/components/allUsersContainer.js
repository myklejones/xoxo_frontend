import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'
import AUser from './aUser'
import {Form, TextArea, Header, Card, Grid, Image,Container, Button} from 'semantic-ui-react'

function AllUsersContainer(props){
   
    const {allUsers, interactingUser, userData, oneUser} = useSelector(state => state)
   
    const dispatch = useDispatch()
    
    

    useEffect(()=>{
        },[])

        const userClicked = (evt) =>{
            
            let selectedUserId =  parseInt(evt.target.parentElement.id)
            const filteredUser = allUsers.find((idNum)=>{return(idNum.id === selectedUserId)})
            dispatch(actionCreator.interactingUser(filteredUser))
            dispatch(actionCreator.oneUser(!oneUser))
        }
        const showOtherUsers = (evt) =>{
            dispatch(actionCreator.interactingUser({})) 
            dispatch(actionCreator.oneUser(!oneUser))
        }
        const messageUserclicked = ()=>{
            props.history.push(`/${userData.username}/conversations/${interactingUser.id}`)

        }
        
       const showOneUser = () => {
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
                                <Button.Group attached='bottom' > 
                                    <Button basic color='blue' onClick={messageUserclicked} > Message </Button>
                                    <Button basic color='teal' onClick={showOtherUsers} > Other Users </Button>
                                </Button.Group>
                                    
                </>
            )
       }
        const showUsers = () =>{
            return(
                <>
          
                <Card.Group itemsPerRow={5}>
                    {allUsers.filter(u => u.id !== parseInt(localStorage.loggedInUserId)).map(auser => {
                            return(
                          <Card color='blue'id={auser.id} onClick={userClicked} >
                            <Image id={auser.id}  src={auser.photo}  wrapped ui={false} />
                            <Card.Content id={auser.id} >
                            <Card.Header id={auser.id} >{auser.username}</Card.Header>
                            <Card.Meta id={auser.id}  >{auser.city_state} </Card.Meta>
                            </Card.Content>
                         </Card>
                        )}
                    )}
  
                </Card.Group>
                </>
            )}
return(
    <>
    

   
    {oneUser ? showOneUser() : showUsers()}
  
 {/* {props.users.filter(us => us.id !== parseInt(localStorage.loggedInUserId)).map(user=><AUser aUser={user} />)} */}
   
    </>
)
}
export default AllUsersContainer