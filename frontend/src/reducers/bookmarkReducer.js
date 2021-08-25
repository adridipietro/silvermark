import {
    CREATE_BOOKMARK,
    GET_BOOKMARKS,
    FAVORITE_BOOKMARK,
    DELETE_BOOKMARK,
    LOADING_BOOKMARKS
} from '../actions/types'


export default (state = {bookmarks: [], requesting: false}, action) => {
    switch (action.type) {
        case LOADING_BOOKMARKS:
            return {
                ...state, 
                bookmarks: [...state.bookmarks],
                requesting: true
            }
        case GET_BOOKMARKS:
            return {bookmarks: action.payload, requesting: false}
        case CREATE_BOOKMARK:
            return {
                ...state, 
                bookmarks: [...state.bookmarks, action.payload],
                requesting: false 
            }
        case FAVORITE_BOOKMARK:
            return state.bookmarks.map(bookmark => {
                if (bookmark.id !== action.payload){
                    return {
                        ...bookmark, favorite: !bookmark.favorite
                    }
                }
            })
        case DELETE_BOOKMARK:
            const removeDeletedBookmark = state.bookmarks.filter(bookmark => bookmark.id !== action.payload) 
            return {bookmarks: removeDeletedBookmark}
        default:
            return state
    }
}