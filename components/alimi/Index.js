// import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView,StatusBar } from 'react-native';
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";

// make json to array
import MakeInfectedArray from './publicData/MakeInfectedArray';

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


import BottomNav from './BottomNav';


let conditions ;

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
        latitude : 37.413294,        // to change "latitude"
        longitude : 127.269311       // to change "longitude"
      }
      console.log(latitude,longitude);
      const myad = await Location.reverseGeocodeAsync(myLocation);
      setmyAddr(`${myad[0].city}  ${myad[0].street}  ${myad[0].name}`);

      let [PatientInfo, count]= MakeInfectedArray(latitude, longitude);
      setCountInCircle(count);

      conditions = getCondition(count);
      setFace(conditions.conditionFace);
      setCondition(conditions.conditionTxt);
      setbgColor([conditions.conditionBgColor,conditions.conditionBgColor]);

    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
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
            <StatusBar barStyle="light-content"/>
            {/* it shows top navigation bar */}
            <TopNav navigation={navigation}/>
            {/* it shows address where you are in */}
            <MyAddress myAddr={myAddr} />
            {/* it shows face about condition of your region */}
            <Status face={face} condition={condition} CountInCircle={CountInCircle} />
            <OtherRegion />
            {/* it shows bottom navigation bar */}
             <BottomNav />
          </LinearGradient>
      }
    </>
  );
}

const styles = StyleSheet.create({
  wrapper : {
    flex : 1,
  },
  loading : {
    flex : 1,
    textAlign : "center",
    textAlignVertical : "center",
    backgroundColor : "#1289A7"
  },constainer : {
    flex : 2,
    flexDirection : "row",
    margin : 0,
    padding : 0,
    marginLeft : 25,
    marginRight : 25,
    marginBottom : 20,
    shadowColor: "#000",
},
btnReload : {
    flex : 1,
    margin : 0,
    padding : 0,
    textAlign : "left",
    textAlignVertical : "center",
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12
},
btnToMap : {
    flex : 1,
  margin : 0,
  padding : 0,
  textAlign : "right",
  textAlignVertical : "center",
  textShadowColor: '#000',
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 12
},
})