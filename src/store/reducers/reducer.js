import { activeItem, interactingUser } from "../actions"

const initialState = {
token: null,
id: null,
tLoaded: false,
tError: [],
uLoading:false,
uLoaded: false,
allUsers:[], 
userData:{},
updatingUser: false,
errorUpdatingUser: {},
newUserError:{},
newUserCreated: false,
sendMessageLoading: false,
sendMessageLoaded: {},
sendMessageError: {},
activeItem:"",
interactingUser:{},
oneUser:false,
userMessages:{},
userConversations:{},
messageLoading: false,
interactingConvo:{}
}

function reducer(state = initialState, action){

    switch(action.type){
        case "SET_INTERACTING_CONVERSATION":
            return{
                ...state, interactingConvo:action.payload
            }
        case "SET_MESSAGE_LOADING":
            return{
                ...state, messageLoading:action.payload
            }
        case "SET_MESSAGES":
            return{
                ...state, userMessages: action.payload
            }
        case "SET_CONVERSATIONS":
            return{
                ...state, userConversations: action.payload
            }
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
        case "T_LOADED":
            return{
                ...state, tLoaded: action.payload
            }
        case "T_ERROR":
            return{
                ...state, tError: action.payload
            }
        case "U_LOADING":
            return{
                ...state, uLoading: action.payload
            }
        case "U_LOADED":
            return{
                ...state, uLoaded: action.payload
            }
        case "SET_USER":
            return{
                ...state, userData: action.payload
            }
        case "SET_ALL_USERS":
            return{
                ...state, allUsers: action.payload
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
        case "SEND_MESSAGE_LOADING":
                return{
                        ...state, sendMessageLoading: action.payload
                    }
        case "SEND_MESSAGE_LOADED":
                return{
                    ...state, sendMessageLoaded: action.payload
                }
        case "SEND_MESSAGE_ERROR":
                return{
                    ...state, sendMessageError: action.payload
                }
        case "SET_ACTIVE_ITEM":
            return{
                ...state, activeItem: action.payload
            }
        case "SET_INTERACTING_USER":
            return{
                ...state, interactingUser: action.payload 
            }
        case "SET_ONE_USER":
            return{
                ...state, oneUser: action.payload
            }
        default:
            return{
                ...state
            }
    
    }
}


export default reducer