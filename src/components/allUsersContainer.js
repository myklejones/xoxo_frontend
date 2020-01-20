import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'
import AUser from './aUser'
import {Form, TextArea, Header, Card, Grid, Image,Container, Button} from 'semantic-ui-react'

function AllUsersContainer(props){
   
    const {uLoaded, id,token,userData,user,activeItem, allUsers } = useSelector(state => state)
    const [oneUser, setOneUser] = useState(false)
    const [theUser, setTheUser] = useState({})
    const [messageinput,setMessageInput] = useState('')
    const [messageForUser, setMessageForUser] = useState(false)
    
    

    useEffect(()=>{
        },[])

        const userClicked = (evt) =>{
            let selectedUserId =  parseInt(evt.target.parentElement.parentElement.id)
            const filteredUser = allUsers.find((idNum)=>{return(idNum.id === selectedUserId)})
           

            setTheUser(filteredUser)
            setOneUser(!oneUser)
        }
        const messageUserclicked = ()=>{
            setMessageForUser(!messageForUser)

        }

        const sendMeesageToUser =(e)=>{
            e.preventDefault()
                console.log(e)
        }
        const messageInput= (evt)=>{
            setMessageInput(evt.target.value)
            console.log(messageinput)
        
        }
        
       const showOneUser = () => {
           return(
                <>
                                            <Image src={theUser.photo} 
                                              centered
                                              size='medium'
                                              attached='top'
                                              
                                              />
                                        <Header as='h1' fluid textAlign='center'  attached >
                                            {theUser.username}, {theUser.age}
                                        </Header>
                                        <Container fluid > 
                                           <Header as='h3' >
                                                City/state
                                           </Header>
                                           {theUser.city_state}
                                           <Header as='h3' >
                                                Occupation
                                           </Header>
                                           {theUser.profession}
                                           <Header as='h3' >
                                                About me
                                           </Header>
                                           {theUser.about_me}
                                           <Header as='h3' >
                                                Interested in
                                           </Header>
                                           {theUser.interest}
                                           <Header as='h3' >
                                                Body Type
                                           </Header>
                                           {theUser.body_type}
                                        </Container>
                                       {messageForUser ? <Form onSubmit={sendMeesageToUser} >
                                             <TextArea onChange={messageInput} style={{ minHeight: 100 }} />
                                             <Button basic color='red'  type='submit' > Send</Button>
                                         </Form> : null } 
                                <Button.Group attached='bottom' > 
                                    <Button basic color='blue' onClick={messageUserclicked} > Message </Button>
                                    <Button basic color='teal' onClick={userClicked} > Other Users </Button>
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
                            <Image src={auser.photo} size="medium" wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>{auser.username}</Card.Header>
                            <Card.Meta>{auser.city_state} </Card.Meta>
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