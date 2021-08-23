import {  SIGNUP_USER, LOGIN_USER, LOGOUT_USER, STORE_TOKEN, ERROR } from './types'



export function signupUser(data){
    return (dispatch) => {
        fetch("http://localhost:3000/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    ...data
                }
            })
        })
        .then(resp => {
            //debugger
            if (resp.ok) {
                resp.json().then(json => {
                    localStorage.setItem('token', json.token)
                    dispatch({ type: SIGNUP_USER, payload: json })
                })
               
            } 
        })
    }
}


export function loginUser(data){
    return (dispatch) => {
        fetch("http://localhost:3000/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    ...data
                }
            })
        })
        .then(resp => {
            //debugger
            if (resp.ok) {
                resp.json().then(json => {
                    localStorage.setItem('token', json.token)

                     dispatch({ type: LOGIN_USER, payload: json })
                })
               
            } 
        })
    }
}

export function logoutUser(token) {
    return(dispatch)=> {
        const dataObject = {
            method: "DELETE",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        fetch("http://localhost:3000/logout", dataObject)
        .then(resp => {
            //debugger
            if (resp.ok) {
                resp.json().then(json => {
                    dispatch({ type: LOGOUT_USER, payload: json })
                })
               
            } 
        })
    }
}

export function storeToken(token){
    return {
        type: STORE_TOKEN,
        payload: token
    }
}

export function error(error){
    return {
        type: ERROR,
        payload: error
    }
}