import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// component that makes up the list for the FlatList component in app.js
const PartList = ({item, deletePart}) => {

    return (
        <>
        <TouchableOpacity style={styles.pcItem}>
            <View style={styles.pcItemView}>
                <Text style={styles.pcItemText}>{item.text}</Text>
                <Icon name="remove" 
                      size={20} 
                      color="red" 
                      onPress={() => deletePart(item.id)}
                      />
            </View>
        </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    pcItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eeeeee',
    },
    pcItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pcItemText: {
        fontSize: 19,
    },
})

export default PartList