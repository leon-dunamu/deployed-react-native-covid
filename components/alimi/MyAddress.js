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
    textAlignVertical : "bottom",
    margin : 0,
    marginBottom : 10,
    padding : 0,
    textAlign : "center",
    fontSize : 35,
    color : "white",
    fontWeight : 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
    fontFamily : 'BMHANNAAir_otf'
  },
  addr : {
    flex : 5,
    marginTop : 10,
  },
})