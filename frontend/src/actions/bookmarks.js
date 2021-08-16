import { CREATE_BOOKMARK, GET_BOOKMARKS, EDIT_BOOKMARK, DELETE_BOOKMARK, FAVORITE_BOOKMARK } from './types'

export function createBookmark(bookmark){
    return (dispatch) => {
        const dataObject = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(bookmark)
        }
        fetch('http://localhost:3000/bookmarks', dataObject)
        .then(response => response.json())
        .then(json => dispatch({type: CREATE_BOOKMARK, payload: json}))

        }
}

export function getBookmarks(bookmarks){
    return(dispatch, getState) => {
        let bookmarks = getState().bookmarks.bookmarks
        fetch("http://localhost:3000/bookmarks")
        .then(resp => resp.json())
        .then(json => dispatch({type: GET_BOOKMARKS, payload: json}))
    }
}

export function deleteBookmark(id){
    return(dispatch)=> {
        fetch(`http://localhost:3000/bookmarks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json',
                "Accepts": 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => dispatch({type: DELETE_BOOKMARK, payload: json}))
    }
}

export function favoriteBookmark(id){
        return(dispatch, getState) => {
            let bookmark = getState().bookmarks.find(bookmark => bookmark.id === id)
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
            .then(response => response.json())
            .then(json => dispatch({type: FAVORITE_BOOKMARK, payload: json}))
        }

}

export function editBookmark(id) {
    return(dispatch, getState) => {
        let bookmark = getState().bookmarks.find(bookmark => bookmark.id === id)
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
        .then(response => response.json())
        .then(json => dispatch({type: EDIT_BOOKMARK, payload: json}))
    }
}

