
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
    active: false,
    id:null


},
allUsers:{}, 
userData:[],
updatingUser: false,
errorUpdatingUser: {},
newUserError:{},
newUserCreated: false
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
                    ...state, user:{...state.user, username:action.payload}
                }
        case "SET_USER_AGE":
                return{
                     ...state, user:{...state.user, age:action.payload}
                }
        case "SET_USER_NAME":
                return{
                     ...state, user:{...state.user, name:action.payload}
                } 
        case "SET_USER_EMAIL":
                return{
                     ...state, user:{...state.user, email:action.payload}
                } 
        case "SET_USER_PHOTO":
                return{
                     ...state, user:{...state.user, photo:action.payload}
                } 
        case "SET_USER_DOB":
                return{
                    ...state, user:{...state.user, dob:action.payload}
                } 
        case "SET_USER_CITY_STATE":
                return{
                     ...state, user:{...state.user, city_state:action.payload}
                } 
        case "SET_USER_ABOUT_ME":
                return{
                     ...state, user:{...state.user, about_me:action.payload}
                }   
        case "SET_USER_SEX":
                return{
                     ...state, user:{...state.user, sex:action.payload}
                }
        case "SET_USER_ACTIVE":
                return{
                     ...state, user:{...state.user, active:action.payload}
                 }
        case "SET_USER_ID":
            return{
                ...state, user:{...state.user, id:action.payload}
            }
        case "UPDATING_USER":
            return{
                    ...state, updatingUser: action.payload, errorUpdatingUser:false
                }
        case "ERROR_UPDATING_USER":
                return{
                    ...state, errorUpdatingUser: action.payload
                }
        case "NEW_USER_ERROR":
            return{
                ...state, newUserError: action.payload
            }
        case "NEW_USER_CREATED":
            return{
                ...state, newUserCreated: action.payload
            }

        default:
            return{
                ...state
            }
    
    }
}


export default reducer