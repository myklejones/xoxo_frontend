import React,{ useState, useEffect, Fragment} from 'react';

function UserForm(props){

    

        const [password, setPassword] = useState("")
        const [username, setUsername] = useState("")
        const [name, setName] = useState("")
        const [age, setAge] = useState("")
        const [dob, setDob] = useState("")
        const [cityState, setCityState] = useState("")
        const [aboutMe, setAboutMe] = useState("")
        const [sex, setSex] = useState("")
    
const formInput= (evt)=>{
    switch(evt.target.name){
        case "username":
           setUsername(evt.target.value)
           break;
        case "password":
            setPassword(evt.target.value)
            break;
        case "name":
            setName(evt.target.value)
            break;
        case "age":
            setAge(evt.target.value)
            break;
        case "dob":
            setDob(evt.target.value)
            break;
        case "cityState":
            setCityState(evt.target.value)
            break;
        case "aboutMe":
            setAboutMe(evt.target.value)
            break;
        case "sex":
            setSex(evt.target.value)
            break;
   }

}

const loginClicked = () => {
    props.history.push('/login')
}




return(
    <>
    <form >
    <label htmlFor="username">Username </label>
     <input
     id="username"
      type="text"
      onChange = {formInput}
      name="username"
      value={username} 
      />
       <label htmlFor="password">password </label>
     <input
     id="password"
      type="password"
      onChange = {formInput}
      name="password"
      value={password} 
      />
      <label htmlFor="name">Name </label>
     <input
     id="name"
      type="text"
      onChange = {formInput}
      name="name"
      value={name} 
      autoComplete="off"
      />
      <label htmlFor="age">Age </label>
     <input
     id="age"
      type="number"
      onChange = {formInput}
      name="age"
      value={age} 
      autoComplete="off"
      />
     <label htmlFor="dob">Birthdate </label>
     <input
     id="dob"
      type="text"
      onChange = {formInput}
      name="dob"
      value={dob} 
      autoComplete="off"
      />
       <label htmlFor="city_state">City & State </label>
     <input
     id="city_state"
      type="text"
      onChange = {formInput}
      name="city_state"
      value={cityState} 
      autoComplete="off"
      />
       <label htmlFor="aboutMe">About Me </label>
     <input
     id="aboutMe"
      type="text"
      onChange = {formInput}
      name="aboutMe"
      value={aboutMe} 
      autoComplete="off"
      />

{/* <label htmlFor="sex">Sex </label> */}
     <input
     id="sex"
      type="radio"
      onChange = {formInput}
      name="sex"
      value="male" 
    />male
    <input
     id="sex"
      type="radio"
      onChange = {formInput}
      name="sex"
      value="felmale" 
    /> female
    <input
    id="sex"
     type="radio"
     onChange = {formInput}
     name="sex"
     value="other" 
   />other



     <button type="submit" value="Login">Create User</button>
 
</form>

<button onClick={loginClicked}>Login</button>
</>
)
}
export default UserForm