// import { StatusBar } from 'expo-status-bar';
import React,{ useState, useEffect } from 'react';
import { StyleSheet, Button, View, Alert, ScrollView,StatusBar } from 'react-native';
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import Index from './components/alimi/Index';
import BottomNav from './components/alimi/BottomNav';
import Tips from './components/Tips/Tips';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import About from './components/alimi/othermenu/OtherAbout';
import m1 from './components/alimi/OtherMenu';
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


