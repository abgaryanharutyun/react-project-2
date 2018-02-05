import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image
} from 'react-native';

import Element from './Element';


export default class Level2 extends Component {
    constructor(props) {
        super(props);
        state = {grid: []}
    }

    componentWillMount() {
        this.ElementsArr();
    }

    level2Click = () => {
        this.ElementsArr();
    }

    render() {

        return (
            <View style={styles.container}>
                {this.state.grid.map((line, key) => {
                    return (
                        <View key={key} style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
                            {
                                line.map(element => <Element callback={this.level2Click} key={element.id}
                                                             color={element.color || ''}/>)
                            }
                        </View>)
                })
                }
            </View>
        );
    }

    ElementsArr() {
        let results = []

        for (let i = 0; i < 7; i++) {
            results.push([]);
            for (let j = 0; j < 5; j++)
                results[i].push({id: j, color:'yellow'});
        }
        results[Math.floor(Math.random() *  6)][Math.floor(Math.random() * 4)].color = 'blue';

        this.setState({grid: results});
    }
}


const styles = StyleSheet.create({
        container: {
            marginTop: 51,
            justifyContent: "space-between",
            alignItems: 'center',
            flex: 1,
            flexDirection: 'column',
            backgroundColor: '#F5FCFF',
        }
    }
);