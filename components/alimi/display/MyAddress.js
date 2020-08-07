import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MyAddress(props){
    return (
        <>
            {/* it shows address where you are in */}
            <View style={styles.addr}>
                <Text style={styles.text}>{props.myAddr}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
  text : {
    flex : 1,
    textAlignVertical : "center",
    margin : 0,
    padding : 0,
    textAlign : "center",
    fontSize : 28,
    color : "white",
    fontWeight : 'bold',
  },
  addr : {
    flex : 8,
  },
})