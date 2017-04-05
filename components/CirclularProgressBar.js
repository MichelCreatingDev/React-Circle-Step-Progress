import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AnimatedCircularProgress from './AnimatedCircularProgress';

export default class CirclularProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {fill: 75,
                  word: 89};
  }
  render() {
    return (
      <View>
        <AnimatedCircularProgress
          size={345}
          width={18}
          fill={this.state.fill}
          prefill={0}
          backgroundColor="rgba(255,255,255,0.1)"
        >
          {
            (fill) => (
              <View style={styles.progress_text}>
                <Text style={styles.percent}>
                  { fill.toFixed(0) } <Text style={{fontSize:20}}>%</Text>
                </Text>
                <Text style={styles.accuracy}>ACCURACY</Text>
                <Text style={styles.no_word}>089</Text>
                <Text style={styles.wordtext}>WORDS</Text>
              </View>
            )
          }
        </AnimatedCircularProgress>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  progress_text: {
    position: "absolute",
    top:110,
    left: 135,
    alignItems:"center"
  },
  percent: {
    fontWeight: "800",
    fontFamily: "Montserrat-Regular",
    fontSize: 35,
    color: "#ffde84",
    padding: 0
  },
  accuracy: {
    color: 'white',
    fontFamily: "Montserrat-Regular"
  },
  no_word: {
    fontFamily: "Montserrat-Regular",
    fontSize:40,
    color: '#ffde84',
  },
  wordtext: {
    fontFamily:"Montserrat-Regular",
    fontSize:15,
    color: 'white',
  }
});
