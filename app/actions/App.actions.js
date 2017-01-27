
export const types = ((arr) => {
    let res = {};
    arr.forEach((key) => {
      res[key] = key;
    });
    return res;
  })([
    'DO_ACTION',
    'START_ACCELEROMETER',
    'STOP_ACCELEROMETER'
  ]);

export function doAction () {
  return {
    type: types.DO_ACTION
  };
}

export function startAccelerometer () {
  return {
    type: types.START_ACCELEROMETER
  };
}

export function stopAccelerometer () {
  return {
    type: types.STOP_ACCELEROMETER
  };
}