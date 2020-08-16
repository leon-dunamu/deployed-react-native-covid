import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default function BottomNav({navigation}) {
    const _OnPressGetPos = () => {
        Linking.openURL('https://1seok2.github.io/Hack-GreenSky/#');
    }
    
    return (
        <>
            {/* it shows bottom navigation bar */}
            <View style={styles.constainer}>
                <View style={styles.menus}>
                    <AntDesign onPress={()=>navigation.navigate('Tips')} style={styles.tips} name="questioncircle"/>
                    <Text style={styles.txt}>Tips</Text>
                </View>
                <View style={styles.menus}>
                    {/* <MaterialCommunityIcons onPress={_OnPressGetPos}  name="web" style={styles.btnReload}/> */}
                    <Foundation name="map" onPress={()=>navigation.navigate('Maps')} style={styles.btnReload}  />
                    {/* <MaterialCommunityIcons onPress={()=>navigation.navigate('Maps')}  name="web" style={styles.btnReload}/> */}
                    <Text style={styles.txt}>Map</Text>
                </View>
                <View style={styles.menus}>
                    <Feather onPress={()=>navigation.navigate('Other')} style={styles.hamburger} name="menu" />
                    <Text style={styles.txt}>Other</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    constainer : {
        backgroundColor : '#dcdde1',
        height : 60,
        flexDirection : "row",
        shadowColor: "#000",
        elevation : -6
    },
    menus : {
        flex : 1,
    },  
    txt : {
        flex : 1,
        fontSize : 10,
        marginBottom : 5,
        textAlign : "center",
    },
    btnReload : {
        flex : 3,
        color : '#2f3640',
        fontSize : 30,
        textAlign : "center",
        textAlignVertical : "bottom",
    },
    tips : {
      flex : 3,
      fontSize : 28,
      color : "#2f3640",
      textAlign : "center",
      textAlignVertical : "bottom",
    },
    hamburger : {
        flex : 3,
        fontSize : 30,
        color : "#2f3640",
        textAlign : "center",
        textAlignVertical : "bottom",
    }
})