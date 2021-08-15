import {
    CREATE_BOOKMARK,
    EDIT_BOOKMARK,
    GET_BOOKMARKS,
    FAVORITE_BOOKMARK,
    DELETE_BOOKMARK
} from '../actions/types'

const INITIAL_STATE = {
    name: '',
    bookmarks: [],
    user_id: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_BOOKMARKS:
            return {bookmarks: action.payload}
        case CREATE_BOOKMARK:
            return {bookmarks: action.payload}
        case EDIT_BOOKMARK:
            return {...state}
        case FAVORITE_BOOKMARK:
            return {...state}
        case DELETE_BOOKMARK:
            return {...state}
        default:
            return state
    }
}