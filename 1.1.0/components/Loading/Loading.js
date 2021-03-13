import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './Loading.styled';

export default function Loading () {
    return (
        <>
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
            </View>
        </>
    );
}

