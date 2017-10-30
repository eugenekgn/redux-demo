import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import numberOfServerCallsInProgress from './_reducers/numberOfServerCallsInProgress';
import dictators from './_reducers/dictatorsReducer';
import thunk from 'redux-thunk';

// Reducers
const rootReducer = combineReducers({
  dictators,
  numberOfServerCallsInProgress
});

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk, reduxImmutableStateInvariant())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
