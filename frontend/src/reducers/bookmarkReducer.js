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
            return {...state, bookmarks: state.bookmarks.concat(action.payload)}
        case EDIT_BOOKMARK:
            const updatedBookmarks = state.map(bookmark => {
                if (bookmark.id === action.id){
                    return {...bookmark, ...action.payload}
                }
                return bookmark
            })
            return updatedBookmarks
        case FAVORITE_BOOKMARK:
            return state.map(bookmark => {
                if (bookmark.id !== action.payload){
                    return {
                        ...bookmark, favorite: !bookmark.favorite
                    }
                }
            })
        case DELETE_BOOKMARK:
            const newBookmarks = state.bookmarks.filter(bookmark => bookmark.id != action.payload)
            return { bookmarks: newBookmarks }
        default:
            return state
    }
}