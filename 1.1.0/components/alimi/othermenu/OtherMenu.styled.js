import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    circleWrapper : {
        flex : 1,
        flexDirection : "row",
        textAlign : "center",
        textAlignVertical : "center",
    },
    circleMenu : {
        flex : 1,
        textAlign : "center",
        textAlignVertical : "center",
    },  
    txt : {
        width : 120,
        height : 120,
        textAlign : "center",
        textAlignVertical : "center",
        backgroundColor:'#68a0cf',
        borderRadius:60,
        borderWidth: 1,
        borderColor: '#fff',
        color : 'white',
        fontSize : 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 8,
    },
    txtLH : {
        marginTop : "66%",
        marginLeft : "20%",
    },
    txtLB : {
        marginTop : "33%",
        marginLeft : "20%",
        backgroundColor : '#05c46b',
    },
    txtRH : {
        marginTop : "66%",
        marginLeft : "17%",
        backgroundColor : '#9c88ff',
    },
    txtRB : {
        marginTop : "33%",
        marginLeft : "17%",
        backgroundColor : '#fa983a',
    },
    txtLH2 : {
        marginTop : "66%",
        marginLeft : "20%",
        backgroundColor : '#BDC581',
    },
    txtLB2 : {
        marginTop : "33%",
        marginLeft : "20%",
        backgroundColor : '#3c40c6',
    },
    txtRH2 : {
        marginTop : "66%",
        marginLeft : "17%",
        backgroundColor : '#ED4C67',
    },
    txtRB2 : {
        marginTop : "33%",
        marginLeft : "17%",
        backgroundColor : '#485460',
    }
})