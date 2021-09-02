import {
    CREATE_BOOKMARK,
    GET_BOOKMARKS,
    FAVORITE_BOOKMARK,
    DELETE_BOOKMARK,
    LOADING_BOOKMARKS,
    FILTER_CATEGORY
} from '../actions/types'


export default (state = {bookmarks: [], loading: false}, action) => {
    switch (action.type) {
        case LOADING_BOOKMARKS:
            return {
                ...state, 
                bookmarks: [...state.bookmarks],
                loading: true
            }
        case GET_BOOKMARKS:
            return {bookmarks: action.payload, loading: false}
        case CREATE_BOOKMARK:
            return {
                ...state, 
                bookmarks: [...state.bookmarks, action.payload],
                loading: false 
            }
        case FAVORITE_BOOKMARK:
            return state.bookmarks.map(bookmark => {
                if (bookmark.id !== action.payload.id){
                    return bookmark
                }
                return {
                    ...bookmark,
                    favorite: !bookmark.favorite
                }
            })
        case DELETE_BOOKMARK:
            const removeDeletedBookmark = state.bookmarks.filter(bookmark => bookmark.id !== action.payload) 
            return {bookmarks: removeDeletedBookmark, loading: false}
        case FILTER_CATEGORY:
            const filteredResults = state.bookmarks.filter(bookmark => bookmark.category_id == action.payload )
            return {
                ...state, 
                bookmarks: filteredResults
            }
        default:
            return state
    }
}