import React from 'react';
import { Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import {
    AdMobBanner,
  } from 'expo-ads-admob';

export default function TopNav() {
    return (
        <>
            {/* it shows top navigation bar */}
            <Text style={{textAlign : "center", marginTop : 10, color:'#666'}}>
                {/* <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-8028844409135703/1703465968" // Test ID, Replace with your-admob-unit-id
                    servePersonalizedAds // true or false
                /> */}
                <Entypo name="arrow-bold-down" size={18} color="#666" />
                 위치 재파악은 스크롤을 아래로 
                <Entypo name="arrow-bold-down" size={18} color="#666" />
            </Text>
        </>
    )
}
