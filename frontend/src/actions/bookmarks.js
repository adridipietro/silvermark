import { CREATE_BOOKMARK, GET_BOOKMARKS, EDIT_BOOKMARK, DELETE_BOOKMARK, FAVORITE_BOOKMARK } from './types'

export function createBookmark(headline, description, web_url, favorite, token){
    return (dispatch) => {
        const dataObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({bookmark: {headline, description, web_url, favorite, token}})
        }
        fetch('http://localhost:3000/bookmarks', dataObject)
        .then(response => response.json())
        .then(json => dispatch({type: CREATE_BOOKMARK, payload: json}))
    }
}

export function getBookmarks(){
    return(dispatch) => {
        fetch("http://localhost:3000/bookmarks")
        .then(resp => resp.json())
        .then(json => {
            dispatch({type: GET_BOOKMARKS, payload: json })
        })
    }
}

export function deleteBookmark(id, token){
    return(dispatch)=> {
        fetch(`http://localhost:3000/bookmarks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json',
                "Accepts": 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(json => dispatch({type: DELETE_BOOKMARK, payload: json}))
    }
}

export function favoriteBookmark(id, token){
        return(dispatch, getState) => {
            const bookmark = getState().bookmarks.bookmarks.find(bookmark => bookmark.id === id)
            const data = {
                headline: bookmark.headline,
                description: bookmark.description,
                web_url: bookmark.web_url,
                favorite: bookmark.favorite,
                id: bookmark.id
            }
            const dataObject = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(data)
            }
            fetch(`http://localhost:3000/bookmarks/${id}`, dataObject)
            .then(response => response.json())
            .then(json => dispatch({type: FAVORITE_BOOKMARK, payload: json}))
        }

}

export function editBookmark(id, token) {
    return(dispatch, getState) => {
        let bookmark = getState().bookmarks.bookmarks.find(bookmark => bookmark.id === id)
        const data = {
            headline: bookmark.headline,
            description: bookmark.description,
            web_url: bookmark.web_url,
            favorite: bookmark.favorite,
            id: bookmark.id
        }
        const dataObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:3000/bookmarks/${id}`, dataObject)
        .then(response => response.json())
        .then(json => dispatch({type: EDIT_BOOKMARK, payload: json}))
    }
}

