import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// interface MyAddressProp{
//     myAddr : string
// }

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
    margin : 0,
    padding : 0,
    textAlign : "center",
    fontSize : 22,
    color : "white",
    fontWeight : 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12
  },
  addr : {
    flex : 2,
  },
})