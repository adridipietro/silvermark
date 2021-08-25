import {  SIGNUP_USER, LOGIN_USER, LOGOUT_USER, ERROR } from './types'



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
            if (resp.ok) {
                resp.json().then(json => {
                    setToken(resp.headers.get("Authorization"))
                    dispatch({ type: LOGIN_USER, payload: json })
                })
               
            } else {
             return resp.json().then((json) => Promise.reject(json))
            }
        })
    }
}

export function logoutUser() {
    return(dispatch)=> {
        const dataObject = {
            method: "DELETE",
            headers: {
                "Accepts": "application/json",
                "Content-Type": "application/json",
                Authorization: localStorage.removeItem('token')
            }
        }
        fetch("http://localhost:3000/logout", dataObject)
        .then(resp => {
            //debugger
            if (resp.ok) {
                dispatch({ type: LOGOUT_USER })
            } else {
                return resp.json().then((json) => {
                    dispatch({type: ERROR})
                    return Promise.reject(json)
                })
            }
        })
    }
}

export function setToken(token) {
    localStorage.setItem("token", token);
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime());
  }
export function getToken() {
    let now = new Date(Date.now()).getTime();
    let thirtyMinutes = 1000 * 60 * 30;
    let timeSinceLastLogin = now - localStorage.getItem("lastLoginTime");
    if (timeSinceLastLogin < thirtyMinutes) {
      return localStorage.getItem("token");
    }
  }

export function error(error){
    return {
        type: ERROR,
        payload: error
    }
}