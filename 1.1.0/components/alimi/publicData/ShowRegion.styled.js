import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    rowList : {
      flex : 1,
      width : 105,
      alignItems : 'center'
    },
    rowListTitle : {
      flex : 0.9,
      fontSize : 17,
      textAlign : "center",
      color : 'white',
      fontWeight: 'bold',
      textAlignVertical : "center",
    },
    rowListDesc : {
      flex : 1,
      textAlign : "center",
      color : 'black',
      fontWeight : "bold",
    },
    rowListDescWrapper : {
      width : 95,
      borderRadius : 5,
      flex : 3,
      backgroundColor : 'white',
      marginBottom : 5
    },
    allofdesc_title : {
      paddingLeft : 5,
      fontWeight : 'bold',
      fontSize : 10,
      textAlignVertical : "center",
    },
    allofdesc_desc : {
      paddingRight : 5,
      fontWeight : 'bold',
      fontSize : 10,
      textAlignVertical : "center",
    },
    linear : {
      flexDirection : "row",
      flex: 1,
      margin : 5,
      marginBottom:0,
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0,
      shadowRadius: 4.65,
      
      elevation: 6,
    }
})