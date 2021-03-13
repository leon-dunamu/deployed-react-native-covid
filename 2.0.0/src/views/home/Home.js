/**
 * @author wonseog
 * @description 전국현황
 */

import React from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import moment from "moment";
import {
  mapDispatchToPropsFromStore,
  mapStateToPropsFromStore,
} from "../../store/actions";
import { getCoronamapData } from "../../api/api-coronamap";
import { getKoreaCorona } from "../../api/api-korea";
import { PublicItem } from "../../components/public.item";

const Home = ({
  state: { KoreaReducer: stateKorea },
  saveCoronamap,
  saveKorea,
}) => {
  React.useEffect(() => {
    const getMapData = async () => {
      let mapResult = null;

      try {
        // mapResult = await getCoronamapData();
      } catch (e) {
        console.log("map api error", e);
      } finally {
        // mapResult.status === 200 && saveCoronamap(mapResult.data.data);
      }
    };

    const getKoreaData = async () => {
      let krResult = null;

      try {
        const nowDate =
          new Date().getHours() > 9
            ? moment(nowDate)
            : moment(nowDate).subtract(1, "days");
        let nowDateFormat = moment(nowDate).format("YYYYMMDD");
        krResult = await getKoreaCorona(nowDateFormat);
      } catch (e) {
        console.log("korea api error", e);
      } finally {
        const itemList = krResult.data.response.body.items.item;
        itemList && saveKorea(itemList);
      }
    };

    getMapData();
    getKoreaData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <ScrollView style={{ width: "100%", height: "100%" }}>
        {stateKorea.map((item, idx) => (
          <PublicItem item={item} key={item.gubun + idx} />
        ))}
      </ScrollView>
    </View>
  );
};

export default connect(
  mapStateToPropsFromStore,
  mapDispatchToPropsFromStore
)(Home);
