import React from 'react';
import { View, Text } from 'react-native';
import styles from './MyAddress.styled';

export default function MyAddress(props){
    return (
        <>
            {/* it shows address where you are in */}
            <View style={styles.addr}>
                <Text style={styles.text}>{props.myAddr}</Text>
            </View>
        </>
    )
}