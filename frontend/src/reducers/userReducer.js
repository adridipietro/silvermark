import {
    SIGNUP_USER, 
    LOGIN_USER,
    LOGOUT_USER,
    STORE_TOKEN
} from '../actions/types'

const INITIAL_STATE = {
    loggedIn: false,
    currentUser: {}
} 

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SIGNUP_USER:
            return {
                ...state, 
                loggedIn: true,
                currentUser: action.payload
            }
        case LOGIN_USER:
            return {
                ...state, 
                loggedIn: true,
                currentUser: action.payload
            }
        case LOGOUT_USER:
            return { 
                ...state, 
                user: state.users.filter(user => user.id !== action.payload.id),
                loggedIn: false
            }

        case STORE_TOKEN:
            return {
                token: action.payload.token,
            }
        default:
            return state
    }
}