import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

// interface StatusSentenceProps {
//     CountInCircle : number
// }

export default function StatusSentence(props) {
    
    return (
        <>
            {/* it shows the patients number around you */}
            <View style={styles.countSentence}>
                <Text style={styles.countSentenceTxt}>주변 코로나 확진자 수 : {props.CountInCircle}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    countSentence : {
        flex : 2,
        textAlign : "center",
        textAlignVertical : "center",
    },
      countSentenceTxt : {
        flex : 1,
        textAlign : "center",
        textAlignVertical : "top",
        marginTop : 10,
        fontSize : 24,
        color : "white",
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 12
    }
})

