import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Cara = require('./imgs/moeda_cara.png');
const Coroa = require('./imgs/moeda_coroa.png');

export default class resultado extends Component {
    constructor(props) {
        super(props);
        this.state = { resultado: '' };

    }
    componentWillMount() {
        const num = Math.floor(Math.random() * 2);
        let CaraouCoroa = ""
        if (num === 1) {
            CaraouCoroa = "cara";
        } else {
            CaraouCoroa = "coroa";
        }
        this.setState({ resultado: CaraouCoroa });
    }
    render() {
        if (this.state.resultado === 'cara') {
            return (
                <View style={Styles.container}>
                    <Text> O resultado é Cara </Text>
                    <Image source={Cara} />
                </View>
            )
        }
        return (
            <View style={Styles.container}>
                <Text> O resultado é Coroa </Text>
                <Image source={Coroa} />
            </View>
        )
    }

};
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#61BD8C",
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

})