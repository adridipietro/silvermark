import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// NavLink updates browser URL and renders the Route Component


const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'white',
    textDecoration: 'none',
    color: 'black',
    borderRadius: '5px',
    hover: 'red'
  }

  
export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                background: 'black',
                color: 'white'
                }}
            >Home</NavLink>
            <NavLink
                to="/login"
                exact
                style={link}
                activeStyle={{
                background: 'black',
                color: 'white'
                }} 
                
            >Login</NavLink>
            <NavLink
                to="/signup"
                exact
                style={link}
                activeStyle={{
                background: 'black',
                color: 'white'
                }}
            >Signup</NavLink>
            <NavLink
                to="/categories"
                exact
                style={link}
                activeStyle={{
                background: 'black',
                color: 'white'
                }}
            >Categories</NavLink>
            </div>
            
        )
        
    }
}
