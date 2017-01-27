
import * as actions from '../actions/InclinationCircle.actions.js'



function active (state = false, action) {
  switch (action.type) {
    case actions.ACTIVATE_INCLINATION_CIRCLE:
      return true;
    case actions.DEACTIVATE_INCLINATION_CIRCLE:
      return false;
    default:
      return state
  }
}


const initialState = {
  active: false
};

function inclinationCircle(state = initialState, action) {
  return {
    active: active(state.active, action)
  };
}

export default {
  reducer: inclinationCircle,
  initialState: initialState
};