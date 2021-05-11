import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Detalle({navigation, route}) {

    console.log("Route", route)

    //const nombre = route.params.nombre
   // const {nombre, apellido} = route.params
  useEffect(()=>{
        navigation.setOptions({title:'Titulo dinamico'})

  },[])
  return (
    <View style={styles.container}>
      <Text>Bienvenido/a a pagina detalle!</Text>
      <StatusBar style="auto" />

      <Button
      title="Ir a settings"
      onPress={() => navigation.navigate("Configuracion") }
      />



    </View>
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