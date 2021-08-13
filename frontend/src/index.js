import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";


function createStore(reducer) {
  let state
  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action)
      return state
    }

  }

}



ReactDOM.render(
  <Provider store={createStore}>
    <App />
  </Provider >,
  document.getElementById('root')
);

