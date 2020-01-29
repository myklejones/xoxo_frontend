import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'
import AUser from './ASinlgleUser'
import {Form, TextArea, Header, Card, Grid, Image,Container, Button} from 'semantic-ui-react'

function AllUsersContainer(props){
   
    const {allUsers, interactingUser, userData, oneUser, userConversations} = useSelector(state => state)
   
    const dispatch = useDispatch()
    
    

    useEffect(()=>{
        },[])

        const userClicked = (evt) =>{
            console.log(interactingUser)
            let selectedUserId =  parseInt(evt.target.parentElement.id)
            const filteredUser = allUsers.find((idNum)=>{return(idNum.id === selectedUserId)})
            dispatch(actionCreator.interactingUser(filteredUser))
           userConversations.map(c=>{
               if(c.attributes.sender_id === selectedUserId || c.attributes.recipient_id === selectedUserId){
                dispatch(actionCreator.interactingConvo(c))
               }else{
                dispatch(actionCreator.interactingConvo({}))
               }
           })
            props.history.push(`users/${filteredUser.username}`)
        }
        
     
      
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
            )

}
export default AllUsersContainer