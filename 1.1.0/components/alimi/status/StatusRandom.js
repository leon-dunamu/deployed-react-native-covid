import React from 'react';
import { Text, View } from 'react-native';
import styles from './Status.styled';
import { GoodSentences, SosoSentences, BadSentences, TerrSentences } from './StatusRandom.Desc';


export default function StatusRandomSentence(props) {
    const chooseSentence = () => {
        let RandomNum = Math.floor(Math.random() * GoodSentences.length);
        if(props.condition == '좋음') return GoodSentences[RandomNum];
        else if(props.condition == '조금 위험') return SosoSentences[RandomNum];
        else if(props.condition == '위험') return BadSentences[RandomNum];
        else if(props.condition == '매우 위험') return TerrSentences[RandomNum];
        else return "Error";
    }

    return (
        <>
            {/* it shows the patients number around you */}
            <View style={styles.countSentence}>
                <Text style={styles.countSentenceTxt}>{chooseSentence()}</Text>
            </View>
        </>
    );
}