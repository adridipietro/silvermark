import { SIGNUP_USER, GET_USERS, LOGIN_USER, LOGOUT_USER } from './types'


export function signupUser(name, email, password){
    return (dispatch) => {
        const dataObject = {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user: {name, email, password}})
        }
        fetch("http://localhost:3000/signup", dataObject)
        .then(resp => resp.json())
        .then(json => {
            localStorage.setItem('token', json.token)
            localStorage.setItem('id', json.id)
            localStorage.setItem('name', json.name)
            localStorage.setItem('email', json.email)
            localStorage.setItem('password', json.password)
            return dispatch({type: SIGNUP_USER, payload: json})
        })
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

export function loginUser(email, password){
    return(dispatch) => {
        const dataObject = {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({user: {email, password}})
        }
        fetch("http://localhost:3000/login", dataObject)
        .then(resp => resp.json())
        .then(json => {
            localStorage.setItem('token', json.token)
            localStorage.setItem('id', json.id)
            localStorage.setItem('email', json.email)
            localStorage.setItem('password', json.password)
            return dispatch({type: LOGIN_USER, payload: json})
        })
    }
}

export function logoutUser(){
    return(dispatch)=> {
        dispatch({type: LOGOUT_USER, payload: null})
    }
}