

import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableHighlight,
    Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';
//Realizar as ações do Router Flux
//onPress={() => {Actions.sobre_jogo(); }}
//Isso serve para fazer uma ação com basa na key q você definiu

const Logo = require('./imgs/logo.png');
const Jogar = require('./imgs/botao_jogar.png');
const Sobre = require('./imgs/sobre_jogo.png');
const Outros = require('./imgs/outros_jogos.png');


export default class principal extends Component {
    render() {
        return (
            <View style={styles.cenaPrincipal}>
                <View style={styles.conteudo}>
                    <Image source={Logo} />
                    <TouchableHighlight
                    onPress={()=> {Actions.resultado();}}>
                    <Image source={Jogar} />
                    </TouchableHighlight>
                </View>
                <View style={styles.footer}>
                    <TouchableHighlight
                        onPress={() => {Actions.sobre_jogo(); }}>
                       
                        <Image source={Sobre} />
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {Actions.outros(); }}>
                        <Image source={Outros} />
                    </TouchableHighlight>
                   
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    cenaPrincipal: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'space-between',
    },
    conteudo: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',

    },
    footer: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },


});

