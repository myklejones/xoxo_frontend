import React,{ useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'

function Login(props) {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const dispatch = useDispatch()
    const {token, id,tLoaded,tError,uLoaded} = useSelector(state=>state)
    const st = useSelector(state=>state)
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
        console.log("login clicked")
        dispatch(actionCreator.gotToken( username, password))  
     
       
    }

    const getUser = (token,id) =>{
        dispatch(actionCreator.getUser(token, id)) 
    }

    const pushUser = () =>{
        props.history.push(`user`)
    }
    
    
    
    if(tLoaded ){
        getUser(token, id)  
    } 
    if(uLoaded){
      props.gotToken(token,id)
      pushUser()
    }
    
    useEffect(()=>{
    if(localStorage.token&&localStorage.loggedInUserId){
      getUser(localStorage.token,localStorage.loggedInUserId)  
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
                      id="login_username"/>
                    </div>
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

