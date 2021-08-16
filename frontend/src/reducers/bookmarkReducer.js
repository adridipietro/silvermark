import {
    CREATE_BOOKMARK,
    EDIT_BOOKMARK,
    GET_BOOKMARKS,
    FAVORITE_BOOKMARK,
    DELETE_BOOKMARK
} from '../actions/types'


export default (state = {bookmarks: []}, action) => {
    switch (action.type) {
        case GET_BOOKMARKS:
            return {bookmarks: action.payload}
        case CREATE_BOOKMARK:
            return {bookmarks: action.payload}
        case EDIT_BOOKMARK:
            return state.findById(bookmark => String(bookmark.id) === String(action.payload.id))
        case FAVORITE_BOOKMARK:
            const index = state.bookmarks.findIndex(bookmark => String(bookmark.id) === String(action.payload.id))
            return !!index || index === 0 ? (
                {...state, bookmarks: [
                    ...state.bookmarks.slice(0, index), 
                    action.payload,
                    ...state.bookmarks.slice(index + 1)
                ], error: "", loading: false} 
            ): state
        case DELETE_BOOKMARK:
            const newBookmarks = state.bookmarks.filter(bookmark => bookmark.id != action.payload)
            return {bookmarks: newBookmarks}
        default:
            return state
    }
}