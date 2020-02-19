import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const AddPart = ({addPart}) => {

    // hook that will set the text value to input into the pc part list
    const [text, setText] = useState('');

    const changeText = textValue => setText(textValue);

    return (
        <>
            <View>
                <TextInput placeholder="Add Pc Part..."
                           style={styles.input}
                           onChangeText={changeText}
                />
                <TouchableOpacity style={styles.btn}
                                  onPress={() => addPart(text)}>
                    <Text style={styles.btnText}>
                        <Icon name="plus" size={20}/>
                        Add Part
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#1f1f1f',
        padding: 9,
        margin: 5,
    
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default AddPart;