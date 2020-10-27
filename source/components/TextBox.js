import React from 'react';
import {View, StyleSheet,TextInput} from 'react-native'


const TextBox = ()=>{
    return(
        
        <View style={Estilos.container}>
            <TextInput style={Estilos.textEntry}/>
        </View>
    )
};

const Estilos = StyleSheet.create({
    
    container:{
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,
        

    },
    textEntry:{
        padding:5,
        borderWidth: 1,
        borderColor: '#a9a9a9',
        borderRadius: 7,

    },
})

export default TextBox;