import { CREATE_CATEGORY,  DELETE_CATEGORY, GET_CATEGORIES, LOADING_CATEGORIES } from './types'


export function createCategory(data){
    return (dispatch) => {
        dispatch({ type: LOADING_CATEGORIES})
        fetch(`http://localhost:3000/categories/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
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
                "Accepts": 'application/json'
            }
        })
        .then(resp => {
            if (resp.ok) {
                dispatch({ type: DELETE_CATEGORY })
            } else {
                return resp.json().then((json) => {
                    
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
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(json => {
                    dispatch({type: GET_CATEGORIES, payload: json})
                })
            } else {
                return resp.json().then((json) => {
                    
                    Promise.reject(json)
                })
            }
        })
    }
}

