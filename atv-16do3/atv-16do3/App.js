import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList,Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
} from '@expo-google-fonts/dev';
export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Lato_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}> Os Animais</Text>
        <FlatList
          data={arrayAnimal}
          renderItem={({ item }) => 
          ( <View >
              <Text style={styles.subTitulo}>{item.Animal}</Text>
              <Image style={styles.img}source={item.capa}/>
              <Text style={styles.subTitulo}>Animal: </Text>
              {item.Animal}{'\n'}
              <Text style={styles.subTitulo}>Especie: </Text>
              {item.Especie}{'\n'}
              <Text style={styles.subTitulo}>Alimentacao: </Text>
              {item.Alimentacao}{'\n'}
              <Text>____________________________________________________</Text>
                                
                
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  },
  titulo: {
    fontSize: 40,
    color: '#ff5a73',
    fontFamily: 'Lato_400Regular',
  },
  img:{
    borderRadius: 30,
    width: 300,
    height: 300,
    resizeMode:'center'
  },
  subTitulo:{
    fontSize:20,
    fontWeight:'bold'
  }
});
const arrayAnimal = [
  {
    Animal: 'Urso',
    Especie: 'urso marrom',
    Alimentacao: 'pequenos mamíferos, aves, ovos, peixes, vegetação',
    capa: require('./assets/urso.jpg'),
  },
  {
    Animal: 'Orca',
    Especie: 'cetáceo',
    Alimentacao: 'peixes, lulas, focas, golfinhos e toninhas, pingüins, tartarugas-marinhas',
    capa: require('./assets/orca.jpg')
  },
  {
    Animal: 'Lula Colossal',
    Especie: 'cefalópode',
    Alimentacao: 'peixes, moluscos, outros vertebrados',
    capa:require('./assets/lula.jpg')
  },
  {
    Animal: 'Urubu',
    Especie: 'catartiforme',
    Alimentacao: 'Carniça, frutas',
    capa:require('./assets/urubu.jpg')
  },
  {
    Animal: 'Preguiça Gigate',
    Especie: ' Megatheriidae',
    Alimentacao: 'Ovo, Plantas, Carnes',
    capa: require('./assets/preguica.jpg')
  },
];
