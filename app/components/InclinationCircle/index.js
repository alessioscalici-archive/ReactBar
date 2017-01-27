import React, { PureComponent } from 'react';
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

import { connect } from 'react-redux'

import styles from './styles';

// FIXME accelerometer frequency (50) to global config
// FIXME angles to global config

class InclinationCircle extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      angle: 0,
      inclinationStyle: styles.neutralInclination
    };

  }

  componentDidMount() {

    let that = this;

    this.accelerometerSubscription = DeviceEventEmitter.addListener('Accelerometer', function (data) {

      let norm = Math.sqrt(data.x * data.x + data.y * data.y);
      let incl = Math.acos(data.y / norm); // normalized y
      that.setState({
        angle: data.x < 0 ? incl * -1 : incl,
        inclinationStyle:
          incl < 1.5707963267948966 ? // Math.PI / 2
          styles.neutralInclination :
          incl < 2.6179938779914944 ? // Math.PI / 6 * 3
            styles.wrongInclination :
            styles.correctInclination
      });


    });


  }

  componentWillUnmount() {
    this.accelerometerSubscription.remove();
  }

  render() {


    // calculated values
    var val = {
      cx: this.props.radius + this.props.strokeWidth,
      cy: this.props.radius + this.props.strokeWidth,
      internalDiameter: this.props.radius * 2 + this.props.strokeWidth * 0.5,
      externalDiameter: this.props.radius * 2 + this.props.strokeWidth * 2,
      internalRadius: this.props.radius + this.props.strokeWidth * 0.5
    };


    return (

      <View >
        <Svg height={val.externalDiameter}
             width={val.externalDiameter}
             style={{
                transform: [
                            {
                              rotate: this.state.angle + 'rad'
                            }
                           ]
                          }}>
          <Circle cx={val.cx}
                  cy={val.cy}
                  r={this.props.radius}
                  stroke={this.state.inclinationStyle.stroke}
                  strokeWidth={this.props.strokeWidth}
                  fill={this.state.inclinationStyle.background}>
          </Circle>
          <Line
            x1={val.cx}
            y1={this.props.strokeWidth * 1.5}
            x2={val.cx}
            y2={val.internalDiameter}
            stroke={this.state.inclinationStyle.stroke}
            strokeWidth={this.props.strokeWidth}
            />
          <Line
            x1={this.props.strokeWidth * 1.5}
            y1={val.cy}
            x2={val.internalDiameter}
            y2={val.cy}
            stroke={this.state.inclinationStyle.stroke}
            strokeWidth={this.props.strokeWidth}
            />
          <Line
            x1={val.cx}
            y1={val.cy}
            x2={val.cx + val.internalRadius * Math.cos(Math.PI / 6 * 8)}
            y2={val.cy + val.internalRadius * Math.sin(Math.PI / 6 * 8)}
            stroke={this.state.inclinationStyle.stroke}
            strokeWidth={this.props.strokeWidth}
            />
          <Line
            x1={val.cx}
            y1={val.cy}
            x2={val.cx + val.internalRadius * Math.cos(Math.PI / 6 * 10)}
            y2={val.cy + val.internalRadius * Math.sin(Math.PI / 6 * 10)}
            stroke={this.state.inclinationStyle.stroke}
            strokeWidth={this.props.strokeWidth}
            />
        </Svg>
        <View style={{
          height: val.internalRadius,
          width: this.props.strokeWidth,
          backgroundColor: styles.bottleLine.stroke,
          position: 'absolute',
          top: val.cy,
          left: val.internalRadius
        }}>
        </View>
      </View>
    );
  }
}

InclinationCircle.propTypes = {
  radius: React.PropTypes.number.isRequired,
  strokeWidth: React.PropTypes.number.isRequired
};


export default connect((state) => {
  return state.inclinationCircle;
}, () => {
  return {};
})(InclinationCircle);