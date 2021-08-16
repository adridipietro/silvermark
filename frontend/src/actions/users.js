import { SIGNUP_USER, GET_USERS, LOGIN_USER, LOGOUT_USER } from './types'


export function signupUser(user){
    return (dispatch) => {
        const dataObject = {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
        fetch("http://localhost:3000/users", dataObject)
        .then(resp => resp.json())
        .then(json => dispatch({type: SIGNUP_USER, payload: json}))
    }
}


export function getUsers(){
    return(dispatch) => {
        const dataObject = {
            method: "GET",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            }
        }
        fetch("http://localhost:3000/users", dataObject)
        .then(resp => resp.json())
        .then(json => dispatch({type: GET_USERS, payload: json}))
    }
}

export function loginUser(user){
    return(dispatch) => {
        const dataObject = {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
        fetch("http://localhost:3000/users", dataObject)
        .then(resp => resp.json())
        .then(json => dispatch({type: LOGIN_USER, payload: json}))
    }
}

export function logoutUser(){
    return(dispatch)=> {
        dispatch({type: LOGOUT_USER, payload: null})
    }
}