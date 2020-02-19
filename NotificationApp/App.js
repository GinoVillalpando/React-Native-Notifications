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
import AddPart from './components/AddPart'


const App = () =>  {

  // create the state that will be used in the list
  const [pcItems, setPcItems] = useState([
    {id: uuid(), text: "Graphics Card"},
    {id: uuid(), text: "CPU"},
    {id: uuid(), text: "Motherboard"},
    {id: uuid(), text: "Solid State Drive"},
    {id: uuid(), text: "Power Supply"},
    {id: uuid(), text: "RAM"},
    {id: uuid(), text: "Case"},
  ]);

  // function that deletes a pc part
  const deletePart = (id) => {
    setPcItems(prevParts => {
      return prevParts.filter(item => item.id != id);
    });
  }

  const addPart = (text) => {
    setPcItems(prevParts => {
      return [{id: uuid(), text}, ...prevParts];
    })
  }

  return (
    <>
      <Header name="I Need PC Parts"/>
      <FlatList data={pcItems} 
                renderItem={({item}) => <PartList item={item} deletePart={deletePart}/>}
                />
          <AddPart addPart={addPart}/>
      
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
