// import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, View, Alert, StatusBar } from 'react-native';
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";

// make json to array
import DateGapAcumulator from './make/DateGapAcumulator';
import PositionDistance from './make/PositionDistance';

// loading
import Loading from '../Loading/Loading';

// top navigation
import TopNav from './display/TopNav';

// showing address
import MyAddress from './display/MyAddress';

// status about face, sentences, and other region in KR
import ConditionAddrCount from './display/ConditionAddrCount';
import StatusFace from './status/StatusFace';
import StatueSentence from './status/StatusSentence';
import StatusCondition from "./status/StatusCondition";
import getCondition from './getLocation/GetCondition';
import OtherRegion from './display/OtherRegion';
import StatusRandomSentence from './status/StatusRandom';

// tips, web, other
import BottomNav from './display/BottomNav';



let conditions ;
const JSON_URL = 'https://ugxtzdljzj.execute-api.ap-northeast-2.amazonaws.com/2020-08-04/covid';

export default function Index({navigation}) {
  const [isLoading, setisLoading] = useState(true);
  const [myAddr, setmyAddr] = useState('cannot find');
  const [CountInCircle,setCountInCircle] = useState(0);
  const [condition, setCondition] = useState('Error');
  const [face, setFace] = useState('emoji-happy');
  const [bgColor, setbgColor] = useState(['#1289A7','#1289A7']);
  

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
            if(distance < 3600){
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
      Alert.alert("이런! 위치 정보를 얻어오지 못 하였습니다", error);
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
        : <View style={styles.wrapper}>
            {/* <StatusBar translucent backgroundColor="transparent" /> */}
            <StatusBar barStyle="light-content" />
            {/* it shows top navigation bar */}
            <TopNav />
            <View style={styles.statusWrapper}>
              <LinearGradient 
                colors={bgColor}
                style={{
                  flexDirection : "row",
                  flex: 10,
                  margin : 18,
                  borderRadius: 8,
                }}
              >
                <View style={styles.faceWrapper}>
                  <StatusFace face={face}/>
                  {/* it shows sentence about condition of your region */}
                  <StatusCondition getLocation={getLocation} condition={condition} />
                </View>
                <ConditionAddrCount myAddr={myAddr} CountInCircle={CountInCircle} />
              </LinearGradient>
              <StatusRandomSentence condition={condition}/>
            </View>
            <OtherRegion />
            {/* it shows bottom navigation bar */}
            <BottomNav navigation={navigation}/>
          </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  wrapper : {
    flex : 1,
  },
  statusWrapper : {
    flex : 2.6,
  },
  faceWrapper : {
    flex : 1,
  },
  txtWrapper : {
    flex : 2,
  },
  conditionTxt : {
    marginTop : 10,
    textAlign : "center",
    textAlignVertical : "top",
    fontSize : 20,
    color : 'white',
  },
  Sconstainer : {
    flex : 2.3,
    marginTop : 10
  },
})