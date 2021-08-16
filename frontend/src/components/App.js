import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// importing BrowserRouter from react-router-dom, creating alias Router.
// react-router-dom is a node package
// when the URL matches the specified path, render that component
import './App.css'
import Login from './Login'
import Signup from './Signup'
import {connect} from 'react-redux'
import { signupUser, loginUser, logoutUser } from '../actions/index'



class  App extends React.Component {
  state = {
    isLoggedIn: false,
    user = {}
  }

  componentDidMount(){
    this.loginStatus()
    return this.props.loggedInState ? this.redirect() : null
  }

  loginStatus = () => {
    fetch("http://localhost:3000/login", { user })
    .then(response => {
      if (response.data.logged_in){
        this.props.loginUser(response)
      } else {
        this.props.logoutUser()
      }
    })
  }

  redirect = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <Router>
            <Navbar/>
            <Switch>
              <Route exact path="/login" render={routeProps => <Login loginUser={this.props.loginUser} {...routeProps} />}/>
              <Route exact path="/signup" render={routeProps => <Signup signupUser={this.props.signupUser} {...routeProps} />}/>
            </Switch>
        </Router>
        
      </div>
    ) 
  }
}


const mapStateToProps = (currentState) => {
  return {
    bookmarks: currentState.bookmarks,
    categories: currentState.categories
  }
}

// mSTP selects the part of the data from the store to be connected to App Component
// mSTP reutrns a plain object containing the data from the store
// called every time Redux store state changes
// first arg = the entire store state
// key:value pairs => each field becomes a prop for app component

const mapDispatchToProps = (dispatch) => {
  return {
    createBookmark: (bookmark) => dispatch(createBookmark(bookmark)),
    deleteBookmark: (id) => dispatch(deleteBookmark(id)),
    getBookmarks: (bookmarks) => dispatch(getBookmarks(bookmarks)),
    favoriteBookmark: (id) => dispatch(favoriteBookmark(id)),
    createCategory: (category) => dispatch(createCategory(category)),
    deleteCategory: (id) => dispatch(deleteCategory(id)),
    getCategories: (categories) => dispatch(getCategories(categories))
  }
}

// mDTP dispatches actions to the store
// first arg: dispatch => a function of the store; the only way to trigger a state change
// we return each action function with dispatch inside
// we pass to dispatch the action and its args
// we bind on each component mount
// mDTP returns a plain object
// each field becomes a separate prop for app component

export default connect(mapStateToProps, mapDispatchToProps)(App)
// connect() accesses the store for us