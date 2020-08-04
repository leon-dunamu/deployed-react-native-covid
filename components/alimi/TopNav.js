import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function TopNav({navigation}) {
    return (
        <>
            {/* it shows top navigation bar */}
            <View style={styles.constainer}>
                <Text style={styles.text} onPress={()=>navigation.navigate('Map')}>
                    <AntDesign style={styles.text} name="questioncircle"/>
                </Text>
                {/* <Feather style={styles.text} name="menu" /> */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    constainer : {
      flex : 2,
      margin : 0,
      padding : 10,
      paddingBottom : 0,
    },
    text : {
      flex : 1,
      fontSize : 30,
      color : "white",
      width : 90,
      paddingLeft : 10,
      paddingTop : 10,
      textShadowColor: '#000',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 12
    },
})