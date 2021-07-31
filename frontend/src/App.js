import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Bookmarks from './Bookmarks'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} /> 
        <Route exact path="/bookmarks" component={Bookmarks} />
      </Router>
    </div>
  );
}

export default App;
