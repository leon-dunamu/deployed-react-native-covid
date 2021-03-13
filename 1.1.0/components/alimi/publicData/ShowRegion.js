import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from './ShowRegion.styled';

const ShowRegion = (props) => {
  let numPatient = props.lccnt;
  let conditionBgColor = ['#1289A7','#5f27cd'];
  if(1 <= numPatient && numPatient<= 4) {
    conditionBgColor = ['#f1c40f','#1289A7'];
  } else if ( 5 <= numPatient && numPatient <= 9 ){
    conditionBgColor = ['#e67e22','#f1c40f']
  } else if ( 10 <= numPatient ) {
    conditionBgColor = ['#b33939','#e67e22']
  };
  return (
    <>
      <LinearGradient 
        colors={conditionBgColor}
        style={styles.linear}
      >
        <View style={styles.rowList}>
          <Text style={styles.rowListTitle}>{props.region}</Text>
          <View style={styles.rowListDescWrapper}>
            <View style={[styles.rowListDesc,{flexDirection : "row"}]}>
              <Text style={[{flex : 1},styles.allofdesc_title]}>확진자수</Text>
              <Text style={[{flex : 1, textAlign : "right"},styles.allofdesc_desc]}>{props.defcnt}</Text>
            </View>
            <View style={[styles.rowListDesc,{flexDirection : "row"}]}>
              <Text style={[{flex : 1,color:'#b33939'},styles.allofdesc_title]}>전일대비</Text>
              <Text style={[{flex : 1,color:'#b33939', textAlign : "right"},styles.allofdesc_desc]}>+{props.reginf}</Text>
            </View>
            <View style={[styles.rowListDesc,{flexDirection : "row"}]}>
              <Text style={[{flex : 1,color : '#474787'},styles.allofdesc_title]}>해외유입</Text>
              <Text style={[{flex : 1,color : '#474787', textAlign : "right"},styles.allofdesc_desc]}>+{props.ofcnt}</Text>
            </View>
            <View style={[styles.rowListDesc,{flexDirection : "row"}]}>
              <Text style={[{flex : 1,color : '#cc8e35'},styles.allofdesc_title]}>지역발생</Text>
              <Text style={[{flex : 1,color : '#cc8e35', textAlign : "right"},styles.allofdesc_desc]}>+{props.lccnt}</Text>
            </View>
            <View style={[styles.rowListDesc,{flexDirection : "row"}]}>
              <Text style={[{flex : 1,color:'#227093'},styles.allofdesc_title]}>격리중</Text>
              <Text style={[{flex : 1,color:'#227093', textAlign : "right"},styles.allofdesc_desc]}>{props.isoing}</Text>
            </View>
            {/* <View style={[styles.rowListDesc,{flexDirection : "row"}]}>
              <Text style={[{flex : 1,color : '#009432'},styles.allofdesc_title]}>격리해제</Text>
              <Text style={[{flex : 1,color : '#009432', textAlign : "right"},styles.allofdesc_desc]}>{props.isoclr}</Text>
            </View> */}
          </View>
        </View>
      </LinearGradient>
    </>
  )
}

export default ShowRegion;

