import React from 'react';
import { View } from 'react-native';

import {
    AdMobBanner,
  } from 'expo-ads-admob';

export default function TopNav() {
    return (
        <>
            {/* it shows top navigation bar */}
            <View>
                <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-8028844409135703/1703465968" // Test ID, Replace with your-admob-unit-id
                    servePersonalizedAds // true or false
                />
            </View>
        </>
    )
}
