import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// interface ShowRegionProps {
//   reginf : string,
//   region : string
// }

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
    },
    rowListDesc : {
      textAlign : "center",
      color : 'white',
      fontSize : 25,
      marginTop : 5,
      marginBottom : 30,
      fontWeight : "bold"
    },
    rowList : {
      width : 80,
    },
})