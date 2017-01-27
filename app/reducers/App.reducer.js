

import { types } from '../actions/App.actions.js'



import { SensorManager } from 'NativeModules'


import InclinationCircle from './InclinationCircle.reducer';





function testNum (state = 0, action) {
  switch (action.type) {
    case types.DO_ACTION:
      return state + 1;
    default:
      return state
  }
}

function accelerometerActive (state = false, action) {
  switch (action.type) {
    case types.START_ACCELEROMETER:
      SensorManager.startAccelerometer(50);
      return true;
    case types.STOP_ACCELEROMETER:
      SensorManager.stopAccelerometer();
      return false;
    default:
      return state
  }
}


export const initialState = {
  accelerometerActive: false,
  testNum: 0,
  inclinationCircle: InclinationCircle.initialState
};

export default function reducer(state = initialState, action) {
  return {
    accelerometerActive: accelerometerActive(state.accelerometerActive, action),
    testNum: testNum(state.testNum, action),
    inclinationCircle: InclinationCircle.reducer(state.inclinationCircle, action)
  };
}

