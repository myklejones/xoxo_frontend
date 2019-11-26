 const API_URL = 'http://localhost:3000'

//  const headers = {
//      Accepts: 'application/json',
//      'Content-type' : 'application/json'
//  }



 const login = (username, password) => {
     return fetch(`${API_URL}/login`,{
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
 } 



 const currentUser = (token, id ) => {
     console.log(token,id)
    return fetch(`${API_URL}/users/${id}`,{
      headers: {
        "Authorization": token
       
      } 

    }).then(res=>res.json())
 }

 export default {login,currentUser};