import createReducer from '../lib/createReducer'
import * as types from '../actions/types'


export const testNum = createReducer(0, {
  [types.DO_ACTION](state, action) {
    return state + 1;
  }
});