import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


const Header = ({name}) => {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.text}>{name}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 100,
        padding: 50,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    text : {
        color: "#ffffff",
        fontSize: 23,
        textAlign: "center"
    },
})

export default Header;