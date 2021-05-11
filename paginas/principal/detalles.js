import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View , Image} from 'react-native';

export default function Detalles({navigation, route}) {
    //console.log("Navigation prop", navigation)
    const {movie} = route.params
  return (
    <View style={styles.container}>

      <Text>Binvenidos detalle!</Text>
      <StatusBar style="auto" />

    <Text> {movie.Title} {movie.Year}</Text>
    <Image source ={{uri:movie.Poster}} style={{height:300, resizeMode:'contain', margin:20}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
   // justifyContent: 'center',
  },
});