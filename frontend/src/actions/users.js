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


export function getUsers(users){
    return(dispatch, getState) => {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(json => dispatch({type: GET_USERS, payload: json}))
    }
}

export function loginUser(){
    return(state, action) => {
        state.user = action.payload
    }
}

export function logoutUser(){
    return(state)=> {
        state.user = null
    }
}