import React,{useState} from 'react';
import { Route, Switch} from 'react-router'
import Login from './components/login'
import UserForm from './components/userForm'
import {useSelector, useDispatch} from 'react-redux'
import UserContainer from './components/userContainer'
import { Menu, Header, Image, Segment} from 'semantic-ui-react'

import * as actionCreator from './store/actions'


function App(props) {
  
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const {userData,user} = useSelector(state => state)
 
  const {uLoaded} = useSelector(state=>state)
  const dispatch = useDispatch()
  const [activeItem, setActiveItem] = useState("home")

  const gotToken = (token, userId ) =>{
    localStorage.token = token
    localStorage.loggedInUserId = userId 
  }
console.log(userData)
  const handleClick = (evt, {name})=>{
      setActiveItem(name)
  }

  const header = () =>{
    return (<>
    <Menu color='purple'  >
      <Header as='h3'>
        <Image circular src={user.photo} /> 
      </Header>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleClick}
          icon='home'
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleClick}
          icon='envelope'
        />
        <Menu.Item
          name='users'
          active={activeItem === 'users'}
          onClick={handleClick}
          icon='user'
        />
         <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={handleClick}
          icon='logout'
        />
      </Menu>
      <Image src={user.photo}as='a'
    size='medium'
    href='http://google.com'
    target='_blank' />
    </>
    )}

  return (
    <>
    { uLoaded ? header(): null}


    <Switch>
      <Route exact path="/login"   render={(routerProps)=><Login {...routerProps} gotToken={gotToken} /> }    />
      <Route path="/signUp"   render={(routerProps)=><UserForm   {...routerProps}  /> }    />
      <Route path={"/:username"}  render={(routerProps)=><UserContainer  {...routerProps}  /> }    />   
    </Switch>
    </>
  
  );
}

export default App;
