import React,{ Component }  from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CountdownCircle from 'react-native-countdown-circle'


export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.props = props;}
  render() {
    return (
      <View style={styles.container}>
        <CountdownCircle
            seconds={5}
            radius={40}
            borderWidth={8}
            color="#841584"
            bgColor="white"
            textStyle={{ fontSize: 30 }}
            onTimeElapsed={this.props.TimeCallback}
            // onTimeElapsed={() => console.warn("Here")}
        />     
      </View>
    );
  }
}


const styles = StyleSheet.create({

  container: {
    justifyContent: "space-between",
    width: 50,
    height:50,
    paddingLeft: 30,
    flexDirection: 'row'}
  });

