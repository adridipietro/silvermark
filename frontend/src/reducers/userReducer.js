import {
    SIGNUP_USER, 
    LOGIN_USER,
    LOGOUT_USER,
    STORE_TOKEN
} from '../actions/types'

/* const INITIAL_STATE = {
    user: {
        token: null, 
        name: '', 
        email: '',
        password: '',
        id: ''
    }
} */

export default (state = {user: []}, action) => {
    switch(action.type){
        case SIGNUP_USER:
            return {
                token: action.payload.token, 
                name: action.payload.name,
                password: action.payload.password,
                email: action.payload.email
            }
        case LOGIN_USER:
            return {
                token: action.payload.token, 
                password: action.payload.password,
                email: action.payload.email
            }
        case LOGOUT_USER:
            return { ...state, user: state.users.filter(user => user.id !== action.payload.id)}

        case STORE_TOKEN:
            return {
                token: action.payload.token,
                name: action.payload.name,
                id: action.payload.id,
                email: action.payload.email,
                password: action.payload.password,
            }
        default:
            return state
    }
}