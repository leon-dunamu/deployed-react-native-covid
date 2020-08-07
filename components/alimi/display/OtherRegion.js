import React, { useEffect, useState } from 'react';
import { StyleSheet ,View, ScrollView } from 'react-native';
import getOtherRegion from '../publicData/GetOtherRegion';
import ShowRegion from '../publicData/ShowRegion';
import OtherTitle from '../otherRegion/otherTitle';

const getTime = () => {
    let today = new Date();   
    let year = today.getFullYear()-2000; // 년도
    let month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;  // 월
    let date = today.getDate() < 10 ? '0' + today.getDate() : `${today.getDate()}`; // 날짜
    let hour = today.getHours();
    if(hour < 11) {
        date = parseInt(date)-1;
        if(date < 10) {
            date = '0'+date;
        }
    }
    return `  ${year}.${month}.${date} 11:00 업데이트`;
}

export default function OtherRegion() {
    // const [region, setRegion] = useState([]);
    // const [regInf, setRegInf] = useState([]);
    const [regWithInf, setregWithInf] = useState([]);
    const [count , setCount] = useState(0);
    const curtime = getTime();

    useEffect(()=> {
        getOtherRegion().then(data => {
            let reversed = data.reverse();
            setregWithInf(reversed);
        });
        // console.log('it is',regWithInf);
    },[]);
    return (
        <>
            <View style={styles.ohterWrapper}>
                <OtherTitle curtime={curtime} />
                <ScrollView horizontal={true}>
                    <View style={styles.other}>
                        {/*  */}
                        {regWithInf.map((value) => {
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
                        })}
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    ohterWrapper : {
        flex : 3.1,
        marginTop : 30,
        marginLeft : 5,
        marginRight : 5,
    },
  other : {
    flex : 4,
    flexDirection : "row",
    marginBottom : 8,
  },
})