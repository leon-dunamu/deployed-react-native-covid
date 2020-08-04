import React from 'react';
import { StyleSheet,View, Text } from 'react-native';

// interface StatusConditionProps {
//     condition : string
// }

export default function StatusCondition(props){
    
    return (
        <>
            {/* it shows sentence about condition of your region */}
            <View style={styles.constainer}>
                <Text style={styles.conditionTxt}>{props.condition}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    constainer : {
        flex : 2,
        margin : 0,
        marginTop : 0,
        padding : 0,
    },
    conditionTxt : {
        flex : 1,
        fontSize : 40,
        textAlign : "center",
        textAlignVertical : "bottom",
        color : "white",
        fontWeight : 'bold',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 12
    },
})