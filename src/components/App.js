import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducer';
import Main from './Main';

const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Main />
      </Provider>
    );
  }
}
