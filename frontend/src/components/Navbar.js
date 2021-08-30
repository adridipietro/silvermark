import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
import { connect } from "react-redux";
import { checkAuth } from '../actions/users'


const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'white',
    textDecoration: 'none',
    color: 'black',
    borderRadius: '5px'
  }

  
const Navbar = () => {
    useEffect(() => {
        checkAuth()
    })

        return (
            <div className="navbar">
                { checkAuth() ? 
                <React.Fragment>
                    <NavLink
                        to="/logout" exact className="nav-link"
                        style={link}
                        activeStyle={{
                        background: 'black',
                        color: 'white'
                        }}
                    >LOGOUT</NavLink>
                    <NavLink to="/bookmarks" exact className="nav-link"
                        style={link}
                        activeStyle={{
                        background: 'black',
                        color: 'white'
                        }}
                    >BOOKMARKS</NavLink>
                    <NavLink to="/categories" exact className="nav-link"
                        style={link}
                        activeStyle={{
                        background: 'black',
                        color: 'white'
                        }}
                    >CATEGORIES</NavLink>
                    <NavLink to="/about" exact className="nav-link"
                        style={link}
                        activeStyle={{
                        background: 'black',
                        color: 'white'
                        }}
                    >ABOUT US</NavLink>
                   <NavLink to="/" exact className="nav-link"
                        style={link}
                        activeStyle={{
                        background: 'black',
                        color: 'white'
                        }}
                    >HOME</NavLink>
                </React.Fragment>
                :
                <React.Fragment>
                   <NavLink to="/login" exact className="nav-link"
                       style={link}
                       activeStyle={{
                       background: 'black',
                       color: 'white'
                       }} 
                   >LOGIN</NavLink>
                   <NavLink to="/signup" exact className="nav-link"
                       style={link}
                       activeStyle={{
                       background: 'black',
                       color: 'white'
                       }}
                   >SIGNUP</NavLink>
                   <NavLink to="/about" exact className="nav-link"
                        style={link}
                        activeStyle={{
                        background: 'black',
                        color: 'white'
                        }}
                    >ABOUT US</NavLink>
                </React.Fragment>
                }
            </div>

            
        )
        
}

const mapStateToProps = (state) => {
    return {
        authChecked: state.users.authChecked,
        loggedIn: state.users.loggedIn,
        currentUser: state.users.currentUser

    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      checkAuth: () => dispatch(checkAuth())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

