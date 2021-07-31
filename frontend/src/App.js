import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} /> 
    </div>
  );
}

export default App;
