export const ACTIVATE_INCLINATION_CIRCLE = 'ACTIVATE_INCLINATION_CIRCLE';
export const DEACTIVATE_INCLINATION_CIRCLE = 'DEACTIVATE_INCLINATION_CIRCLE';


import EventEmitter from 'EventEmitter';


export const eventEmitter = new EventEmitter();


export function activateInclinationCircle () {
  eventEmitter.emit('ACTIVATE_INCLINATION_CIRCLE');
  return {
    type: ACTIVATE_INCLINATION_CIRCLE
  };
}

export function deactivateInclinationCircle () {
  eventEmitter.emit('DEACTIVATE_INCLINATION_CIRCLE');
  return {
    type: DEACTIVATE_INCLINATION_CIRCLE
  };
}