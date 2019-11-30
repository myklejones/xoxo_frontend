import adapter from '../services/adapter'
    


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
        let action = gotTokenAsync(res.token)
        dispatch(action)
    })
}

