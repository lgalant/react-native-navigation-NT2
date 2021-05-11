import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import Movies from './movies'
import Detalle from './detalles'

const miStack = createStackNavigator()

export default function Principal({navigation}) {
    //console.log("Navigation prop", navigation)
  return (
    <View style={styles.container}>

        <miStack.Navigator>
        <miStack.Screen name="Pelis-principal" component={Movies}/>
        <miStack.Screen name="Pelis-detalle" component={Detalle} />
      </miStack.Navigator>

 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});