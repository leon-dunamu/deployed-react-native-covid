/**
 * @author wonseog
 * @description tab router
 */

import React from "react";
import "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { color } from "./assets/style/color";

import Home from "./views/home";
import World from "./views/world";
import Vaccine from "./views/vaccine";
import Map from "./views/map";
import News from "./views/news";
import Article from "./views/news/article";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="NEWS" component={News} />
    <Stack.Screen name="ARTICLE" component={Article} />
  </Stack.Navigator>
);

const Router = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "KOREA") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "MAP") {
            iconName = focused ? "navigate-circle" : "navigate-circle-outline";
          } else if (route.name === "WORLD") {
            iconName = focused ? "earth-sharp" : "earth-outline";
          } else if (route.name === "NEWS") {
            iconName = focused ? "newspaper" : "newspaper-outline";
          } else if (route.name === "VACCINE") {
            iconName = focused ? "eyedrop" : "eyedrop-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: color.light_purple,
        inactiveTintColor: "gray",
      }}
      initialRouteName={"KOREA"}
    >
      <Tab.Screen name="WORLD" component={World} />
      <Tab.Screen name="VACCINE" component={Vaccine} />
      <Tab.Screen name="KOREA" component={Home} />
      <Tab.Screen name="MAP" component={Map} />
      <Tab.Screen name="NEWS" component={StackNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Router;
