import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'pink',
    textDecoration: 'none',
    color: 'black',
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
                background: 'red'
                }}
            >Home</NavLink>
            <NavLink
                to="/login"
                exact
                style={link}
                activeStyle={{
                background: 'red'
                }}
            >Login</NavLink>
            <NavLink
                to="/signup"
                exact
                style={link}
                activeStyle={{
                background: 'red'
                }}
            >Signup</NavLink>
            <NavLink
                to="/bookmarks"
                exact
                style={link}
                activeStyle={{
                background: 'red'
                }}
            >Bookmarks</NavLink>
            <NavLink
                to="/bookmarks/new"
                exact
                style={link}
                activeStyle={{
                background: 'red'
                }}
            >Add</NavLink>
            </div>
        )
        
    }
}
