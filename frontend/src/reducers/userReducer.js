import {
    SIGNUP_USER, 
    GET_USERS,
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/types'

const INITIAL_STATE = {
    user: {
        token: null, 
        name: '', 
        email: '',
        password: ''
    }
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SIGNUP_USER:
            return{
                token: action.payload.token, 
                name: action.payload.name,
                password: action.payload.password,
                email: action.payload.email
            }
        case GET_USERS:
            return {...state, users: action.payload}
        case LOGIN_USER:
            return {
                token: action.payload.token, 
                password: action.payload.password,
                email: action.payload.email
            }
        case LOGOUT_USER:
            return{ ...state, user: state.users.filter(user => user.id !== action.payload.id)}
        default:
            return state
    }
}