import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Map(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>hihi</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
    },
    text : {
        flex : 1,
        textAlign : "center",
        textAlignVertical : "center"
    }
})