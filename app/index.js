/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import reducer from './reducers'
import AppContainer from './containers/AppContainer'



const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore (initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});


const App = () => {
  return <Provider store={store}>
      <AppContainer/>
    </Provider>
};


AppRegistry.registerComponent('ReactBar', () => ReactBar);

export default App;