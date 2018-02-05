import React,{ Component }  from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class Element extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        // styles.button.backgroundColor = 'yellow';
        return (
            <View>
                <TouchableOpacity
                    // style={[styles.button, {}]}
                    style={[styles.button, {backgroundColor: this.props.color}]}
                    onPress={() => this.props.callback(this.props)}
                >
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'yellow',
        padding: 4,
        width:50,
        height: 50,
        borderRadius: 50/2,
        marginHorizontal: 20, 

    }}
);
