import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextBox from '../components/TextBox'


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
        <TextBox />
        <TextBox />
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

}); 

