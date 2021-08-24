import { CREATE_CATEGORY,  DELETE_CATEGORY, GET_CATEGORIES, ERROR } from './types'
import { getToken } from './users'


export function createCategory(data){
    return (dispatch) => {
        fetch('http://localhost:3000/categories', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "accepts": "application/json",
                Authorization: getToken()
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
               response.json().then((json) => {
                    dispatch({type: CREATE_CATEGORY, payload: json})
               })
            } else {
                debugger
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
        fetch("http://localhost:3000/categories")
        .then(resp => {
            if(resp.ok){
                resp.json().then(json => {
                    dispatch({type: GET_CATEGORIES, payload: json})
                })
            } else {
                return resp.json().then(json => Promise.reject(json))
            }
        })
    }
}

