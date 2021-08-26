import { getToken } from '../actions'
import {
    SIGNUP_USER, 
    LOGIN_USER,
    LOGOUT_USER,
    STORE_TOKEN
} from '../actions/types'

const INITIAL_STATE = {
    loggedIn: getToken() ? true : false,
    currentUser: {},
    token: getToken(),
    loading: false
} 

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
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

        case STORE_TOKEN:
            return {
                token: action.payload.token,
            }
        default:
            return state
    }
}