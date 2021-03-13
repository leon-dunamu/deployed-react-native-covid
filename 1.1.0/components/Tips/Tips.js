import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Feather, Foundation, FontAwesome } from '@expo/vector-icons';
import styles from './Tips.styled';
import desc from './Tips.Desc';

import {
    AdMobBanner,
  } from 'expo-ads-admob';


export default function Map(){
    return (
        <ScrollView>
            {/* <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-8028844409135703/1703465968" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
                // onDidFailToReceiveAdWithError={bannerError}
            /> */}
            <View style={styles.container}>

                <Text style={styles.title}>주의사항</Text>
                <View style={styles.cover}>
                    <Text style={styles.text}>
                        확진자의 집 위치가 아닌, 확진자가 다닌 동선 (카페, 음식점, 의료원 등)을 표기한 것입니다.
                    </Text>
                    <Text style={styles.text}>
                        위치파악을 다시하길 원하시는 경우 앱의 홈 화면에서 스크롤을 아래로 해주시면
                        위치를 재파악합니다.
                    </Text>
                </View>
                <Text></Text>
                <Text style={styles.title}>판별 기준</Text>
                <View style={styles.cover}>
                    <Text style={styles.text}>
                        <FontAwesome name="circle" size={24} color="#1289A7" />
                        {` 좋음 : 주변 확진자 수 0 명`}
                    </Text>
                    <Text style={styles.text}>
                        <FontAwesome name="circle" size={24} color="#f1c40f" />
                        {` 조금 위험 : 주변 확진자 수 1 ~ 2 명`}
                    </Text>
                    <Text style={styles.text}>
                        <FontAwesome name="circle" size={24} color="#e67e22" />
                        {` 위험 : 주변 확진자 수 3 ~ 5 명`}
                    </Text>
                    <Text style={styles.text}>
                        <FontAwesome name="circle" size={24} color="#b33939" />
                        {` 매우 위험 : 주변 확진자 수 6 명 이상`}
                    </Text>
                    <Text style={[styles.text,{fontSize:12, textAlign:"right"}]}>
                        * 최근 14일 이내 생활반경 내에서 발생한 확진자 수 입니다
                    </Text>
                </View>
                <Text style={styles.title}></Text>
                <Text style={styles.title}>사용법</Text>
                <View style={styles.cover}>
                    <Text style={styles.text}>
                        꼭!! 위치 정보 파악을 허용해 주시기 바랍니다.
                    </Text>
                    <Text style={styles.text}>
                        금일 발생한 확진자 수를 전국 18개의 다른 도, 시, 검역[해외입국]의 상황을 볼 수 있습니다.
                    </Text>
                    <Text style={styles.text}>
                        {/* <MaterialCommunityIcons
                            size={33} name="web"
                            onPress={()=> Linking.openURL('https://1seok2.github.io/Hack-GreenSky/#')}
                        />  */}
                        <Foundation name="map" size={33} /> 
                        {`  `}버튼으로
                        지도를 통해 확진자가 위치했던 곳을 더욱 자세히 알아볼 수 있습니다. 다른 지역의 상황을 눈으로
                        직접 보고싶으신 경우에 알리미 화면의 하단의 지도 버튼을 통해 지도를 이용하실 수
                        있습니다.
                    </Text>
                    <Text style={styles.text}>
                        <Feather name="menu"  size={33}/> 버튼으로
                    질병관리본부, 보건복지부 등 다른 포털을 이용할 수 있습니다.
                    </Text>
                </View>
                
                <Text style={styles.text}></Text>
                <Text style={styles.title}>왜 코로나19 지수 ?</Text>
                <View style={styles.cover}>
                    {
                        desc.map((v) => {
                            return <Text key={v} style={styles.text}>
                                {v}
                            </Text>
                        })
                    }
                </View>
            </View>
            {/* <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-8028844409135703/1703465968" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
                // onDidFailToReceiveAdWithError={bannerError}
            /> */}
        </ScrollView>
        
    )
}
