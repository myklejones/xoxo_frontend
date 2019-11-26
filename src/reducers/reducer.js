const initialState = {
 current_user: {},
 all_users: {},
 token: "",
 id:null
}

function reducer(state = initialState, action){
    switch(action.type){
        case "SET_CURRENT_USER":
            return{
                ...state, curren_user: action.payload
        }
        case "SET_TOKEN":
            return{
                ...state, token: action.payload
            }
        case "SET_ID":
            return{
                ...state, id: action.payload
            }
        default:
            return{
                ...state
            }
    
    }
}

export default {reducer}