import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import LoginPage from './source/pages/LoginPage';




const AppNavigator = createStackNavigator({

  
  'Main':{
    screen: LoginPage
  }


} , {

    defaultNavigationOptions: {
      title: 'SERIES',
      headerTintColor: '#EDEDEB',
      headerStyle:{
        backgroundColor: 'black',
      },
      headerTitleStyle:{
        fontSize: 25,
        color: '#E50914',
        flexGrow: 1,
        textAlign: 'center',
        fontWeight: 'bold'
      }
    }
  });


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;