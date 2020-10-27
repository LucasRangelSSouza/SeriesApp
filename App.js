import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

import LoginPage from './source/pages/LoginPage';

/* App.js é nossa classe "main" ela é invocada assim que o programa é iniciado
 */


 //App navigator é o responsavel por definir a estrutura de navegaçao
const AppNavigator = createStackNavigator({
  //Primeiro Parametro do app Navigator, deve conter todas as paginas de navegaçoes
  
  'Main':{
    screen: LoginPage
  }

   //---fim do primeiro parametro
} , {

  //Segundo parametro de app navigator

    defaultNavigationOptions: {
      title: 'Series APP',
      headerTintColor: '#EDEDEB',
      headerStyle:{
        borderBottomWidth: 1,
        borderBottomColor: '#7B7C7C',
        backgroundColor: '#7B7C7C',
      },
      headerTitleStyle:{
        fontSize: 25,
        color: '#EDEDEB',
        flexGrow: 1,
        textAlign: 'center',
      }
    }
  });

//Ap container é o container do nosso AppNavigator, para que possamos exportar o container e randeriza-lo
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;