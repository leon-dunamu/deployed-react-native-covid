import React from 'react';
import { Text, View} from 'react-native';
import styles from './Status.styled';


export default function StatusSentence(props) {
    
    return (
        <>
            {/* it shows the patients number around you */}
            <View style={styles.count}>
                <Text style={styles.countTxt}>주변 확진자 수 :  {props.CountInCircle} 명</Text>
            </View>
        </>
    );
}