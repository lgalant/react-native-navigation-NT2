import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Principal from './paginas/principal'
import Detalle from './paginas/detalle'
import Settings from './paginas/settings'

import {NavigationContainer} from '@react-navigation/native'

import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'


//const miStack = createStackNavigator()
const miBottomNav = createBottomTabNavigator()
//const miStack = createDrawerNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <miBottomNav.Navigator initialRouteName={"Pant-Principal"}>
        <miBottomNav.Screen name="Pant-Principal" component={Principal}/>
        <miBottomNav.Screen name="Configuracion" component={Settings} options={{title:'Config'}}/>
      </miBottomNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
