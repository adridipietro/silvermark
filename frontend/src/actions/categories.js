import { CREATE_CATEGORY,  DELETE_CATEGORY, GET_CATEGORIES, ERROR, LOADING_CATEGORIES } from './types'
import { getToken } from './users'


export function createCategory(data){
    return (dispatch) => {
        dispatch({ type: LOADING_CATEGORIES})
        fetch(`http://localhost:3000/categories/`, {
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
                    dispatch({type: CREATE_CATEGORY, payload: json})
               })
            } else {
                return response.json().then((json) => {
                    return Promise.reject(json)
                })
            }
        })

    }
}

export function deleteCategory(id){
    return(dispatch)=> {
        fetch(`http://localhost:3000/categories/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json',
                "Accepts": 'application/json',
                Authorization: getToken()
            }
        })
        .then(resp => {
            if (resp.ok) {
                dispatch({ type: DELETE_CATEGORY })
            } else {
                return resp.json().then((json) => {
                    dispatch({type: ERROR})
                    return Promise.reject(json)
                })
            }
        })
    }
}

export function getCategories(){
    return(dispatch) => {
        dispatch({type: LOADING_CATEGORIES})
        fetch("http://localhost:3000/categories", {
            headers: {
                "Content-Type": "application/json",
                Authorization: getToken()
            }
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(json => {
                    dispatch({type: GET_CATEGORIES, payload: json})
                })
            } else {
                return resp.json().then((json) => {
                    dispatch({type: ERROR})
                    Promise.reject(json)
                })
            }
        })
    }
}

