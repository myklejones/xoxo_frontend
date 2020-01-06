import React,{useState} from 'react';
import { Route, Switch} from 'react-router'
import Login from './components/login'
import UserForm from './components/userForm'
import {useSelector, useDispatch} from 'react-redux'
import UserContainer from './components/userContainer'

import * as actionCreator from './store/actions'


function App(props) {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const user = useSelector(state => state.user)
  const {uLoading} = useSelector(state=>state.uLoading)
  const dispatch = useDispatch()


  const gotToken = (token, userId ) =>{
    localStorage.token = token
    localStorage.loggedInUserId = userId
    setToken(token)
    setUserId(userId)
    
  }
  
//   if(localStorage.loggedInUserId && !uLoading){
//     dispatch(actionCreator.getUser(localStorage.token, localStorage.loggedInUserId)) 
// }

 
  return (
    <Switch>
      <Route exact path="/login"   render={(routerProps)=><Login {...routerProps} gotToken={gotToken} /> }    />
      <Route path="/signUp"   render={(routerProps)=><UserForm   {...routerProps}  /> }    />
      <Route path="/user"   render={(routerProps)=><UserContainer  {...routerProps}  /> }    />   
    </Switch>
  
  );
}

export default App;
