import {
    CREATE_USER, 
    CURRENT_USER
} from '../actions/types'

const INITIAL_STATE = {user: {}}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CURRENT_USER:
            return{...state}
        default:
            return state
    }
}