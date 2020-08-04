import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BottomNav() {
    const _OnPressGetPos = () => {
        Linking.openURL('https://1seok2.github.io/Hack-GreenSky/#');
    }
    
    return (
        <>
            {/* it shows bottom navigation bar */}
            <View style={styles.constainer}>
                <Text onPress={_OnPressGetPos}  style={styles.btnReload}>
                    <MaterialCommunityIcons name="web" size={40} color="white" />
                </Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    constainer : {
        flex : 2,
        flexDirection : "row",
        margin : 0,
        padding : 0,
        marginLeft : 20,
        marginRight : 25,
        marginBottom : 20,
        shadowColor: "#000",
    },
    btnReload : {
        flex : 1,
        margin : 0,
        padding : 0,
        textAlign : "left",
        textAlignVertical : "center",
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 12
    },
    btnToMap : {
        flex : 1,
      margin : 0,
      padding : 0,
      textAlign : "right",
      textAlignVertical : "center",
      textShadowColor: '#000',
      textShadowOffset: { width: 0, height: 0 },
      textShadowRadius: 12
    },
})