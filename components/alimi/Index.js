// import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Alert, StatusBar, ScrollView, Dimensions,RefreshControl } from 'react-native';
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";

// make json to array
import DateGapAcumulator from './make/DateGapAcumulator';
import PositionDistance from './make/PositionDistance';

// loading
import Loading from '../Loading';

// top navigation
import TopNav from './display/TopNav';

// status about face, sentences, and other region in KR
import ConditionAddrCount from './display/ConditionAddrCount';
import StatusFace from './status/StatusFace';
import StatusCondition from "./status/StatusCondition";
import getCondition from './getLocation/GetCondition';
import OtherRegion from './display/OtherRegion';
import StatusRandomSentence from './status/StatusRandom';

// tips, web, other
import BottomNav from './display/BottomNav';

const { width, height } = Dimensions.get('window');

let conditions ;
const COLORS = [
  '#5f27cd',  // purple
  '#1289A7',  // blue
  '#f1c40f',  // yellow
  '#ff793f',  // orange
  '#b33939'   // red
]
const JSON_URL = 'https://ugxtzdljzj.execute-api.ap-northeast-2.amazonaws.com/2020-08-04/covid';

const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

export default function Index({navigation}) {
  const [isLoading, setisLoading] = useState(true);
  const [myAddr, setmyAddr] = useState('cannot find');
  const [CountInCircle,setCountInCircle] = useState(0);
  const [condition, setCondition] = useState('Error');
  const [face, setFace] = useState('emoji-happy');
  const [bgColor, setbgColor] = useState(['#1289A7','#5f27cd']);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getLocation();
    wait(2000).then(() => setRefreshing(false));
  }, []);
  

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getLastKnownPositionAsync(); // getCurrentPositionAsync
      setisLoading(false);
      const myLocation = {
        latitude : latitude,        // to change "latitude"
        longitude : longitude       // to change "longitude"
      }
      console.log(latitude,longitude);
      const myad = await Location.reverseGeocodeAsync(myLocation);
      // 특별시, 광역시는 city값이 null임을 확인
      if(myad[0].city === null) myad[0].city = myad[0].region;
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
          setbgColor([COLORS[conditions.conditionBgColor],COLORS[conditions.conditionBgColor-1]]);
      })
    } catch (error) {
      Alert.alert("이런! 위치 정보를 얻어오지 못 하였습니다", error);
      console.log('err,', error);
    }
  };


  useEffect(() => {
    getLocation();
  },[myAddr]);

  return (
    <>
      {
        isLoading ? 
          <Loading />
        : 
        <>
          <View style={styles.wrapper}>
            <ScrollView 
              style={{ height:height}}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
              {/* <StatusBar translucent backgroundColor="transparent" /> */}
            <StatusBar barStyle="light-content" />
            {/* it shows top navigation bar */}
            <TopNav />
            <View style={styles.statusWrapper}>
              <LinearGradient 
                colors={bgColor}
                style={[{
                  flexDirection : "row",
                  flex: 8,
                  margin : 18,
                  borderRadius: 8,
                  },
                  {
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0,
                    shadowRadius: 4.65,
                    
                    elevation: 6,
                  }
                ]}
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
            </ScrollView>
          </View>
          <BottomNav navigation={navigation}/>
        </>
      }
    </>
  );
}

const styles = StyleSheet.create({
  wrapper : {
    flex : 1,
  },
  statusWrapper : {
    height : height*0.35,
  },
  faceWrapper : {
    flex : 1.2,
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