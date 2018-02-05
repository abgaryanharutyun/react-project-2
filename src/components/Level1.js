import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  AlertAndroid,
  NativeModules,
  LayoutAnimation
} from 'react-native';

import Level2 from './Level2';

import Timer from './Timer';
import Counter from './Counter';

const h =8;
const w= 8;
export default class Level1 extends Component {
    constructor(props) {
       super(props);
      this.state = {
           count: 20
    }
   };
   timeCallback = () => {
       if (this.state.count >= 20) {
           this.props.nextLevel();
       }
       else {
           this.props.previousLevel();
       }
   }
 render() {
   return (
  <View style={styles.container}>
     <View style= {{justifyContent: "space-between", flexDirection: 'row' }}>     
     <Timer TimeCallback={this.timeCallback} />
     <Counter count={this.state.count}/>  
     </View>
     <Level2/>
</View> 
   );
 }
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'space-between',
        flex: 1
      }
    });