import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// NavLink updates browser URL and renders the Route Component
import { getCategories } from '../actions/index'



const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'white',
    textDecoration: 'none',
    color: 'black',
    borderRadius: '5px'
  }

  
export default class Navbar extends Component {
    

    render() {
        return (
            <div className="navbar">
                <NavLink
                    to="/"
                    className="nav-link"
                    exact
                    style={link}
                    activeStyle={{
                    background: 'black',
                    color: 'white'
                    }}
                >HOME</NavLink>
                <NavLink
                    to="/login"
                    className="nav-link"
                    exact
                    style={link}
                    activeStyle={{
                    background: 'black',
                    color: 'white'
                    }} 
                    
                >LOGIN</NavLink>
                <NavLink
                    to="/signup"
                    className="nav-link"
                    exact
                    style={link}
                    activeStyle={{
                    background: 'black',
                    color: 'white'
                    }}
                >SIGNUP</NavLink>
                <NavLink
                    to="/logout"
                    className="nav-link"
                    exact
                    style={link}
                    activeStyle={{
                    background: 'black',
                    color: 'white'
                    }}
                >LOGOUT</NavLink>
                <NavLink
                    to="/categories"
                    className="nav-link"
                    exact
                    style={link}
                    activeStyle={{
                    background: 'black',
                    color: 'white'
                    }}
                >CATEGORIES</NavLink>
            </div>

            
        )
        
    }
}
