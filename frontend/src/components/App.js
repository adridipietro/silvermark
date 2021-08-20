import React from 'react'
import Navbar from './Navbar'
import { Router, Route, Switch } from 'react-router-dom'
// importing BrowserRouter from react-router-dom, creating alias Router.
// react-router-dom is a node package
// when the URL matches the specified path, render that component
import './App.css'
import Login from './Login'
import Signup from './Signup'
import Logout from './Logout'
import BookmarkForm from './BookmarkForm'
import Bookmarks from '../containers/Bookmarks'
import Home from '../containers/Home'
import Categories from '../containers/Categories'
import {connect} from 'react-redux'
import history from '../history'
import AboutUs from '../containers/AboutUs'
import { getBookmarks, createBookmark, deleteBookmark, editBookmark, favoriteBookmark } from '../actions/index'
import { getCategories, createCategory, deleteCategory, filterByCategory } from '../actions/index'
import { signupUser, loginUser, logoutUser } from '../actions/index'




class App extends React.Component {
  
  
  componentDidMount(){
      this.props.getBookmarks()
      this.props.getCategories()
    
  }

  

 
  render() {
    return (
      <div className="App">
        <Router history={history}>
            <Navbar />
            <Switch>
              <Route exact path='/' render={routeProps => <Home {...routeProps}/>}/>
              <Route exact path='/about' render={routeProps => <AboutUs {...routeProps}/>} />
              <Route exact path="/categories" render={routeProps => <Categories categories={this.props.categories} deleteCategory={this.props.deleteCategory} createCategory={this.props.createCategory} filterByCategory={this.props.filterByCategory} {...routeProps} /> }/>
              <Route exact path="/login" render={routeProps => <Login loginUser={this.props.loginUser} {...routeProps} />}/>
              <Route exact path="/signup" render={routeProps => <Signup signupUser={this.props.signupUser} {...routeProps} />}/>
              <Route exact path="/bookmarks" render={routeProps => <Bookmarks bookmarks={this.props.bookmarks} deleteBookmark={this.props.deleteBookmark} editBookmark={this.props.editBookmark} favoriteBookmark={this.props.favoriteBookmark} {...routeProps} />}/>
              <Route exact path="/bookmarks/new" render={routeProps => <BookmarkForm createBookmark={this.props.createBookmark} categories={this.props.categories} {...routeProps}/>}/>
              <Route exact path="/logout" render={routeProps => <Logout logoutUser={this.props.logoutUser} {...routeProps}/>}/>
            </Switch>
        </Router>

      </div>
    ) 
  }
}


const mapStateToProps = (currentState) => {
  return {
    bookmarks: currentState.bookmarks.bookmarks,
    categories: currentState.categories.categories,
    users: currentState.users.user
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
    getBookmarks: () => dispatch(getBookmarks()),
    favoriteBookmark: (id) => dispatch(favoriteBookmark(id)),
    editBookmark: (id) => dispatch(editBookmark(id)),
    createCategory: (category) => dispatch(createCategory(category)),
    filterByCategory: (id) => dispatch(filterByCategory(id)),
    deleteCategory: (id) => dispatch(deleteCategory(id)),
    getCategories: (categories) => dispatch(getCategories(categories)),
    signupUser: (user) => dispatch(signupUser(user)),
    loginUser: (user) => dispatch(loginUser(user)),
    logoutUser: () => dispatch(logoutUser())
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