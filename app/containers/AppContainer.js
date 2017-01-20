
import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'


class AppContainer extends Component {

  constructor(props) {
    super(props);
  }

  doAction() {

    this.props.doAction();
  }

  render() {
    return (
      <View>
        <Text>
          AppContainer: testNum = { this.props.testNum }
        </Text>
        <TouchableHighlight onPress={ () => { this.doAction() } }>
          <Text>
            Do Action!
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect((state) => { return {
  testNum: state.testNum
} }, mapDispatchToProps)(AppContainer);
