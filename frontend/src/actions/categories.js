import { CREATE_CATEGORY,  DELETE_CATEGORY, GET_CATEGORIES, FILTER_BY_CATEGORY } from './types'


export function createCategory(category){
    return (dispatch) => {
        const dataObject = {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category)
        }
        fetch("http://localhost:3000/categories", dataObject)
        .then(resp => resp.json())
        .then(json => dispatch({type: CREATE_CATEGORY, payload: json}))
    }
}

export function deleteCategory(id){
    return(dispatch)=> {
        fetch(`http://localhost:3000/categories/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json',
                "Accepts": 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => dispatch({type: DELETE_CATEGORY, payload: json}))
    }
}

export function getCategories(){
    return(dispatch) => {
        fetch("http://localhost:3000/categories")
        .then(resp => resp.json())
        .then(json => dispatch({type: GET_CATEGORIES, payload: json}))
    }
}

export function filterByCategory(id){
    return (dispatch, getState) => {
        let category = getState().categories.find(category => category.id === id)
            const data = {
                name: category.name,
                bookmarks: category.bookmarks,
                id: category.id
            }
        const dataObject = {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(`http://localhost:3000/categories/${id}`, dataObject)
        .then(resp => resp.json())
        .then(json => dispatch({type: FILTER_BY_CATEGORY, payload: json}))
    }
}