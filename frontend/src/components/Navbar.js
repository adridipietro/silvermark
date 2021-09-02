import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";



const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'white',
    textDecoration: 'none',
    color: 'black',
    borderRadius: '5px'
}

const categorylink = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'white',
    textDecoration: 'none',
    color: 'black',
    borderRadius: '5px',
    fontSize: 'small'
}

const capitalize = (str) => {
    return str.toUpperCase()
}

  
class Navbar extends React.Component {


     render() {
        return (
                <div className="navbar">
                    <React.Fragment>
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
                    <br></br>
                    <br></br>
                    <br></br>
                    <React.Fragment>
                        {this.props.categories.map(category => {
                            return <NavLink to={`/categories/${category.id}`} className="nav-link"
                            style={categorylink}
                            key={`${category.id}`}
                            activeStyle={{
                            background: 'white',
                            color: 'red'
                            }}
                        >{capitalize(category.name)}</NavLink>
                        })}
                    </React.Fragment>
                </div>
        )
    }
            
    
        
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories.categories
    }
}


  export default connect(mapStateToProps, null)(Navbar);

