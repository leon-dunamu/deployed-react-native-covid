import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function StatusFace(props){
  return (
      <>
          {/* it shows face about condition of your region */}
          <View style={styles.face}>
            {/* <Text style={styles.faceText}>{face}</Text> */}
            <Text style={styles.faceText}>
                {
                  props.face === 'emoticon-devil-outline' ?
                  <MaterialCommunityIcons name={props.face} style={styles.faceText} color="white" />
                  : <Entypo name={props.face} style={styles.faceText} color="white" />
                }
            </Text>
          </View>
      </>
  );
}

const styles = StyleSheet.create({
  face : {
    flex : 10,
    margin : 0,
    padding : 0,
    textAlign : "center",
    marginBottom :0,
  },
  faceText : {
    flex : 1,
    fontSize : 200,
    textAlign : "center",
    textAlignVertical : "center",
    color : "white",
    textShadowColor: '#444',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12
  },
})