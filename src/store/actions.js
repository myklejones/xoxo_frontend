
    


  export const gotTokenAsync = (json) => {
    return{
        type:"SET_TOKEN", payload: json
    }
};

 export const gotId = (json) => {
    return{
        type:"SET_ID", payload: json
    }
};

export const tLoading = (bool) => {
    return{
        type:"T_LOADING", payload: bool
    }
}


export const tError = (json) => {
    return{
        type:"T_ERROR", payload: json
    }
}

export const userLoading = (data) =>{
    return{
        type:"U_LOADING", payload: data
    }
}

export const userLoaded = (data) =>{
    return{
        type:"U_LOADED", payload: data
    }
}


export const gotToken = (username, password) => (dispatch) =>{
   
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
    }).then(res=>res.json())
    .then(res =>{
       if(res.errors ){ 
      
           dispatch(tError(res.errors))
        }else{
          dispatch(gotTokenAsync(res.token))
          dispatch(gotId(res.user_id))
          dispatch(tLoading(true))
        }
    
    })
}

export const gotUser = (data) =>{
    return{
        type:"SET_USER" , payload: data
    }
}


export const gotAllUser = (data) =>{
    return{
        type:"SET_ALL_USER" , payload: data
    }
}

export const gotUserName = (data) =>{
    return{
        type:"SET_USER_NAME" , payload: data
    }
}

export const gotUserUsername = (data) =>{
    return{
        type:"SET_USER_USERNAME" , payload: data
    }
}
export const gotUserAge = (data) =>{
    return{
        type:"SET_USER_AGE" , payload: data
    }
}
export const gotUserEmail = (data) =>{
    return{
        type:"SET_USER_EMAIL" , payload: data
    }
}
export const gotUserPhoto = (data) =>{
    return{
        type:"SET_USER_PHOTO" , payload: data
    }
}
export const gotUserDob = (data) =>{
    return{
        type:"SET_USER_DOB" , payload: data
    }
}
export const gotUserCityState = (data) =>{
    return{
        type:"SET_USER_CITY_STATE" , payload: data
    }
}
export const gotUserAboutMe = (data) =>{
    return{
        type:"SET_USER_ABOUT_ME" , payload: data
    }
}
export const gotUserSex = (data) =>{
    return{
        type:"SET_USER_SEX" , payload: data
    }
}
export const gotUserActive = (data) =>{
    return{
        type:"SET_USER_ACTIVE" , payload: data
    }
}

export const gotUserId = (data) =>{
    return{
        type:"SET_USER_ID" , payload: data
    }
}

export const logout = (bool) => dispatch =>{

    dispatch(userLoading(bool)) 
}

export const getUser = (token, id) => dispatch =>{
    
    fetch(`http://localhost:3000/users/${id}`,{
        headers:{
            Accepts: 'application/json',
            'Content-type' : 'application/json',
            "Authorization": token
        } 
    }).then(res => res.json())
    .then(res =>{
        console.log(res)
        dispatch(tLoading(false))
        dispatch(gotUser(res.all_users))
        dispatch(gotAllUser(res.all_users))
        dispatch(gotUserName(res.user.data.attributes.name))
        dispatch(gotUserUsername(res.user.data.attributes.username))
        dispatch(gotUserAge(res.user.data.attributes.age))
        dispatch(gotUserEmail(res.user.data.attributes.email))
        dispatch(gotUserPhoto(res.user.data.attributes.photo))
        dispatch(gotUserDob(res.user.data.attributes.dob))
        dispatch(gotUserCityState(res.user.data.attributes.city_state))
        dispatch(gotUserAboutMe(res.user.data.attributes.about_me))
        dispatch(gotUserSex(res.user.data.attributes.sex))
        dispatch(gotUserActive(res.user.data.attributes.active))
        dispatch(gotUserId(res.user.data.attributes.id))
        
        dispatch(userLoading(true))  
        


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
console.log(userinfo)
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
            dispatch(updatingUser(false))
            dispatch(gotUserName(data.user.name))
            dispatch(gotUserUsername(data.user.username))
            dispatch(gotUserAge(data.user.age))
            dispatch(gotUserEmail(data.user.email))
            dispatch(gotUserPhoto(data.user.photo))
            dispatch(gotUserDob(data.user.dob))
            dispatch(gotUserCityState(data.user.city_state))
            dispatch(gotUserAboutMe(data.user.about_me))
            dispatch(gotUserSex(data.user.sex)) 

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
                body:message,
                sender_id: sender_id,
                recipient_id: reciever_id,
                user_id: sender_id
            })
        }).then(res => res.json())
        .then(res =>{
            console.log(res)
        })
    }
    
