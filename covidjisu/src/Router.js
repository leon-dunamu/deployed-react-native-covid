/**
 * @author wonseog
 * @description tab router
 */

import React from "react";
import "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { color } from "./assets/style/color";

import Home from "./views/home";
import World from "./views/world";
import Vaccine from "./views/vaccine";
import Map from "./views/map";
import News from "./views/news";
import Article from "./views/news/article";
import { connect } from "react-redux";
import {
  mapDispatchToPropsFromStore,
  mapStateToPropsFromStore,
} from "./store/actions";
import moment from "moment";
import { getWorldCorona } from "./api/api-world";
import { getKoreaVaccine, VACCINE_BASE_DATE } from "./api/api-vaccine";
import { getCoronamapData } from "./api/api-coronamap";
import { getKoreaCorona } from "./api/api-korea";
import { getNews } from "./api/api-news";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  >
    <Stack.Screen name="NEWS" component={News} />
    <Stack.Screen name="ARTICLE" component={Article} />
  </Stack.Navigator>
);

const Router = ({
  saveWorld,
  saveVaccine,
  saveKorea,
  saveCoronamap,
  saveNews,
}) => {
  React.useEffect(() => {
    const nowDate =
      new Date().getHours() > 14
        ? moment(nowDate)
        : moment(nowDate).subtract(1, "days");
    const nowDateFormat = moment(nowDate).format("YYYYMMDD");
    const pageIndex = nowDate.diff(VACCINE_BASE_DATE, "days") + 1;

    const fetchDataPriority = async () => {
      let mapResult = null;
      let krResult = null;

      try {
        mapResult = await getCoronamapData();
        krResult = await getKoreaCorona(nowDateFormat);
      } catch (e) {
        console.log("api error", e);
      } finally {
        const kritem = krResult.data.response.body.items.item;

        mapResult.status === 200 && saveCoronamap(mapResult.data.data);
        kritem && saveKorea(kritem);
      }
    };

    const fetchDataLater = async () => {
      let wrResult = null;
      let vcResult = null;
      let nwResult = null;

      try {
        vcResult = await getKoreaVaccine(pageIndex);
        wrResult = await getWorldCorona(nowDateFormat);
        nwResult = await getNews(1);
      } catch (e) {
        console.log("api error", e);
      } finally {
        const writem = wrResult.data.response.body.items.item;
        const nwitem = nwResult.data.response.body.items.item;

        writem && saveWorld(writem);
        vcResult.data.data && saveVaccine(vcResult.data.data);
        nwitem && saveNews(nwitem);
      }
    };

    fetchDataPriority();
    fetchDataLater();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1700);
  }, []);

  return (
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
              iconName = focused
                ? "navigate-circle"
                : "navigate-circle-outline";
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
};

export default connect(null, mapDispatchToPropsFromStore)(Router);
