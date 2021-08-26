import React from 'react'
import { NavLink } from 'react-router-dom'


const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'white',
    textDecoration: 'none',
    color: 'black',
    borderRadius: '5px'
  }

  
const Navbar = (props) => {

        return (
            <div className="navbar">
                {!props.currentUser ?
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
                </React.Fragment>
               : 
               <React.Fragment>
                   <NavLink to="/" exact className="nav-link"
                        style={link}
                        activeStyle={{
                        background: 'black',
                        color: 'white'
                        }}
                    >HOME</NavLink>
                    <NavLink to="/about" exact className="nav-link"
                        style={link}
                        activeStyle={{
                        background: 'black',
                        color: 'white'
                        }}
                    >ABOUT US</NavLink>
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
               </React.Fragment>
               }
            </div>

            
        )
        
}

export default Navbar
