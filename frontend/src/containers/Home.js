import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import BookmarkForm from './BookmarkForm'
import Bookmarks from '../containers/Bookmarks'
import Categories from '../containers/Categories'
import { getBookmarks, createBookmark, deleteBookmark, editBookmark, favoriteBookmark } from '../actions/index'
import { getCategories, createCategory, deleteCategory } from '../actions/index'

export default class Home extends React.Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Navbar/>
                    <Route exact path="/categories" render={routeProps => <Categories categories={this.props.categories} deleteCategory={this.props.deleteCategory} createCategory={this.props.createCategory} {...routeProps} /> }/>
                    <Route exact path="/" render={routeProps => <Bookmarks bookmarks={this.props.getBookmarks} deleteBookmark={this.props.deleteBookmark} editBookmark={this.editBookmark} favoriteBookmark={this.props.favoriteBookmark}/>}/>
                </Switch>
            </Router>
        )

    }
}
