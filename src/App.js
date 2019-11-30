import React,{useState} from 'react';
import { Route, Switch} from 'react-router'
import Login from './components/login'
import UserForm from './components/userForm'


function App(props) {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)

  const gotToken = (token, userId ) =>{
    localStorage.token = token
    localStorage.loggedInUserId = userId
    setToken(token)
    setUserId(userId)
    
  }
console.log(props)

  return (
    <Switch>
      <Route exact path="/login"   render={(routerProps)=><Login {...routerProps} gotToken={gotToken} /> }    />
      <Route path="/signUp"   render={(routerProps)=><UserForm   {...routerProps}  /> }    />

    </Switch>
  
  );
}

export default App;
