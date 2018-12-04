import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import principal from './components/principal';
import sobre_jogo from './components/sobre_jogo';
import outros from './components/outros';
import resultado from './components/resultado';


export default class App extends Component {
  render() {
    return (
      <Router sceneStyle={{ backgroundColor: 'blue', paddingTop: 50 }}>
        <Stack key="root">

          <Scene key="principal" component={principal} title="Principal" initial />
          <Scene key="sobre_jogo" component={sobre_jogo} title="Sobre o Jogo" />
          <Scene key="outros" component={outros} title="Outros" />
          <Scene key="resultado" component={resultado} title="resultado" />

        </Stack>
      </Router>

    );
  }
}


