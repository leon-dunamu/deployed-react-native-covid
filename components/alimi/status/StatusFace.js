import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './Status.styled';


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
