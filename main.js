import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';
import CirclularProgressBar from './components/CirclularProgressBar';
// import StepIndicator from 'react-native-step-indicator';
import StepProgressBar from './components/StepProgressBar';
import TimerDisplay from './components/timer-display';

export default class TestComponent extends Component {
  render() {
    return (

        <Image
          source={require('./assets/images/background.png')}
          style={styles.container}>
          <View style={{alignItems:"center", height: 310}}>
            <CirclularProgressBar />
          </View>
          <View style={{width:280}}>
            <View style={styles.dailystep}>
              <Text style={styles.reward}>
              YOUR DAILY REWARDS
              </Text>
            </View>
            <StepProgressBar />

          </View>
          <View style={styles.cart}>
            <Image source={require('./assets/images/cart.png')} style={styles.cartimage}>
              <TimerDisplay timeLeft={100000}/>
              <Text style={styles.remainingtime}>
                Remaining time use again...
              </Text>
            </Image>
          </View>

        </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: undefined,
    height: undefined,
    justifyContent:"flex-start",
    backgroundColor: 'transparent',
  },
  dailystep: {
    alignItems: "center",
    margin: 5
  },
  reward: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "#ffffff",
  },
  cart: {
    flex:1,
    width: 320,
    margin:100
  },
  cartimage: {
    width:undefined,
    height: 150,
    resizeMode: 'stretch'
  },
  remainingtime: {
    fontFamily: "Montserrat-Regular",
    color: "#bebdc2",
    marginLeft: 40
  }
});
AppRegistry.registerComponent('TestComponent', () => TestComponent);
