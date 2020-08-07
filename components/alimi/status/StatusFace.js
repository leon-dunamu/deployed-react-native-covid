import React from 'react';
import { StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function StatusFace(props){
  return (
      <>
          {/* it shows face about condition of your region */}
          {
            props.face === 'emoticon-devil-outline' ?
            <MaterialCommunityIcons name={props.face} style={styles.faceText} color="white" />
            : <Entypo name={props.face} style={styles.faceText} color="white" />
          }
      </>
  );
}

const styles = StyleSheet.create({
  faceText : {
    flex : 4.4,
    fontSize : 70,
    textAlign : "center",
    textAlignVertical : "bottom"
  },
})