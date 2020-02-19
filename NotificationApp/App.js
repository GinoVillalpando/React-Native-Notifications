/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 
 * @author Gino Villalpando @ GinoVillalpandoWork@gmail.com
 * 
 */

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Header from './components/Header'

const App = () =>  {
  return (
    <>
      <Header/>
      <View style={styles.div}>
        <Text style={styles.text}>Grievxus Productions</Text>
        <Image source={{uri: 'https://randomuser.me/api/portraits/men/8.jpg'}} 
               style={styles.img}/>
      </View>
      
    </>
  );
};

const styles = StyleSheet.create({
    div: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#333',
      fontSize: 30,
    },
    img: {
      width: 100,
      height: 100,
      borderRadius: 100 / 2
   },
});

export default App;
