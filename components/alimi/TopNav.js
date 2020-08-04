import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function TopNav() {
    return (
        <>
            {/* it shows top navigation bar */}
            <View style={styles.constainer}>
                {/* <Feather style={styles.text} name="menu" /> */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    constainer : {
      flex : 2,
      margin : 0,
      padding : 0,
    },
    text : {
      flex : 1,
      margin : 0,
      padding : 0,
      textAlign : "right",
      marginRight : 20,
      marginTop : 20,
      fontSize : 40,
      color : "white",
      textShadowColor: '#000',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 12
    },
})