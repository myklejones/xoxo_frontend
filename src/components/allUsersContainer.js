import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'
import AUser from './aUser'
import {Header, Card, Grid, Image,Container, Divider} from 'semantic-ui-react'

function AllUsersContainer(props){
   
    const {uLoaded, id,token,userData,user,activeItem, allUsers } = useSelector(state => state)
    const [oneUser, setOneUser] = useState(false)
    const [theUser, setTheUser] = useState({})
    
    

    useEffect(()=>{
        },[])

        const userClicked = (evt) =>{
            let selectedUserId =  parseInt(evt.target.parentElement.parentElement.id)
            const filteredUser = allUsers.find((idNum)=>{return(idNum.id === selectedUserId)})
           

            setTheUser(filteredUser)
            setOneUser(!oneUser)
        }
       const showOneUser = () => {
           return(
                <>
                <h1 onClick={userClicked}>hiii</h1>
                    
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
                                                About me
                                           </Header>
                                           {theUser.about_me}
                                        </Container>

                                    
                </>
            )
       }
        const showUsers = () =>{
            return(
                <>
          
                <Card.Group itemsPerRow={5}>
                    {allUsers.map(auser => {
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