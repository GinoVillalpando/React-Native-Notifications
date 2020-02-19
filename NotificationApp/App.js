/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * 
 * @author Gino Villalpando @ GinoVillalpandoWork@gmail.com
 * 
 */

import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import Header from './components/Header'
import { uuid } from 'uuidv4';
import PartList from './components/PartList'


const App = () =>  {

  const [pcItems, setPcItems] = useState([
    {id: uuid(), text: "Graphics Card"},
    {id: uuid(), text: "CPU"},
    {id: uuid(), text: "Motherboard"},
    {id: uuid(), text: "Solid State Drive"},
    {id: uuid(), text: "Power Supply"},
    {id: uuid(), text: "RAM"},
    {id: uuid(), text: "Case"},
  ]);

  return (
    <>
      <Header name="Notification App"/>
      <FlatList data={pcItems} 
                renderItem={({item}) => <PartList item={item}/>}
                />
      <View style={styles.div}>
        <Text style={styles.text}>Grievxus Productions</Text>
        <Image source={{uri: 'https://randomuser.me/api/portraits/men/12.jpg'}} 
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
