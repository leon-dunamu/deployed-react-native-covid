import React from 'react';
import { Text, View, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import styles from './BottomNav.styled';

export default function BottomNav({navigation}) {
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
