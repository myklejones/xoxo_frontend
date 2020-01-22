
    


export const token = (json) => {
    return{
        type:"SET_TOKEN", payload: json
    }
};
 export const gotId = (json) => {
    return{
        type:"SET_ID", payload: json
    }
};
export const tLoaded = (bool) => {
    return{
        type:"T_LOADED", payload: bool
    }
};
export const tError = (json) => {
    return{
        type:"T_ERROR", payload: json
    }
};
export const gotToken = (username, password) => (dispatch) =>{
    dispatch(userLoading(true))
    fetch('http://localhost:3000/login',{
        method: 'POST',
        headers:{
           Accepts: 'application/json',
           'Content-type' : 'application/json'
       },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(res=>res.json())
    .then((res) =>{
       if(res.errors ){ 
           dispatch(tError(res.errors))
        }else{
    
          dispatch(token(res.token))
          dispatch(gotId(res.user_id))
          dispatch(tLoaded(true))
        }
    })
}
export const userLoading = (data) =>{
    return{
        type:"U_LOADING", payload: data
    }
}
export const userLoaded = (bool) =>{
    return{
        type:"U_LOADED", payload: bool
    }
}
export const gotUser = (data) =>{
    return{
        type:"SET_USER" , payload: data
    }
}
export const gotAllUser = (data) =>{
    return{
        type:"SET_ALL_USERS" , payload: data
    }
}
export const getUser = (token, id) => dispatch =>{  
    dispatch(tLoaded(false))
  
    fetch(`http://localhost:3000/users/${id}`,{
        headers:{
            Accepts: 'application/json',
            'Content-type' : 'application/json',
            "Authorization": token
        } 
    })
    .then(res => res.json())
    .then(res =>{
        debugger
        dispatch(gotUser(res.user.data.attributes))
        dispatch(gotAllUser(res.all_users))
        dispatch(userLoaded(true))
        dispatch(userLoading(false))  
    })
} 
export const updatingUser = (bool) =>{
    return{
        type:"UPDATING_USER" , payload: bool
    }
}
export const errorUpdatingUser = (error) =>{
    return{
        type:"ERROR_UPDATING_USER" , payload: error
    }
}
export const editUserProfile = (userinfo,token,id) => dispatch => {
dispatch(updatingUser(true))
    fetch(`http://localhost:3000/users/${id}`,{
        headers:{
            Accepts: 'application/json',
            'Content-type' : 'application/json',
            "Authorization": token
        },
        method: "PUT",
        body: JSON.stringify(userinfo)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if( data.errors ){
            console.log(data)
         dispatch(errorUpdatingUser(data))   
        }else{
            dispatch(gotUser(data.user))
            dispatch(updatingUser(false))
        }
    })
}
export const newUserError = (data) =>{
    return{
        type:"NEW_USER_ERROR" , payload: data
    }
}
export const newUserCreated = (data) =>{
    return{
        type:"NEW_USER_CREATED" , payload: data
    }
}
export const newUser = (userinfo) => dispatch => {
   
        fetch(`http://localhost:3000/users`,{
            headers:{
                Accepts: 'application/json',
                'Content-type' : 'application/json',
                
            },
            method: "POST",
            body: JSON.stringify(userinfo)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.errors){
                dispatch(newUserError(data))
            }else{
                dispatch(newUserCreated(true))

            }
           
        })
    
    }
export const sendMessageLoading = (bool) =>{
 return{
        type:"SEND_MESSAGE_LOADING" , payload: bool
    }
}
export const sendMessageLoaded = (data) =>{

    return{
        type:"SEND_MESSAGE_LOADED" , payload: data
    }
}
export const sendMessageError = (data) =>{

    return{
        type:"SEND_MESSAGE_ERROR" , payload: data
    }
}
export const sendMessage = (message, token,sender_id, reciever_id)=>dispatch=>{
        console.log(message, token,sender_id, reciever_id)
        dispatch(sendMessageLoading(true))
        fetch(`http://localhost:3000/conversations`,{
            headers:{
                Accepts: 'application/json',
                'Content-type' : 'application/json',
                "Authorization": token
            },
            method: "POST",
            body: JSON.stringify({
               
                conversation:{
                    sender_id: sender_id,
                    recipient_id: reciever_id
                },
                message:{
                    user_id: sender_id, 
                    body: message,
                    read: false, 
                    message_reciever_id: reciever_id
                }
                
            })
        }).then(res => res.json())
        .then(res =>{
            console.log(res)
        })
    }
    
export const setActiveItem = (data) =>{
        
        return{
            type:"SET_ACTIVE_ITEM" , payload: data
        }
    }
    
export const activeItemSetter = (data)=>dispatch=>{
        
        dispatch(setActiveItem(data))
    }
export const logout = (data = "home")=>dispatch=>{
                
                    dispatch(userLoaded(false))
                    dispatch(setActiveItem(data))
                }
export const userIsLoaded = (bool)=>dispatch=>{
                    dispatch(userLoaded(bool))
                }
export const setInteractingUser = (data)=>{
                    return{
                       type:"SET_INTERACTING_USER" , payload: data  
                    }
                }
export const interactingUser = data => dispatch =>{
                    dispatch(setInteractingUser(data))

                }
export const setOneUser = data =>{
    return{
        type: "SET_ONE_USER", payload: data
    }
}                
export const oneUser = data => dispatch =>{
    dispatch(setOneUser(data))
}