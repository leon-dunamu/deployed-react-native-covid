import React, { useEffect, useState } from 'react';
import { StyleSheet ,View, ScrollView, Dimensions } from 'react-native';
import getOtherRegion from '../publicData/GetOtherRegion';
import ShowRegion from '../publicData/ShowRegion';
import OtherTitle from '../otherRegion/otherTitle';
import OtherTotal from '../otherRegion/otherTotal';

import Loading from '../../Loading/Loading';

const { width, height } = Dimensions.get('window');
const CAPITAL = ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종'];

const getTime = () => {
    let today = new Date();   
    let year = today.getFullYear()-2000; // 년도
    let month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;  // 월
    let date = today.getDate() < 10 ? '0' + today.getDate() : `${today.getDate()}`; // 날짜
    let hour = today.getHours();
    if(hour < 13) {
        date = parseInt(date)-1;
        if(date < 10) {
            date = '0'+date;
        }
    }
    return `  ${year}.${month}.${date} 13:00 업데이트`;
}

export default function OtherRegion() {
    const [regWithInf, setregWithInf] = useState([]);
    const curtime = getTime();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        getOtherRegion().then(data => {
            let reversed = data.reverse();
            setregWithInf(reversed);
            setIsLoading(false);
        });
    },[]);
    return (
        <>
            <View style={styles.ohterWrapper}>
                <OtherTitle curtime={curtime} />
                {
                    isLoading ? <Loading />
                    : <OtherTotal regWithInf={regWithInf[0]}/>
                }
                {
                    isLoading ? <Loading />
                    : <ScrollView horizontal={true}>
                        <View style={styles.other}>
                            {/*  */}
                            {regWithInf.map((value) => {
                                if(value.region === '합계' || value.region === '검역'){
                                    return ;
                                } else if(CAPITAL.includes(value.region)){
                                    return (
                                        <ShowRegion key={`${value.regInf}+${value.isoclr}`}
                                            reginf={value.regInf}
                                            region={value.region}
                                            defcnt = {value.defcnt}
                                            isoing = {value.isoing}
                                            isoclr = {value.isoclr}
                                            ofcnt = {value.ofcnt}
                                            lccnt = {value.lccnt}
                                        />
                                    )
                                }
                            })}
                        </View>
                    </ScrollView>
                }
                {
                    isLoading ? <Loading />
                    : <ScrollView horizontal={true} >
                        <View style={styles.other}>
                            {/*  */}
                            {regWithInf.map((value) => {
                                if(value.region === '합계' || value.region === '검역'){
                                    return ;
                                } else if(!CAPITAL.includes(value.region)){
                                    return (
                                        <ShowRegion key={`${value.regInf}+${value.isoclr}`}
                                            reginf={value.regInf}
                                            region={value.region}
                                            defcnt = {value.defcnt}
                                            isoing = {value.isoing}
                                            isoclr = {value.isoclr}
                                            ofcnt = {value.ofcnt}
                                            lccnt = {value.lccnt}
                                        />
                                    )
                                }
                            })}
                        </View>
                    </ScrollView>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    ohterWrapper : {
        height : height*0.51,
        marginTop : 30,
        marginLeft : 10,
        marginRight : 10,
    },
    other : {
        height : height*0.16,
        flexDirection : "row",
        marginBottom : 8,
    },
})