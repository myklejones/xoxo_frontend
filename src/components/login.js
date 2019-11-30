import React,{ useState, useEffect} from 'react';
import adapter from '../services/adapter'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'

function Login(props) {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const aToken = useSelector(state => state.aToken)
    const id = useSelector(state => state.id)

    const userInput = (evt) => {
       switch(evt.target.name){
            case "username":
               setUsername(evt.target.value)
               break;
            case "password":
                setPassword(evt.target.value)
                break;
       }
    }
    const signUpClicked = () =>{
        props.history.push('/signUp')
    }

    const loginSubmit = (evt) =>{
        evt.preventDefault()       
        actionCreator.gotToken(username,password)
    }
    console.log(loginSubmit)

    
    console.log(aToken)
   
        return(
            <>
            <form onSubmit={loginSubmit} >
               <label htmlFor="login_username">Username </label>
                <input
                id="login_username"
                 type="text"
                 onChange = {userInput}
                 name="username"
                 value={username} 
                 />
                 <label htmlFor="login_user_password">Password </label>
                <input
                id="login_user_password"
                 type="password"
                 onChange = {userInput}
                 name="password"
                 value={password} 
                 autoComplete="off"
                 />
                <button type="submit" value="Login">Login</button>
                    {/* {errors ? <li>Username or password does not match</li>: null} */}
            
           </form>
           <button onClick={signUpClicked}>Sign up</button>
           </>
        )
    
}

export default Login