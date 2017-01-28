
import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import { connect } from 'react-redux'


import * as AppActions from '../actions/App.actions.js';
import * as InclinationCircleActions from '../actions/InclinationCircle.actions';


import InclinationCircle from '../components/InclinationCircle'

class AppContainer extends Component {

  constructor(props) {
    super(props);
  }

  doAction() {

    this.props.activateInclinationCircle();
  }

  render() {
    return (
      <View>
        <Text>
          AppContainer: testNum = { this.props.testNum }
        </Text>
        <TouchableHighlight onPress={ this.props.doAction }>
          <Text>
            Do Action!
          </Text>
        </TouchableHighlight>
        <InclinationCircle radius={100} strokeWidth={2}/>
        <TouchableHighlight onPress={ this.props.startAccelerometer }>
          <Text>
            Activate
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this.props.stopAccelerometer }>
          <Text>
           Deactivate
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

// bind action creators to props
function mapDispatchToProps (dispatch, ownProps) {
  return {
    startAccelerometer: () => {
      dispatch(AppActions.startAccelerometer());
      dispatch(InclinationCircleActions.activateInclinationCircle());
    },
    stopAccelerometer: () => {
      dispatch(AppActions.stopAccelerometer());
      dispatch(InclinationCircleActions.deactivateInclinationCircle());
    },
    doAction: () => {
      dispatch(AppActions.doAction())
    }
  };
}


export default connect((state) => { return {
  testNum: state.testNum
} }, mapDispatchToProps)(AppContainer);
