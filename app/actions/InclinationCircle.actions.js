export const ACTIVATE_INCLINATION_CIRCLE = 'ACTIVATE_INCLINATION_CIRCLE';
export const DEACTIVATE_INCLINATION_CIRCLE = 'DEACTIVATE_INCLINATION_CIRCLE';

export function activateInclinationCircle () {
  return {
    type: ACTIVATE_INCLINATION_CIRCLE
  };
}

export function deactivateInclinationCircle () {
  return {
    type: DEACTIVATE_INCLINATION_CIRCLE
  };
}