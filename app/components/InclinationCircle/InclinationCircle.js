import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  DeviceEventEmitter
} from 'react-native';

import { SensorManager } from 'NativeModules';

import Svg, {
  Circle,
  Line
} from 'react-native-svg';


export class InclinationCircle extends Component {


  constructor(props) {
    super(props);
    this.state = {
      angle: 0,
      pippo: 'orange'
    };

  }

  componentDidMount() {

    let that = this;

    this.accelerometerSubscription = DeviceEventEmitter.addListener('Accelerometer', function (data) {
      let norm = Math.sqrt(data.x * data.x + data.y * data.y);
      let incl = Math.acos(data.y / norm); // normalized y
      that.setState({
        angle: data.x < 0 ? incl * -1 : incl,
        pippo: incl < 0.5 ? 'red' : 'yellow'
      });


    });
    SensorManager.startAccelerometer(50);
  }

  componentWillUnmount() {
    SensorManager.stopAccelerometer();
    this.accelerometerSubscription.remove();
  }

  render() {

    var styles = {
      radius: 100,
      strokeWidth: 2,
      stroke: 'gray'
    };

    return (

      <View >
        <Svg height={styles.radius * 2 + styles.strokeWidth * 2}
             width={styles.radius * 2 + styles.strokeWidth * 2}
             style={{
                transform: [
                            {
                              rotate: this.state.angle + 'rad'
                            }
                           ]
                          }}>
          <Circle cx={styles.radius + styles.strokeWidth}
                  cy={styles.radius + styles.strokeWidth}
                  r={styles.radius}
                  stroke={this.state.pippo}
                  strokeWidth={styles.strokeWidth}
                  fill="rgba(0,0,0,.2)">
          </Circle>
          <Line
            x1={styles.radius + styles.strokeWidth}
            y1={styles.strokeWidth}
            x2={styles.radius + styles.strokeWidth}
            y2={styles.radius * 2 + styles.strokeWidth}
            stroke={styles.stroke}
            strokeWidth={styles.strokeWidth}
            />
          <Line
            x1={styles.strokeWidth}
            y1={styles.radius + styles.strokeWidth}
            x2={styles.radius * 2 + styles.strokeWidth}
            y2={styles.radius + styles.strokeWidth}
            stroke={styles.stroke}
            strokeWidth={styles.strokeWidth}
            />
          <Line
            x1={styles.radius + styles.strokeWidth}
            y1={styles.radius + styles.strokeWidth}
            x2={(styles.radius + styles.strokeWidth) + styles.radius * Math.cos(Math.PI / 6 * 8)}
            y2={(styles.radius + styles.strokeWidth) + styles.radius * Math.sin(Math.PI / 6 * 8)}
            stroke={styles.stroke}
            strokeWidth={styles.strokeWidth}
            />
          <Line
            x1={styles.radius + styles.strokeWidth}
            y1={styles.radius + styles.strokeWidth}
            x2={(styles.radius + styles.strokeWidth) + styles.radius * Math.cos(Math.PI / 6 * 10)}
            y2={(styles.radius + styles.strokeWidth) + styles.radius * Math.sin(Math.PI / 6 * 10)}
            stroke={styles.stroke}
            strokeWidth={styles.strokeWidth}
            />
        </Svg>
        <View style={{
          height: 100,
          width: 2,
          backgroundColor: 'blue',
          position: 'absolute',
          top: styles.radius + styles.strokeWidth,
          left: styles.radius + styles.strokeWidth
        }}>
        </View>
      </View>


    );
  }
}
