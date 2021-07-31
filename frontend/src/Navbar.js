import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'pink',
    textDecoration: 'none',
    color: 'black',
  }
  
export default class Navbar extends React.Component {
    render() {
        return (
            <div class="navbar">
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
                to="/squares"
                exact
                style={link}
                activeStyle={{
                background: 'red'
                }}
            >Squares</NavLink>
            </div>
        )
        
    }
}
