import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function TopNav() {
    return (
        <>
            {/* it shows top navigation bar */}
            <View style={styles.constainer}>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    constainer : {
      flex : 1,
      flexDirection : "row",
      margin : 0,
      padding : 10,
      paddingBottom : 0,
    },
})