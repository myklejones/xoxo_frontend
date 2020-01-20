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
    sex: sex,
    id:localStorage.loggedInUserId
   
}



dispatch(actionCreator.editUserProfile(userInfo, localStorage.token, localStorage.loggedInUserId))

}


console.log(errorUpdate)
return(

 
    <>
{errorUpdate.errors ? errorUpdate.errors.map(e => <li>{e}</li>) :null}


</>
)
}
export default EditUserForm