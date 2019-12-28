import React,{ useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'

function Login(props) {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const dispatch = useDispatch()
    const created = useSelector(state=> state.newUserCreated)

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
        localStorage.pass = password
        dispatch(actionCreator.gotToken( username, password))  
        // dispatch(actionCreator.getUser(token, id)) 
        
    }

    const getUser = (token,id) =>{
        props.gotToken(token,id)
        dispatch(actionCreator.getUser(token, id)) 
    }

    const pushUser = () =>{
        props.history.push(`user`)
    }

    
    if(tLoading){
        props.gotToken(token,id) 
        getUser(token, id)
    } 
    if(uLoading){pushUser()}
    useEffect(()=>{
    if(localStorage.loggedInUserId && !uLoading){
        dispatch(actionCreator.getUser(localStorage.token, localStorage.loggedInUserId)) 
    }


},[])



    return(
            <>
           <div class="ui inverted segment blue">
  <form onSubmit={loginSubmit} class="ui inverted form ">
    <div class="equal width fields">
      <div class="field">
        <label>Username</label>
        <div class="ui fluid input"><input
         type="text" 
         placeholder="Username" 
         value={username} 
        onChange = {userInput}
        name="username"
        id="login_username"
         /></div>
      </div>
      <div class="field">
        <label>Password</label>
        <div class="ui fluid input"><input 
        laceholder="Password" 
        id="login_user_password"
        type="password"
        onChange = {userInput}
        name="password"
        value={password} 
        autoComplete="off"

        
        /></div>
      </div>
    </div>
    <button type="submit" class="ui basic button ">Login</button>
  </form>
</div>
           <button class="ui basic button blue" onClick={signUpClicked}>Sign up</button>
   {tError.errors ? console.log(tError):null}
           </>
        )
    
}

export default Login

