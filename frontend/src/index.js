import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk))
// initializing the store
// applyMiddleware() is a function from redux
// thunk is from redux-thunk package and passed into applyMiddleware


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Middleware allows us to slightly alter the behavior of actions
// Middleware allows us to add async behavior



// Thunk allows us to return a function inside of our action creator
// Normally, an action creater returns a JS object
// This function, instead, receive's the store's dispatch function as its arg
// Able to dispatch multiple actions from inside that returned function