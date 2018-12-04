import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet

} from 'react-native';


export default class outros extends Component {
    render() {
        return (
            <View style={estilo.container}>
                <Text> ola outros </Text>
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
