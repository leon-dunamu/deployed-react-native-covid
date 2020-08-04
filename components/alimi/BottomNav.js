import React from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function BottomNav({navigation}) {
    const _OnPressGetPos = () => {
        Linking.openURL('https://1seok2.github.io/Hack-GreenSky/#');
    }
    
    return (
        <>
            {/* it shows bottom navigation bar */}
            <View style={styles.constainer}>
                <View style={styles.menus}>
                    <AntDesign onPress={()=>navigation.navigate('Map')} style={styles.tips} name="questioncircle"/>
                    <Text style={styles.txt}>Tips</Text>
                </View>
                <View style={styles.menus}>
                    <MaterialCommunityIcons onPress={_OnPressGetPos}  name="web" style={styles.btnReload}/>
                    <Text style={styles.txt}>Web</Text>
                </View>
                <View style={styles.menus}>
                    <Feather onPress={()=>navigation.navigate('m1')} style={styles.hamburger} name="menu" />
                    <Text style={styles.txt}>Other</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    constainer : {
        backgroundColor : '#dcdde1',
        flex : 1.4,
        flexDirection : "row",
        shadowColor: "#000",
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
      fontSize : 25,
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