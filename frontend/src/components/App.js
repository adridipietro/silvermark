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
  // we pass in a component to be rendered at the exact path
}

const mapStateToProps = (currentState) => {
  return{
    bookmarks: currentState.bookmarks,
    categories: currentState.categories
  }
}

const mapDispatch = (dispatch, props) => {
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

export default connect(mapStateToProps, mapDispatch)(App)
