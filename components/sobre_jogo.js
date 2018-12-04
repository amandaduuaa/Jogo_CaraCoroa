import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class sobre_jogo extends Component {
    render() {
        return (
            <View style={estilo.container}>
                <Text> ola sobre o jogo </Text>
            </View>

        )
    }
};
const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
