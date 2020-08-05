import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
    AdMobBanner,
  } from 'expo-ads-admob';

export default function TopNav() {
    return (
        <>
            {/* it shows top navigation bar */}
            <View style={styles.constainer}>
                <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                    servePersonalizedAds // true or false
                    // onDidFailToReceiveAdWithError={bannerError}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    constainer : {
      flex : 2,
      flexDirection : "row",
      margin : 0,
    },
})