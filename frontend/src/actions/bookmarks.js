import { CREATE_BOOKMARK, GET_BOOKMARKS, DELETE_BOOKMARK, FAVORITE_BOOKMARK, ERROR, LOADING_BOOKMARKS } from './types'
import { getToken } from './users'


export function createBookmark(data){
    return (dispatch) => {
        dispatch({ type: LOADING_BOOKMARKS})
        fetch('http://localhost:3000/bookmarks', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                Authorization: getToken()
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
               response.json().then(json => {
                    dispatch({type: CREATE_BOOKMARK, payload: json})
               })
            } else {
                console.log(response)
                return response.json().then((json) => {
                    return Promise.reject(json)
                })
            }
        })
        

    }
}

export function getBookmarks(){
    return(dispatch) => {
        dispatch({type: LOADING_BOOKMARKS })
        fetch("http://localhost:3000/bookmarks", {
            headers: {
                "Content-Type": "application/json",
                Authorization: getToken()
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
            const dataObject = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json"
                },
                body: JSON.stringify({favorite: !bookmark.favorite})
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



