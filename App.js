// import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as Location from "expo-location";
import Index from './components/alimi/Index';
import Tips from './components/Tips/Tips';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import About from './components/alimi/othermenu/OtherAbout';
import m1 from './components/alimi/othermenu/OtherMenu';
const Stack = createStackNavigator();




export default function App() {
  const [isLoading, setisLoading] = useState(true);
  const [lat, setLat] = useState('0');
  const [lng, setLng] = useState('0');

  const getLoc = async() => {
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
      setLat(latitude);
      setLng(longitude);
      console.log(latitude,longitude);
    } catch (err) {
      Alert.alert("이런! 위치 정보를 얻어오지 못 하였습니다", error);
      console.log('err,', error);
    }
  }

  useEffect(()=>{
    // getLoc();
  })
  return (
    <>
      {/* <Index /> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options = {{
              headerShown : false
            }}
            name="Jisu"
            component={Index} />
          <Stack.Screen 
            options = {{
              title : 'Tips'
            }}
            name="Map"
            component={Tips} />
          <Stack.Screen 
          options = {{
            title : '다른 메뉴',
          }}
          name="m1"
          component={m1} />
          <Stack.Screen 
          options = {{
            title : 'ABOUT',
          }}
          name="about"
          component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


