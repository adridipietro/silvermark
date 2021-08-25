import { CREATE_BOOKMARK, GET_BOOKMARKS, DELETE_BOOKMARK, FAVORITE_BOOKMARK, ERROR } from './types'
import { getToken } from './users'


export function createBookmark(bookmark){
    return (dispatch) => {
        fetch('http://localhost:3000/bookmarks', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "accepts": "application/json",
                Authorization: getToken()
            },
            body: JSON.stringify(bookmark)
        })
        .then(response => {
            if (response.ok) {
               response.json().then((json) => {
                    dispatch({type: CREATE_BOOKMARK, payload: json})
               })
            }
        })
        .catch(error => {
            dispatch({type: ERROR, payload: error})
        })

    }
}

export function getBookmarks(token){
    return(dispatch) => {
        fetch("http://localhost:3000/bookmarks", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            if (response.ok) {
               response.json().then(json => {
                    dispatch({type: GET_BOOKMARKS, payload: json})
               })
            }
        })
        .catch(error => {
            dispatch({type: ERROR, payload: error})
        })
    }
}

export function deleteBookmark(id) {
    return(dispatch)=> {
        fetch(`http://localhost:3000/bookmarks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json',
                "Accepts": 'application/json'
            },
            body: JSON.stringify(id)
        })
        .then(response => {
            if (response.ok) {
               response.json().then(() => {
                    dispatch({type: DELETE_BOOKMARK, payload: null})
               })
            }
        })
        .catch(error => {
            dispatch({type: ERROR, payload: error})
        })
    }
}

export function favoriteBookmark(id){
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
                    "Accepts": "application/json"
                },
                body: JSON.stringify(data)
            }
            fetch(`http://localhost:3000/bookmarks/${id}`, dataObject)
            .then(response => {
                if (response.ok) {
                   response.json().then(json => {
                        dispatch({type: FAVORITE_BOOKMARK, payload: json})
                   })
                }
            })
            .catch(error => {
                dispatch({type: ERROR, payload: error})
            })
        }

}



