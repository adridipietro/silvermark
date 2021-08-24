import {
    CREATE_BOOKMARK,
    GET_BOOKMARKS,
    FAVORITE_BOOKMARK,
    DELETE_BOOKMARK
} from '../actions/types'


export default (state = {bookmarks: []}, action) => {
    switch (action.type) {
        case GET_BOOKMARKS:
            return {bookmarks: action.payload}
        case CREATE_BOOKMARK:
            return {...state, bookmarks: [...state.bookmarks]}
        case FAVORITE_BOOKMARK:
            return state.bookmarks.map(bookmark => {
                if (bookmark.id !== action.payload){
                    return {
                        ...bookmark, favorite: !bookmark.favorite
                    }
                }
            })
        case DELETE_BOOKMARK:
            const removeDeleteBookmark = state.bookmarks.filter(bookmark => bookmark.id !== action.payload.id) 
            return {bookmarks: removeDeleteBookmark}
        default:
            return state
    }
}