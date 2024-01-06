/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { GluestackUIProvider, Button, Image } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme

import { NavigationContainer } from '@react-navigation/native';//Para navegacion
import { createNativeStackNavigator } from '@react-navigation/native-stack';//Para navegacion

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './components/Home';
import Calcular from './components/Calular';



function App(): React.JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='#dd7e02'
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Calcular" component={Calcular} />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>

  );
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#dd7e02',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
