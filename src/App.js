import React,{useState} from 'react';
import { Route, Switch} from 'react-router'
import { Link} from 'react-router-dom'
import Login from './components/login'
import UserForm from './components/userForm'
import {useSelector, useDispatch} from 'react-redux'
import UserContainer from './components/userContainer'
import AllUserContainer from './components/allUsersContainer.js'
import { Menu, Header, Image} from 'semantic-ui-react'
import MessageContainer from './components/MessageContainer'

import * as actionCreator from './store/actions'


function App(props) {
  
 
  const {uLoaded, id,token,userData,user,activeItem, allUsers } = useSelector(state => state)
  const myState = useSelector(state => state)
  const dispatch = useDispatch()
  const [activeItemSel, setActiveItemSel] = useState("home")

  const gotToken = () =>{
    localStorage.token = token
    localStorage.loggedInUserId = id 
  }
console.log(myState )
  const handleClick = (evt, {name})=>{
    
    
    if(name === "logout"){
      setActiveItemSel("home")
      localStorage.clear()
      dispatch(actionCreator.logout(name)) 
      
      
    }else{
      dispatch(actionCreator.activeItemSetter(name))
      setActiveItemSel(name)
      }
     
  }
  
 
  const header = () =>{
    gotToken(token,id)
    return (<>
   
     <Menu color='blue'  >
      <Header as='h3'>
        <Image circular src={userData.photo} /> 
      </Header>
        <Menu.Item

          name='home'
          active={activeItemSel === 'home'}
          onClick={handleClick}
          icon='home'
          as={Link}
          to={`/${userData.username}`}
          
        />
        <Menu.Item
          name='messages'
          active={activeItemSel === 'messages'}
          onClick={handleClick}
          icon='envelope'
          as={Link}
          to={`/${userData.username}/messages`}

        />
        <Menu.Item
          name='users'
          active={activeItemSel === 'users'}
          onClick={handleClick}
          icon='user'
          as={Link}
          to={`/${userData.username}/users`}
        />
  

         <Menu.Item
          name='logout'
          active={activeItemSel === 'logout'}
          onClick={handleClick}
          icon='logout'
          as={Link}
          to={`/login`}
        />
      </Menu> 
      
    </>
    )}

  return (
    <>
    { uLoaded ? header(): null}


    <Switch>
      <Route exact path="/login"   render={(routerProps)=><Login {...routerProps}  /> }    />
      <Route path="/signUp"   render={(routerProps)=><UserForm   {...routerProps}  /> }    />
      <Route exact path={`/${userData.username}`}  render={(routerProps)=><UserContainer  {...routerProps}   /> }    />   
      <Route exact path={`/${userData.username}/users`}  render={(routerProps)=><AllUserContainer  {...routerProps}  /> }    />
      <Route exact path={`/${userData.username}/messages`}  render={(routerProps)=><MessageContainer  {...routerProps}  /> }    />   
    </Switch>
    </>
  
  );
}

export default App;
