import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    constainer : {
        backgroundColor : '#dcdde1',
        height : 60,
        flexDirection : "row",
        shadowColor: "#000",  
    },
    menus : {
        flex : 1,
    },  
    txt : {
        flex : 1,
        fontSize : 10,
        marginBottom : 5,
        textAlign : "center",
    },
    btnReload : {
        flex : 3,
        color : '#2f3640',
        fontSize : 30,
        textAlign : "center",
        textAlignVertical : "bottom",
    },
    tips : {
      flex : 3,
      fontSize : 28,
      color : "#2f3640",
      textAlign : "center",
      textAlignVertical : "bottom",
    },
    hamburger : {
        flex : 3,
        fontSize : 30,
        color : "#2f3640",
        textAlign : "center",
        textAlignVertical : "bottom",
    }
})