import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { promiseMiddleware, logger } from './redux/middlewares';
import App from './components/App';

let reducer = (state = {}, action) => {
  return state;
};

let store = createStore(reducer, applyMiddleware(promiseMiddleware, logger()));

render(<App store={store}/>, document.getElementById('root'));
