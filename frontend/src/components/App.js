import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// importing BrowserRouter from react-router-dom, creating alias Router.
// react-router-dom is a node package
// when the URL matches the specified path, render that component
import './App.css'
import Login from './Login'
import Signup from './Signup'
import BookmarkForm from './BookmarkForm'
import Bookmarks from './Bookmarks'
import Categories from './Categories'
import {connect} from 'react-redux'
import { getBookmarks, createBookmark, deleteBookmark, favoriteBookmark } from '../actions/index'
import { getCategories, createCategory, deleteCategory} from '../actions/index'



class  App extends React.Component {
  componentDidMount(){
    this.props.getBookmarks()
  }

  render() {
    return (
      <div className="App">
        <Router>
            <Navbar/>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} /> 
              <Route exact path="/categories" render={routeProps => <Categories categories={this.props.categories} deleteCategory={this.props.deleteCategory} addCategory={this.props.addCategory} {...routeProps} /> }/>
              <Route exact path="/bookmarks/new" render={routeProps => <BookmarkForm {...routeProps} addBookmark={this.props.addBookmark}/>} />
              <Route exact path="/" render={routeProps => <Bookmarks bookmarks={this.props.bookmarks} deleteBookmark={this.props.deleteBookmark} favoriteBookmark={this.props.favoriteBookmark} {...routeProps} />}/>
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