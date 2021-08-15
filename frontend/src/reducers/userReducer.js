import {
    SIGNUP_USER, 
    CURRENT_USER,
    GET_USERS,
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/types'

const INITIAL_STATE = {user: {}}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CURRENT_USER:
            return{...state}
        case SIGNUP_USER:
            return{...state}
        case GET_USERS:
            return {users: action.payload}
        case LOGIN_USER:
            return {}
        case LOGOUT_USER:
            return{}
        default:
            return state
    }
}