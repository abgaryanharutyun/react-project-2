import React, {Component} from 'react';
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
import CountdownCircle from 'react-native-countdown-circle'

import Button from './Button';
import Timer from './Timer';
import Welcome from './Welcome';
import Level1 from './Level1';
import Between from './Between';
import BetweenW from './BetweenW';
import Level2 from './Level2';

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

const State = {
    Welcome: 'Welcome',
    Level1: 'Level1',
    Level2: 'Level2',
    Between: 'Between',
    BetweenW: 'BetweenW'
    //Over: 'Over'
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: State.Level1
        };
    };

    next = () => {
        //console.warn("Here");
        if (this.state.current === State.Welcome) {
            this.setState({current: State.Level1})
        }
        else if (this.state.current === State.Level1) {
            this.setState({current: State.BetweenW})
        }
        else if (this.state.current === State.BetweenW) {
            this.setState({current: State.Level2})
        }
    }
    previous = () => {
        //console.warn("Here");
        if (this.state.current === State.Level1) {
            this.setState({current: State.Between})
        }
        else if (this.state.current === State.Between) {
            this.setState({current: State.Level1})
        }
    }


    render() {

        if (this.state.current === State.Welcome) {
            return (
                <View style={styles.container}>
                    <Welcome/>
                    <Button callback={this.next} text="Start the Game"/>
                </View>);
        }
        else if (this.state.current === State.Level1) {
            return (
                <View style={{flex: 1}}>
                    <Level1 nextLevel={this.next}
                            previousLevel={this.previous}>
                    </Level1>
                </View>)
        }
        else if (this.state.current === State.Between) {
            return (
                <View style={styles.container}>
                    <Between/>
                    <Button callback={this.previous} text="Play Level 1"/>
                </View>
            )
        }
        else if (this.state.current === State.BetweenW) {
            return (
                <View style={styles.container}>
                    <BetweenW/>
                    <Button callback={this.next} text="Play Level 2"/>
                </View>
            )
        }

        else if (this.state.current === State.Level2) {
            return (
                <View style={styles.container}>
                    <Level2/>

                </View>
            )
        }

    }

    //       <View style={styles.container}>
    //       {/* //<Timer /> */}
    //       {/* <Counter count={this.state.count}/> */}
    //        {/* <View style={[styles.box, {width: this.state.w, height: this.state.h}]} /> */}
    //       <Text style={styles.welcome}>
    //         Welcome to Tapit!
    //       </Text>
    //       <Text style={styles.instructions}>
    //         To get started, click the Button
    //       </Text>
    //       <Button callback = {this._startRoundOne} text="Start the Game"
    //       />
    //     </View>

    //   );
    // }


// const welcome = setstate(

//  )
//  _startRoundOne() {
//     LayoutAnimation.spring();
//     this.setState({
//         w: this.state.w + 15, 
//         h: this.state.h + 15,

//     });
//   }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
})
//   welcome: {
//     fontSize: 30,
//     textAlign: 'center',
//     margin: 10,
//     color: '#841584',
//     fontFamily: 'Permanent Marker',
//   },
//   instructions: {
//     fontSize: 25,
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//     fontFamily: 'Permanent Marker',
//   },

//   box: {
//     width: 200,
//     height: 200,
//     backgroundColor: 'red',
//   },
// });
