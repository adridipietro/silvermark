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
            >HOME</NavLink>
            <NavLink
                to="/login"
                exact
                style={link}
                activeStyle={{
                background: 'black',
                color: 'white'
                }} 
                
            >LOGIN</NavLink>
            <NavLink
                to="/signup"
                exact
                style={link}
                activeStyle={{
                background: 'black',
                color: 'white'
                }}
            >SIGNUP</NavLink>
            <NavLink
                to="/categories"
                exact
                style={link}
                activeStyle={{
                background: 'black',
                color: 'white'
                }}
            >CATEGORIES</NavLink>
            <select
                to='/categories'
                exact
    
                style={link}
                activeStyle={{
                background: 'black',
                color: 'white'
                }}
            >
                <option>FILTER</option>
                <option>CAREER</option>
                <option>MISCELLANEOUS</option>
                <option>FOOD</option>
                <option>SCHOOL</option>
            </select>
            </div>
            
        )
        
    }
}
