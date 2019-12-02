
    


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



export const gotToken = (username, password) => (dispatch) =>{
    dispatch(tLoading(true))
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
          dispatch(userLoading(true))  
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






export const getUser = (token, id) => dispatch =>{
    
    fetch(`http://localhost:3000/users/${id}`,{
        headers:{
            Accepts: 'application/json',
            'Content-type' : 'application/json',
            "Authorization": token
        }
    }).then(res => res.json())
    .then(res =>{
        dispatch(userLoading(false))
        dispatch(gotUser(res.user))
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
       


    })
} 
