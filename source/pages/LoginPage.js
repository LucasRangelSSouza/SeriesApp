import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { NativeModules, StyleSheet, Text, View,ActivityIndicator } from 'react-native';



export default class PeoplePage extends React.Component {
  constructor(props){
    super(props);
    
    
    this.state = {
      autenticado: false
    }

  };


  render() {   
    return (
      <View style={estilo.container}>
        <Text style={estilo.erro} > Login </Text>
      </View>
    );
  }

}

const estilo = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#7B7C7C',
    fontSize: 35
  },
  erro:{
    color:'red',
    alignSelf: 'center',
    fontSize: 50
  }

}); 

