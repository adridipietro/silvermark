import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import '../App.css'

import Navbar from './Navbar'
/* import Login from './Login'
import Signup from './Signup'
import Logout from './Logout' */
import Bookmarks from '../containers/Bookmarks'
import AboutUs from '../containers/AboutUs'
import Categories from '../containers/Categories'
import Home from '../containers/Home'
import BookmarkCard from '../containers/BookmarkCard'

import { connect } from 'react-redux'
import history from '../history'

import { getBookmarks, createBookmark, deleteBookmark, favoriteBookmark, filterCategory} from '../actions/index'
import { getCategories, createCategory, deleteCategory } from '../actions/index'





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
              <Route exact path='/' render={() => <Home />}/>
              <Route exact path='/about' render={() => <AboutUs/>} />
              <Route exact path="/bookmarks" render={routeProps => <Bookmarks bookmarks={this.props.bookmarks} getBookmarks={this.props.getBookmarks} createBookmark={this.props.createBookmark} filterCategory={this.props.filterCategory} deleteBookmark={this.props.deleteBookmark} favoriteBookmark={this.props.favoriteBookmark} categories={this.props.categories} createCategory={this.props.createCategory} {...routeProps} />}/>
              <Route exact path="/categories" render={routeProps => <Categories categories={this.props.categories} deleteCategory={this.props.deleteCategory} {...routeProps} /> }/>
              <Route exact path='/bookmarks/:id' render={routeProps => <BookmarkCard categories={this.props.categories} deleteBookmark={this.props.deleteBookmark} favoriteBookmark={this.props.favoriteBookmark} {...routeProps}/>}/>
              <Route exact path='/categories/:id' render={routeProps => <BookmarkCard categories={this.props.categories} deleteBookmark={this.props.deleteBookmark} favoriteBookmark={this.props.favoriteBookmark} {...routeProps}/>}/>
            </Switch>
        </Router>
      </div>
    ) 
  }
}


const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarks.bookmarks,
    categories: state.categories.categories,
    requesting: state.requesting
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createBookmark: (bookmark) => dispatch(createBookmark(bookmark)),
    deleteBookmark: (id) => dispatch(deleteBookmark(id)),
    getBookmarks: () => dispatch(getBookmarks()),
    favoriteBookmark: (id, favorite) => dispatch(favoriteBookmark(id, favorite)),
    createCategory: (category) => dispatch(createCategory(category)),
    deleteCategory: (id) => dispatch(deleteCategory(id)),
    getCategories: () => dispatch(getCategories()),
    filterCategory: (id) => dispatch(filterCategory(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
