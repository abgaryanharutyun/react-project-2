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

import Button from './Button';


export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // w: 100,
            // h: 100,

        }
        // this._startRoundOne = this._startRoundOne.bind(this);
    }

    render() {
        return (


            <View>
                {/* //<Timer /> */}
                {/* <Counter count={this.state.count}/> */}
                {/* <View style={[styles.box, {width: this.state.w, height: this.state.h}]} /> */}
                <Text style={styles.welcome}>
                    Welcome to Tapit!
                </Text>
                <Text style={styles.instructions}>
                    To get started, click the Button
                </Text>

            </View>

        );
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: '#841584',
        // fontFamily: 'Permanent Marker',
    },
    instructions: {
        fontSize: 25,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        // fontFamily: 'Permanent Marker',
    },

    box: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
    },
});