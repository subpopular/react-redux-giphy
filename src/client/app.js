import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from './redux/thunk-middleware';
import App from './components/App';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state,
        loading: false,
        gifs: action.payload.data
      };
    default:
      return state;
  }
};

const store = createStore(reducer, {}, applyMiddleware(thunkMiddleware, logger()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
