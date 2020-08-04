// import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView,StatusBar } from 'react-native';
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import Index from './components/alimi/Index';
import BottomNav from './components/alimi/BottomNav';
import Map from './components/map/Map';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
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
              title : '지도'
            }}
            name="Map"
            component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
