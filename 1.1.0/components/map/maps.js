import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function Maps() {
    return (
        <WebView 
            source={{ uri: 'https://1seok2.github.io/Hack-GreenSky/#' }}
            style={{ marginTop: 0 }}
        /> 
    )
}