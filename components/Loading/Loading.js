import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function Loading () {
    return (
        <>
            <View style={styles.container}>
                <ActivityIndicator size="large"/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "#dfe6e9"
    }
})