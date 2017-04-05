'use strict';

import React, { Component } from 'react';
import { Text,StyleSheet } from 'react-native';

import moment from 'moment';
require('moment-duration-format');

export default class TimerDisplay extends Component {
  render() {
    return (
      <Text style={styles.timer}>
        {moment.duration(this.props.timeLeft, 'seconds').format('hh:mm:ss', { trim: false })}
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  timer: {
    fontFamily: "Montserrat-Regular",
    fontSize: 40,
    color: "#ffde84",
    marginLeft: 40,
    marginTop: 5
  }
})
TimerDisplay.propTypes = {
  timeLeft: React.PropTypes.number.isRequired
};
