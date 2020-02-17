/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 
 * @author Gino Villalpando @ GinoVillalpandoWork@gmail.com
 * 
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () =>  {
  return (
    <>
      <View style={styles.div }>
        <Text style={styles.text}>Grievxus Productions</Text>
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
      fontSize: 30
    }
});

export default App;
