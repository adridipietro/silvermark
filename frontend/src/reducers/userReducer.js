import { getToken } from '../actions'
import {
    SIGNUP_USER, 
    LOGIN_USER,
    LOGOUT_USER,
    ERROR,
    AUTHENTICATED
} from '../actions/types'

const INITIAL_STATE = {
    authChecked: false,
    loggedIn: getToken() ? true : false,
    currentUser: {},
    token: getToken(),
    loading: false,
    message: ''
} 

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case AUTHENTICATED:
            if (action.payload["currentUser"]){
                return {
                    ...state,
                    authChecked: true,
                    loggedIn: true,
                    currentUser: [...state, action.payload.currentUser],
                }  
            } 
        case SIGNUP_USER:
            return {
                ...state, 
                loggedIn: true,
                currentUser: action.payload,
                loading: false
            }
        case LOGIN_USER:
            return {
                ...state, 
                loggedIn: true,
                currentUser: action.payload,
                loading: false
            }
        case LOGOUT_USER:
            return { 
                currentUser: {},
                loggedIn: false,
                loading: false
            }
        case ERROR:
            return {
                message: "Sorry, something went wrong."
            }

        default:
            return state
    }
}