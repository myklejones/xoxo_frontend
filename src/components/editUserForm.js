import React,{ useState, useEffect, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import * as actionCreator from '../store/actions'

function EditUserForm(props){

        const user = useSelector(state => state.user)
        const errorUpdate = useSelector(state => state.errorUpdatingUser)
        const [password, setPassword] = useState("")
        const [username, setUsername] = useState(user.username)
        const [name, setName] = useState(user.name)
        const [age, setAge] = useState(user.age)
        const [dob, setDob] = useState(user.dob)
        const [cityState, setCityState] = useState(user.city_state)
        const [aboutMe, setAboutMe] = useState(user.about_me)
        const [sex, setSex] = useState(user.sex)
        const dispatch = useDispatch()


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


const editFormSubmit= (evt) =>{
    evt.preventDefault()
let userInfo = {
    username: username,
    name: name,
    age: age,
    dob: dob,
    city_state: cityState,
    about_me: aboutMe,
    sex: sex
}



dispatch(actionCreator.editUserProfile(userInfo, localStorage.token, localStorage.loggedInUserId))

}


console.log(errorUpdate)
return(

 
    <>
{errorUpdate.errors ? errorUpdate.errors.map(e => <li>{e}</li>) :null}
    <form  onSubmit={editFormSubmit} >
        <ol>
            <label htmlFor="username">Username </label>
     <input
     id="username"
      type="text"
      onChange = {formInput}
      name="username"
      value={username} 
      placeholder={user.username}
      />
        </ol>
       <ol><label htmlFor="name">Name </label>
     <input
     id="name"
      type="text"
      onChange = {formInput}
      name="name"
      value={name} 
      autoComplete="off"
      placeholder={user.name}
      /></ol>
       {/* <label htmlFor="password">password </label>
     <input
     id="password"
      type="password"
      onChange = {formInput}
      name="password"
      value={password} 
      /> */}
      <ol><label htmlFor="age">Age </label>
     <input
     id="age"
      type="number"
      onChange = {formInput}
      name="age"
      value={age} 
      autoComplete="off"
      placeholder={user.age}
      /></ol>

      <ol><label htmlFor="dob">Birthdate </label>
     <input
     id="dob"
      type="text"
      onChange = {formInput}
      name="dob"
      value={dob} 
      autoComplete="off"
      placeholder={user.dob}
      /></ol>



     <ol><label htmlFor="city_state">City & State </label>
     <input
     id="city_state"
      type="text"
      onChange = {formInput}
      name="cityState"
      value={cityState} 
      autoComplete="off"
      placeholder={user.city_state}
      /></ol> 

    <ol><label htmlFor="aboutMe">About Me </label>
     <input
     id="aboutMe"
      type="text"
      onChange = {formInput}
      name="aboutMe"
      value={aboutMe} 
      autoComplete="off"
      placeholder={user.about_me}
      /></ol>
       
       <ol><input
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
     
   />other</ol>


     <button type="submit" value="Submit">Submit</button>
 
</form>


</>
)
}
export default EditUserForm