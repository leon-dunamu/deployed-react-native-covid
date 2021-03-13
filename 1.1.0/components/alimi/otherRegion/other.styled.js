import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    title : {
        height:30,
        flexDirection : 'row',
        alignItems : 'flex-start',
        marginLeft : 4,
    },
    totalWrapper : {
        height : 70,
        flexDirection : "row",
        margin: 5,
        backgroundColor :"#4b4b4b",
        borderRadius : 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0,
        shadowRadius: 4.65,
        
        elevation: 6,
        marginBottom : 10,
        marginTop : 10
    },
    descWrapper : {
        flex : 1.3,
        margin : 3,
    },
    descTitle : {
        flex :.9,
        textAlignVertical : "center",
        textAlign : "center",
        color : 'white',
        fontWeight : "bold"
    },
    descContent : {
        flex : 1,
        textAlign : "center",
        textAlignVertical : "center",
        backgroundColor : 'white',
        borderRadius : 5,
        fontWeight : "bold",
        marginBottom : 5,
        fontSize : 17
    }
})