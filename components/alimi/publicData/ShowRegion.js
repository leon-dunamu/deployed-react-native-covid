import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const ShowRegion = (props) => {
  let conditionBgColor = ['#1289A7','#1289A7'];
  if(1 <= props.reginf && props.reginf <= 4) {
    conditionBgColor = ['#009432','#009432'];
  } else if ( 5 <= props.reginf && props.reginf <= 9 ){
    conditionBgColor = ['#cc8e35','#cc8e35']
  } else if ( 10 <= props.reginf ) {
    conditionBgColor = ['#b33939','#b33939']
  };
  return (
    <>
      <LinearGradient 
        colors={conditionBgColor}
        style={{
          flexDirection : "row",
          flex: 10,
          margin : 10,
          marginBottom : 10,
          borderRadius: 8,
        }}
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
            <View style={[styles.rowListDesc,{flexDirection : "row"}]}>
              <Text style={[{flex : 1,color : '#009432'},styles.allofdesc_title]}>격리해제</Text>
              <Text style={[{flex : 1,color : '#009432', textAlign : "right"},styles.allofdesc_desc]}>{props.isoclr}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  )
}

export default ShowRegion;

const styles = StyleSheet.create({
  rowList : {
    flex : 1,
    width : 140,
    alignItems : 'center'
  },
  rowListTitle : {
    flex : 0.7,
    marginTop : 10,
    fontSize : 26,
    textAlign : "center",
    color : 'white',
    fontWeight: 'bold'
  },
  rowListDesc : {
    flex : 1,
    textAlign : "center",
    color : 'black',
    fontSize : 16,
    marginTop : 5,
    marginBottom : 3,
    fontWeight : "bold",
  },
  rowListDescWrapper : {
    width : 130,
    borderRadius : 5,
    flex : 3,
    backgroundColor : 'white',
    marginBottom : 5
  },
  allofdesc_title : {
    paddingLeft : 10,
    fontWeight : 'bold'
  },
  allofdesc_desc : {
    paddingRight : 10,
    fontWeight : 'bold'
  }
})