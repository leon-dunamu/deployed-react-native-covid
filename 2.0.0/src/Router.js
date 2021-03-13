/**
 * @author wonseog
 * @description tab router
 */

import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./views/home";
import Map from "./views/map";
import Other from "./views/other";

const Tab = createBottomTabNavigator();

const Router = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Other" component={Other} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Router;
