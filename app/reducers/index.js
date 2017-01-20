import { combineReducers } from 'redux'
import * as testsReducer from './tests'

export default combineReducers(Object.assign(
  testsReducer
));