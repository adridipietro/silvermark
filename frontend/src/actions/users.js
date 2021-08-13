import { CREATE_USER, GET_USERS } from './types'


export function createUser(user){
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
        .then(json => dispatch({type: CREATE_USER, payload: json}))
    }
}


export function getUsers(users){
    return(dispatch, getState) => {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then(json => dispatch({type: GET_USERS, payload: json}))
    }
}