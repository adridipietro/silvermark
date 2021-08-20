import { CREATE_BOOKMARK, GET_BOOKMARKS, EDIT_BOOKMARK, DELETE_BOOKMARK, FAVORITE_BOOKMARK, ERROR } from './types'


export function createBookmark(bookmark){
    return (dispatch) => {
        fetch('http://localhost:3000/bookmarks', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...bookmark
            })
        })
        .then(response => {
            if (response.ok) {
               response.json().then(json => {
                   debugger
                    dispatch({type: CREATE_BOOKMARK, payload: json})
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
        fetch("http://localhost:3000/bookmarks")
        .then(resp => resp.json())
        .then(json => {
            dispatch({type: GET_BOOKMARKS, payload: json })
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
            }
        })
        .then(response => response.json())
        .then(id => {debugger})
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
                    "Accepts": "application/json",
                },
                body: JSON.stringify(data)
            }
            fetch(`http://localhost:3000/bookmarks/${id}`, dataObject)
            .then(response => response.json())
            .then(json => dispatch({type: FAVORITE_BOOKMARK, payload: json}))
            .catch(error => {
                dispatch({type: ERROR, payload: error})
            })
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
        .catch(error => {
            dispatch({type: ERROR, payload: error})
        })
    }
}

