import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import {
    AdMobBanner,
  } from 'expo-ads-admob';


export default function Map(){
    return (
        <ScrollView>
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-8028844409135703/8232936056" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
                // onDidFailToReceiveAdWithError={bannerError}
            />
            <View style={styles.container}>
                <Text style={styles.title}>사용법</Text>
                <Text style={styles.text}>
                    꼭!! 위치 정보 파악을 허용해 주시기 바랍니다.
                </Text>
                <Text style={styles.text}>
                    금일 발생한 확진자 수를 전국 18개의 다른 도, 시, 검역[해외입국]의 상황을 볼 수 있습니다.
                </Text>
                <Text style={styles.text}>
                    <MaterialCommunityIcons
                        size={33} name="web"
                        onPress={()=> Linking.openURL('https://1seok2.github.io/Hack-GreenSky/#')}
                    /> 
                    버튼으로
                    웹을 통해 지도로 더욱 자세히 알아볼 수 있습니다. 다른 지역의 상황을 눈으로
                    직접 보고싶으신 경우에 알리미 화면의 하단의 웹 버튼을 통해 웹을 이용하실 수
                    있습니다.
                </Text>
                <Text style={styles.text}>
                    <Feather name="menu"  size={33}/> 버튼으로
                질병관리본부, 보건복지부 등 다른 포털을 이용할 수 있습니다.
                </Text>
                <Text style={styles.text}></Text>
                <Text style={styles.title}>왜 코로나19 지수 ?</Text>
                <Text style={styles.text}>
                    우리가 생활하는 생활 반경 [2.4km] 이내에 발생한 확진자 수로 현재 위치한 지역의 위험도를 나타냅니다.
                    매일 확진자들의 동선이 파악되는 대로 업데이트를 진행 합니다.
                </Text>
                <Text style={styles.text}>
                    2.4km 이내에 최근 발생한 확진자가 있다면 해당 지역은 위험한 상황입니다.
                    그래서 위험도 수준을 한눈에 알아보기 쉽게 미세먼지 알리미처럼 좋음,
                    위험, 외출금지로 나누어 한눈에 파악할 수 있게 만들었습니다.
                </Text>
                <Text style={styles.text}>
                    코로나19 잠복기간의 최대인 14일 이내에 발생한 확진자가 주변에서 발생했는지 검사합니다.
                    본인의 생활반경과 확진자의 생활반경이 겹치면, 주변 확진자 수가 증가 합니다.
                    웹에서 확진자의 반경들과 위치를 확인하실 수 있습니다.
                </Text>
                <Text style={styles.text}>
                    질병관리본부 (http://www.cdc.go.kr/) 홈페이지에 공지사항으로 매일 확진자 위치를 브리핑
                    해줍니다. 그러나 일반인들은 매일 그 브리핑 글을 읽어볼 시간이 충분치 않으며 접근성 및 가시성도 
                    좋지 않습니다. 웹사이트에서 보기 쉽게 맵으로 표시해 주고 주변 코로나 확진자 수도 알려준다면 
                    사람들이 쉽게 알 수 있을 것이라 생각하였습니다.
                </Text>
                <Text style={styles.text}>
                    코로나19는 감기처럼 우리 인간들이 적응해 가며 살아가야 할 수도 있습니다.
                    확산 속도와 유전적 변이 속도가 매우 빨라 현재 백신 개발에도 힘이드는 상황입니다.
                    현 사태에 모두 개인 위생을 철저히 지키며 사회적 거리 두기를 실천 하였으면 하는 마음에
                    공공 데이터를 이용하여 한눈에 코로나19의 상황에 대해 알아 볼 수 있도록
                    웹, 앱을 제작 하였습니다
                </Text>
                <Text style={styles.text}>
                    현재 상태가 [좋음]인 경우에도 개인 위생을 꼭 지켜서 유동 인구로 인한 감염을
                    예방합시다 !
                </Text>
                <Text style={styles.text}>
                    사용에 미흡한 점이 있더라도 여러분 모두가 더욱 조심하여 현 사태를 이겨내길 바랍니다.
                </Text>
            </View>
            <AdMobBanner
                bannerSize="fullBanner"
                adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
                servePersonalizedAds // true or false
                // onDidFailToReceiveAdWithError={bannerError}
            />
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        padding : 15,
    },
    title : {
        fontSize : 30,
        fontWeight : 'bold',
        marginBottom : 5,
    },
    text : {
        flex : 1,
        padding : 5,
        fontSize : 20,
        lineHeight : 33,
        textAlign : "justify"
    }
})