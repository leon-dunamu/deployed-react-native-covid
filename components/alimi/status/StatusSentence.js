import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


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
      flex : 2,
      textAlign : "center",
      marginBottom : 19
    },
    countSentenceTxt : {
      flex : 1,
      textAlign : "center",
      textAlignVertical : "bottom",
      fontSize : 19,
      color : "white",
    },
})

