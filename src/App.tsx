/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppNavigator from '~navigation/root';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
   );
}

export default App;
