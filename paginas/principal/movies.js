import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View , Image} from 'react-native';
import { useEffect , useState} from 'react';

export default function Movies({navigation}) {
    //console.log("Navigation prop", navigation)

    const [movies, setMovies] = useState([])
    const [filtro, setFiltro] = useState("Rock")

    function buscaPelis() {
        const f = fetch("https://www.omdbapi.com/?s="+filtro+"&apikey=2b23ac0e&page=1");
        return f
          .then(res => res.json())
          .then(json_extraido => {
            console.log("json.search", json_extraido.Search);
            setMovies(json_extraido.Search);
          })
          .catch(error => console.log("Fallo:" + error));
      }

  useEffect(()=> {
      buscaPelis()
  },[])


  return (
    <View style={styles.container}>

      <Text>Binvenidos movies!</Text>
      <StatusBar style="auto" />
      {movies && movies.map((movie,index) => (
          <View>
          <TouchableHighlight key={index}  onPress={()=> navigation.navigate("Pelis-detalle",{movie})}>
          <Text style={{marginHorizontal:20}}>
          { movie.Title} - { movie.Year}
        </Text>

        </TouchableHighlight>
                <Image source ={{uri:movie.Poster}} style={{height:80, resizeMode:'contain', margin:10}} />
                </View>
      ))}
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