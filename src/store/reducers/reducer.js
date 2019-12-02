import * as actionCreator from '../actions'



const initialState = {
token: null,
id: null,
tLoading: false,
tError: [],
uLoading:false,
user:{
    name:"",
    username:"",
    email:"",
    age:null,
    photo:"",
    dob: "",
    city_state:"",
    about_me:"",
    sex:"",
    active: false


},
allUsers:{}, 
userData:{}
}

function reducer(state = initialState, action){

    switch(action.type){
        case "SET_TOKEN":
            return{
                ...state, 
                token: action.payload,
                tError:[]
            }
        case "SET_ID":
            return{
                ...state,
                 id: action.payload,
                 loading: false
            }
        case "T_LOADING":
            return{
                ...state, tLoading: action.payload
            }
        case "T_ERROR":
            return{
                ...state, tError: action.payload
            }
        case "U_LOADING":
            return{
                ...state, uLoading: action.payload
            }
        case "SET_USER":
            return{
                ...state, userData: action.payload
            }
        case "SET_ALL_USERS":
            return{
                ...state, allUsers:action.payload
            }
        case "SET_USER_USERNAME":
                return{
                    ...state, userData:{...state.userData, username:action.payload}
                }
        case "SET_USER_AGE":
                return{
                     ...state, userData:{...state.userData, age:action.payload}
                }
        case "SET_USER_NAME":
                return{
                     ...state, userData:{...state.userData, name:action.payload}
                } 
        case "SET_USER_EMAIL":
                return{
                     ...state, userData:{...state.userData, email:action.payload}
                } 
        case "SET_USER_PHOTO":
                return{
                     ...state, userData:{...state.userData, photo:action.payload}
                } 
        case "SET_USER_DOB":
                return{
                    ...state, userData:{...state.userData, dob:action.payload}
                } 
        case "SET_USER_CITY_STATE":
                return{
                     ...state, userData:{...state.userData, city_state:action.payload}
                } 
        case "SET_USER_ABOUT_ME":
                return{
                     ...state, userData:{...state.userData, about_me:action.payload}
                }   
        case "SET_USER_SEX":
                return{
                     ...state, userData:{...state.userData, sex:action.payload}
                }
        case "SET_USER_ACTIVE":
                return{
                     ...state, userData:{...state.userData, active:action.payload}
                 }
        default:
            return{
                ...state
            }
    
    }
}


export default reducer