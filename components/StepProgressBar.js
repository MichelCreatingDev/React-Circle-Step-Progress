import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import StepIndicator from 'react-native-step-indicator';


const customStyles = {
  stepIndicatorSize: 35,
  currentStepIndicatorSize:35,
  separatorStrokeWidth: 5,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#41bab8',
  stepStrokeWidth: 5,
  stepStrokeFinishedColor: '#41bab8',
  stepStrokeUnFinishedColor: '#41bab8',
  separatorFinishedColor: '#41bab8',
  separatorUnFinishedColor: '#41bab8',
  stepIndicatorFinishedColor: '#e09b02',
  stepIndicatorUnFinishedColor: '#432945',
  stepIndicatorCurrentColor: '#e09b02',
  stepindicatorlabelfontFamily: "Montserrat-Regular",
  stepIndicatorLabelFontSize: 18,
  currentStepIndicatorLabelFontSize: 18,
  stepIndicatorLabelCurrentColor: '#ffffff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#432945',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}
export default class  StepProgressBar extends Component {

  constructor() {
    super();
    this.state = {
      currentPosition: 1,
    }
  }
  render() {
    return (
      <StepIndicator
           customStyles={customStyles}
           currentPosition={this.state.currentPosition}
           stepCount = {5}
           style={{ width: 400 }}
           >
      </StepIndicator>
    );
  }

  onPageChange(position){
      this.setState({currentPosition: position});
  }
}
