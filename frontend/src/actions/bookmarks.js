import { CREATE_BOOKMARK, GET_BOOKMARKS, DELETE_BOOKMARK, FAVORITE_BOOKMARK, ERROR, LOADING_BOOKMARKS, FILTER_CATEGORY} from './types'


export function createBookmark(data){
    return (dispatch) => {
        dispatch({ type: LOADING_BOOKMARKS})
        fetch('http://localhost:3000/bookmarks', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
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
        .catch(error => {
            dispatch({type: ERROR, payload: error})
        })
    }
}

export function getBookmarks(){
    return(dispatch) => {
        dispatch({type: LOADING_BOOKMARKS })
        fetch("http://localhost:3000/bookmarks", {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
               response.json().then(json => {
                    dispatch({type: GET_BOOKMARKS, payload: json})
               })
            } else {
                return response.json().then((json) => {
                    return Promise.reject(json)
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
                "Accepts": 'application/json',
            },
            body: JSON.stringify(id)
        })
        .then(response => {
            if (response.ok) {
               response.json().then(() => {
                    response.header("Access-Control-Allow-Origin", "*")
                    dispatch({type: DELETE_BOOKMARK, payload: null})
               })
            } else {
                console.log(response)
                return response.json().then((json) => {
                    return Promise.reject(json)
                })
            }
        })
        .catch(error => {
            dispatch({type: ERROR, payload: error})
        })
    }
}

export function filterCategory(id) {
    return (dispatch) => {
        dispatch({type: FILTER_CATEGORY, payload: id})
    }
}

export function favoriteBookmark(id){
        return(dispatch, getState) => {
            const bookmark = getState().bookmarks.bookmarks.find(bookmark => bookmark.id === id)
            const data = {
                headline: bookmark.headline,
                web_url: bookmark.web_url,
                description: bookmark.description,
                id: id, 
                favorite: bookmark.favorite
            }
            const configObject = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Accepts: 'application/json',
                
                },
                body: JSON.stringify(data)
            }
            fetch(`http://localhost:3000/bookmarks/${id}`, configObject)
            .then(response => {
                if (response.ok) {
                   response.json().then(json => {
                        dispatch({type: FAVORITE_BOOKMARK, payload: json})
                   })
                } else {
                    console.log(response)
                    return response.json().then((json) => {
                        return Promise.reject(json)
                    })
                }
            })
            .catch(error => {
                dispatch({type: ERROR, payload: error})
            })
        }
}



