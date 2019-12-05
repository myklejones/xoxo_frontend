import React,{ useState, useEffect, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'

function UserForm(props){

    const dispatch = useDispatch()
    const created = useSelector(state=> state.newUserCreated)
    const newUserError = useSelector(state => state.newUserError)


        const [password, setPassword] = useState("")
        const [username, setUsername] = useState("")
        const [name, setName] = useState("")
        const [age, setAge] = useState("")
        const [dob, setDob] = useState("")
        const [cityState, setCityState] = useState("")
        const [aboutMe, setAboutMe] = useState("")
        const [sex, setSex] = useState("")
        const [email, setEmail] = useState("")
        const [photo, setPhoto] = useState("")
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
        case "email":
            setEmail(evt.target.value)
            break;
        case "photo" :
            setPhoto(evt.target.value)

   }

}

const loginClicked = () => {
    props.history.push('/login')
}


const formSubmit = (e)=>{
e.preventDefault() 
let data = {
    username: username,
    name: name,
    password: password,
    age: age,
    city_state: cityState,
    about_me: aboutMe,
    sex:sex,
    email: email,
    photo: photo,
    dob: dob,
    active: false
   
}
dispatch( actionCreator.newUser(data))

}

console.log(created)

return(
    <>
    {created ? loginClicked(): null}
    {newUserError.errors ? newUserError.errors.map(error=> <li>{error}</li>) : null}
    <form onSubmit={formSubmit}>

        <h1>Create New User</h1>
        <ol><label htmlFor="username">Username </label>
     <input
     id="username"
      type="text"
      onChange = {formInput}
      name="username"
      value={username} 
      /></ol>

    <ol> <label htmlFor="password">password </label>
     <input
     id="password"
      type="password"
      onChange = {formInput}
      name="password"
      value={password} 
      /></ol>

<ol>
      <label htmlFor="email">email </label>
     <input
     id="email"
      type="text"
      onChange = {formInput}
      name="email"
      value={email} 
      autoComplete="off"
      /></ol>

    
    <ol>
      <label htmlFor="name">Name </label>
     <input
     id="name"
      type="text"
      onChange = {formInput}
      name="name"
      value={name} 
      autoComplete="off"
      /></ol>

<ol>
      <label htmlFor="photo">Photo </label>
     <input
     id="photo"
      type="text"
      onChange = {formInput}
      name="photo"
      value={photo} 
      autoComplete="off"
      /></ol>

    <ol>
      <label htmlFor="age">Age </label>
     <input
     id="age"
      type="number"
      onChange = {formInput}
      name="age"
      value={age} 
      autoComplete="off"
      /></ol>

    <ol><label htmlFor="dob">Birthdate </label>
     <input
     id="dob"
      type="text"
      onChange = {formInput}
      name="dob"
      value={dob} 
      autoComplete="off"
      /></ol>
      
     
      <ol><label htmlFor="city_state">City & State </label>
     <input
     id="city_state"
      type="text"
      onChange = {formInput}
      name="cityState"
      value={cityState} 
      autoComplete="off"
      /></ol>

       <ol><label htmlFor="aboutMe">About Me </label>
     <input
     id="aboutMe"
      type="text"
      onChange = {formInput}
      name="aboutMe"
      value={aboutMe} 
      autoComplete="off"
      /></ol>
       
       <ol> <input
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
</ol>

{/* <label htmlFor="sex">Sex </label> */}
    


     <button type="submit" value="submit">Create User</button>
 
</form>
<button onClick={loginClicked}>Login</button>

</>
)
}
export default UserForm