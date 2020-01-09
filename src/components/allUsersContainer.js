import React,{useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'
import AUser from './aUser'
import { Card, Grid, Image} from 'semantic-ui-react'

function AllUsersContainer(props){
   
    const {uLoaded, id,token,userData,user,activeItem, allUsers } = useSelector(state => state)
    const [oneUser, setOneUser] = useState(false)
    
    

    useEffect(()=>{
        },[])

        const userClicked = ( evt) =>{
            console.log("goodies")

            setOneUser(!oneUser)
        }
       const showOneUser = () => {
           return(
                <>
                <h1 onClick={userClicked}>hiii</h1>
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
                            <Image src={auser.photo} size="medium" wrapped fluid ui={false} />
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