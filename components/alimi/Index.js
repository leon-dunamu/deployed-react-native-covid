// import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView,StatusBar } from 'react-native';
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";

// make json to array
import DateGapAcumulator from './make/DateGapAcumulator';
import PositionDistance from './make/PositionDistance';

// loading
import Loading from '../Loading/Loading';

// top navigation
import TopNav from './TopNav';

// showing address
import MyAddress from './MyAddress';

// status about face, sentences, and other region in KR
import Status from './Status';
import getCondition from './getLocation/GetCondition';
import OtherRegion from './OtherRegion';

// tips, web, other
import BottomNav from './BottomNav';



let conditions ;
const JSON_URL = 'https://ugxtzdljzj.execute-api.ap-northeast-2.amazonaws.com/2020-08-04/covid';

export default function Index({navigation}) {
  const [isLoading, setisLoading] = useState(true);
  const [myAddr, setmyAddr] = useState('0');
  const [CountInCircle,setCountInCircle] = useState(0);
  const [condition, setCondition] = useState('cannot finds you');
  const [face, setFace] = useState('emoji-happy');
  const [bgColor, setbgColor] = useState(['0','0']);
  

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      setisLoading(false);
      const myLocation = {
        latitude : latitude,        // to change "latitude"
        longitude : longitude       // to change "longitude"
      }
      console.log(latitude,longitude);
      const myad = await Location.reverseGeocodeAsync(myLocation);
      setmyAddr(`${myad[0].city}  ${myad[0].street}`);


      fetch(JSON_URL)
      .then(response => {return response.json()})
      .then(resp => {
        let cnt = 0;
        resp.map((value) => {
          let daysGap ;
          // daysGap = isInFewDays(value.month, value.day);
          const curDay = {
            _month : value.month,
            _date : value.day
          }
          daysGap = DateGapAcumulator(curDay);
          if(daysGap <= 14){
            let sliced =  value.latlng.split(', ');
            let patient = {
              position : value.address,
              lat : parseFloat(sliced[0]),
              lng : parseFloat(sliced[1]),
              month : value.month,
              day : value.day
            }
            let distance;
            const getDistance  = {
              lat : latitude,
              lng : longitude,
              _lat : patient.lat,
              _lng : patient.lng
            }
            distance = PositionDistance(getDistance);
            if(distance < 4800){
              cnt = cnt+1;
            }
          }
        });
        setCountInCircle(cnt);
        return cnt;
      }).then((cnt) => {
          // let [PatientInfo, count]= MakeInfectedArray(latitude, longitude);
          setCountInCircle(cnt);          // ee

          conditions = getCondition(cnt); // ee
          setFace(conditions.conditionFace);
          setCondition(conditions.conditionTxt);
          setbgColor([conditions.conditionBgColor,conditions.conditionBgColor]);
      })
    } catch (error) {
      Alert.alert("이런!", "위치 정보를 얻어오지 못 하였습니다");
      console.log('err,', error);
    }
  };

  useEffect(() => {
    getLocation();
  },[]);

  return (
    <>
      {
        isLoading ? 
          <Loading />
        : <LinearGradient 
              colors={bgColor} 
              style={[styles.wrapper]}>
            {/* <StatusBar translucent backgroundColor="transparent" /> */}
            <StatusBar barStyle="light-content" />
            {/* it shows top navigation bar */}
            <TopNav />
            {/* it shows address where you are in */}
            <MyAddress myAddr={myAddr} />
            {/* it shows face about condition of your region */}
            <Status face={face} condition={condition} CountInCircle={CountInCircle} />
            <OtherRegion />
            {/* it shows bottom navigation bar */}
             <BottomNav navigation={navigation}/>
          </LinearGradient>
      }
    </>
  );
}

const styles = StyleSheet.create({
  wrapper : {
    flex : 1,
  },
})