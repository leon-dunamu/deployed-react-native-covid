import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShowRegion = (props) => {
    return (
      <>
        <View style={styles.rowList}>
          <Text style={styles.rowListTitle}>{props.region}</Text>
          <Text style={styles.rowListDesc}>{props.reginf}</Text>
        </View>
      </>
    )
}

export default ShowRegion;

const styles = StyleSheet.create({
    rowListTitle : {
      flex : 2,
      fontSize : 20,
      textAlign : "center",
      textAlignVertical :"center",
      color : 'white',
      marginTop : 20,
      textShadowColor: '#000',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 12
    },
    rowListDesc : {
      textAlign : "center",
      color : 'white',
      fontSize : 25,
      marginTop : 5,
      marginBottom : 30,
      fontWeight : "bold",
      textShadowColor: '#000',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 12
    },
    rowList : {
      marginLeft : 10,
      width : 50,
    },
})