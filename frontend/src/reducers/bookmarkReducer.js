import {
    CREATE_BOOKMARK,
    GET_BOOKMARKS,
    FAVORITE_BOOKMARK,
    DELETE_BOOKMARK,
    LOADING_BOOKMARKS,
    UPDATE_QUERY
} from '../actions/types'


export default (state = {bookmarks: [], query: '', loading: false}, action) => {
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
            const index = state.bookmarks.find(bookmark => bookmark.id === action.payload.id)
            return !! index || index === 0 ? (
                {...state, 
                    bookmarks: [...state.bookmarks.slice(0, index), 
                    action.payload,
                    ...state.bookmarks.slice(index + 1)
                ], loading: false} 
            ): state
        case DELETE_BOOKMARK:
            const removeDeletedBookmark = state.bookmarks.filter(bookmark => bookmark.id !== action.payload) 
            return {bookmarks: removeDeletedBookmark, loading: false}
        case 'UPDATE_QUERY':
            return {
                ...state, 
                query: action.query
            }
        default:
            return state
    }
}