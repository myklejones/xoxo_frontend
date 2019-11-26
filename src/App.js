import React,{useState} from 'react';
import { Route, Switch, NavLink, Redirect} from 'react-router'
import Login from './components/login'
import UserForm from './components/userForm'


function App() {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)

  const gotToken = (token, userId ) =>{
    localStorage.token = token
    localStorage.loggedInUserId = userId
    setToken(token)
    setUserId(userId)
    
  }


  return (
    <Switch>
      <Route exact path="/login"   render={(routerProps)=><Login {...routerProps} gotToken={gotToken} /> }    />
      <Route path="/signUp"   render={(routerProps)=><UserForm   {...routerProps}  /> }    />

    </Switch>
  
  );
}

export default App;
