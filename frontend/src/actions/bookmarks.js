
import { CREATE_BOOKMARK, GET_BOOKMARKS, DELETE_BOOKMARK, FAVORITE_BOOKMARK, ERROR, LOADING_BOOKMARKS, UPDATE_QUERY } from './types'
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
                Accepts: 'application/json'
            },
            body: JSON.stringify(id)
        })
        .then(response => {
            if (response.ok) {
               response.json().then(() => {
                    getToken(response.headers.get("Authorization"))
                    dispatch({type: DELETE_BOOKMARK, payload: null})
               })
            }
        })
        .catch(error => {
            dispatch({type: ERROR, payload: error})
        })
    }
}

export function updateQuery(query) {
    return (dispatch) => {
        dispatch({type: 'UPDATE_QUERY', payload: query})
    }
}

export function favoriteBookmark(id, favorite){
        return(dispatch, getState) => {
            const bookmark = getState().bookmarks.bookmarks.find(bookmark => bookmark.id === id)
            const data = {
                headline: bookmark.headline,
                web_url: bookmark.web_url,
                description: bookmark.description,
                id: id, 
                favorite: favorite
            }
            const configObject = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accepts: 'application/json'
                },
                body: JSON.stringify(data)
            }
            fetch(`http://localhost:3000/bookmarks/${id}`, configObject)
            .then(response => {
                if (response.ok) {
                   response.json().then(json => {
                        getToken(response.headers.get("Authorization"))
                        dispatch({type: FAVORITE_BOOKMARK, payload: json})
                   })
                }
            })
            .catch(error => {
                dispatch({type: ERROR, payload: error})
            })
        }

}



