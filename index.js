import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image
} from 'react-native';
import CirclularProgressBar from './components/CirclularProgressBar';

export default class TestComponent extends Component {
  render() {
    return (
      <Image
      source={require('./assets/images/background.png')}
      style={styles.container}>
          <CirclularProgressBar />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

AppRegistry.registerComponent('TestComponent', () => TestComponent);
