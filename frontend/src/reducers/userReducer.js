import {
    CREATE_USER, 
    CURRENT_USER,
    GET_USERS
} from '../actions/types'

const INITIAL_STATE = {user: {}}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CURRENT_USER:
            return{...state}
        case CREATE_USER:
            return{...state}
        case GET_USERS:
            return {...state}
        default:
            return state
    }
}