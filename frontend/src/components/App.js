import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import '../App.css'

import ErrorPage from '../containers/ErrorPage'
import Navbar from './Navbar'
import FilterCategory from '../containers/FilterCategory'
import Bookmarks from '../containers/Bookmarks'
import AboutUs from '../containers/AboutUs'
import Categories from '../containers/Categories'
import Home from '../containers/Home'
import BookmarkCard from '../containers/BookmarkCard'

import { connect } from 'react-redux'
import history from '../history'

import { getBookmarks, createBookmark, deleteBookmark, favoriteBookmark, filterCategory} from '../actions/index'
import { getCategories, createCategory, deleteCategory } from '../actions/index'
import LoadingIndicator from './Loading'





class App extends React.Component {

  componentDidMount(){
    this.props.getBookmarks()
    this.props.getCategories()
  }

  
 
  render() {

    if (!!this.props.loading){
      return <LoadingIndicator/>
    }

    if (!!this.props.error){
      return <ErrorPage error={this.props.error}/>
    }

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
              <Route exact path='/categories/:id' render={routeProps => {
                const bookmarks = this.props.bookmarks.filter(bookmark => bookmark.category_id === routeProps.match.params.id)
                return (!!bookmarks)? (
                  <FilterCategory categories={this.props.categories} bookmarks={this.props.bookmarks} deleteBookmark={this.props.deleteBookmark} favoriteBookmark={this.props.favoriteBookmark} {...routeProps}/>
                ) : (
                  <ErrorPage/>
                )
              }}/>
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
    errors: state.errors
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    createBookmark: (bookmark) => dispatch(createBookmark(bookmark)),
    deleteBookmark: (id) => dispatch(deleteBookmark(id)),
    getBookmarks: () => dispatch(getBookmarks()),
    favoriteBookmark: (id) => dispatch(favoriteBookmark(id)),
    createCategory: (category) => dispatch(createCategory(category)),
    deleteCategory: (id) => dispatch(deleteCategory(id)),
    getCategories: () => dispatch(getCategories()),
    filterCategory: (id) => dispatch(filterCategory(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
