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
      fontSize : 20,
      textAlign : "center",
      color : 'white',
      marginTop : 20,
      textShadowColor: '#000',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 7
    },
    rowListDesc : {
      textAlign : "center",
      color : 'white',
      fontSize : 25,
      marginTop : 5,
      marginBottom : 0,
      fontWeight : "bold",
      textShadowColor: '#000',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 7
    },
    rowList : {
      flex : 4,
      marginLeft : 10,
      width : 50,
    },
})