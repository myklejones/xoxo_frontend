import React,{ useState, useEffect} from 'react';
import adapter from '../services/adapter'
import {useSelector, useDispatch} from 'react-redux'

function Login(props) {

    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [errors, setErrors] = useState(false)

    const token = useSelector(state => state.token)
    const id = useSelector(state => state.id)
    const dispatch = useDispatch()
   

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

    const loginSubmit = async (evt) =>{
        evt.preventDefault()
       let response =  await adapter.login(username,password)
       response.errors ? setErrors(true) :  setErrors(false)
         dispatch({type:"SET_TOKEN", payload: response.token})
         dispatch({type:"SET_ID", payload: response.user_id})  
       dispatchUser(response) 
       //    let currentUserInfo = await adapter.currentUser(token,id)
    }
    
    const dispatchUser = async (response) =>{  
    let currentUserInfo = await adapter.currentUser(token,id)
    console.log(currentUserInfo)
       
    }
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
                    {errors ? <li>Username or password does not match</li>: null}
            
           </form>
           <button onClick={signUpClicked}>Sign up</button>
           </>
        )
    
}

export default Login