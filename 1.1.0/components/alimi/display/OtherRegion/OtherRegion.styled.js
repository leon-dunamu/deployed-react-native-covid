import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    ohterWrapper : {
        height : height*0.51,
        marginTop : 30,
        marginLeft : 10,
        marginRight : 10,
    },
    other : {
        height : height*0.16,
        flexDirection : "row",
        marginBottom : 8,
    },
})