import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';


const PartList = ({item}) => {
    return (
        <>
        <TouchableOpacity style={styles.pcItem}>
            <View style={styles.pcItemView}>
                <Text style={styles.pcItemText}>{item.text}</Text>
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
        fontSize: 18,
    },
})

export default PartList