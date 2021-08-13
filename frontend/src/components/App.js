import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// importing BrowserRouter from react-router-dom, creating alias Router.
// react-router-dom is a node package
// when the URL matches the specified path, render that component
import './App.css'
import Login from './Login'
import Signup from './Signup'
import CategoryForm from './CategoryForm'
import BookmarkForm from './BookmarkForm'
import Bookmarks from './Bookmarks'
import Categories from './Categories'



function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} /> 
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/bookmarks/new" component={BookmarkForm} />
          <Route exact path="/" component={Bookmarks} />
      </Router>
      
    </div>
  ) 
  // we pass in a component to be rendered at the exact path
}

export default App
