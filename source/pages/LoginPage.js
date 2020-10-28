import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import ViewRow from '../components/ViewRow'


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
        <ViewRow>
          
          <TextInput
            placeholder='Email: user@example.com'
            style={estilo.textEntry}
            placeholderTextColor='#8c8c8c'
           />

          <TextInput
            placeholder='Senha: ******'
            style={estilo.textEntry}
            secureTextEntry
            placeholderTextColor='#8c8c8c'
           />

        </ViewRow>
      </View>
    );
  }

}

const estilo = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  textEntry:{
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 7,
    paddingRight: 10,
    paddingLeft: 10, 
    paddingTop: 13,
    paddingBottom: 13, 
    backgroundColor: '#333333' ,
    color: 'white',
    

  },

}); 

