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

import appReducer from './reducers/App.reducer'
import App from './containers/App'



const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore (initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  return createStore(appReducer, initialState, enhancer);

}

const store = configureStore({});


const AppConst = () => {
  return <Provider store={store}>
      <App/>
    </Provider>
};


AppRegistry.registerComponent('ReactBar', () => ReactBar);

export default AppConst;