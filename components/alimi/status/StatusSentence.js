import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';


export default function StatusSentence(props) {
    
    return (
        <>
            {/* it shows the patients number around you */}
            <View style={styles.countSentence}>
                <Text style={styles.countSentenceTxt}>주변 확진자 수 :  {props.CountInCircle} 명</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    countSentence : {
        flex : 1.5,
        textAlign : "center",
        textAlignVertical : "center",
        marginBottom : 30,
    },
      countSentenceTxt : {
        flex : 1,
        textAlign : "center",
        textAlignVertical : "top",
        marginTop : 10,
        fontSize : 18,
        color : "white",
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 12
    }
})

