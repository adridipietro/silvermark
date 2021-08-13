import {
    CREATE_CATEGORY,
    DELETE_CATEGORY,
    FILTER_BY_CATEGORY
} from '../actions/types'

const INITIAL_STATE = {
    name: '',
    bookmarks: [],
    user_id: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_CATEGORY:
            return {...state}
        case DELETE_CATEGORY:
            return {...state}
        case FILTER_BY_CATEGORY:
            return {...state}
        default:
            return state
    }
}

