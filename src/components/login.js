import React,{ useState, useEffect} from 'react';
import adapter from '../services/adapter'
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'

function Login(props) {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const dispatch = useDispatch()
    // const aToken = useSelector(state => state.token)
    // const id = useSelector(state => state.id)
    // const errors = useSelector(state => state.tError)
    const {token, id,tLoading,tError,uLoading} = useSelector(state=>state)
    const user = useSelector(state=>state.user)
    const userData = useSelector(state=>state.userData)
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

    const loginSubmit =  (evt) =>{
        evt.preventDefault()       
        dispatch(actionCreator.gotToken( username, password))  
    }

    const getUser = (token,id) =>{
        props.gotToken(token,id)
        dispatch(actionCreator.getUser(token, id)) 
    }

    const pushUser = () =>{
        props.history.push(`/${user.data.attributes.username}`)
    }

console.log(uLoading)

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
                    {tError[0] ? <li>{tError[0]}</li>: null}
                
            
           </form>
           <button onClick={signUpClicked}>Sign up</button>
           </>
        )
    
}

export default Login