/**
 * @author wonseog
 * @description 전국현황
 */

import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  mapDispatchToPropsFromStore,
  mapStateToPropsFromStore,
} from "../../store/actions";
import { getWorldCorona } from "../../api/api-world";
import { PublicWorldItem } from "../../components/public.item";
import WorldHeader from "../../components/world.header";
import { WorldContainer } from "./World.styled";
import { FlatList } from "react-native";

const World = ({ state: { WorldReducer: stateWorld }, saveWorld }) => {
  React.useEffect(() => {
    const getWorldData = async () => {
      let wrResult = null;

      try {
        const nowDate =
          new Date().getHours() > 14
            ? moment(nowDate)
            : moment(nowDate).subtract(1, "days");
        let nowDateFormat = moment(nowDate).format("YYYYMMDD");
        wrResult = await getWorldCorona(nowDateFormat);
      } catch (e) {
        console.log("world api error", e);
      } finally {
        console.log(wrResult.data.response.body.items.item[0]);
        const itemList = wrResult.data.response.body.items.item;
        itemList && saveWorld(itemList);
      }
    };

    getWorldData();
  }, []);

  return (
    <WorldContainer>
      <WorldHeader updatedAt={stateWorld[0].createDt} />
      <FlatList
        style={{ flex: 1, width: "100%", height: "100%" }}
        keyExtractor={(item, idx) => item.nationNm + idx}
        data={stateWorld}
        renderItem={({ item, index }) => (
          <PublicWorldItem item={item} index={index} />
        )}
      />
    </WorldContainer>
  );
};

export default connect(
  mapStateToPropsFromStore,
  mapDispatchToPropsFromStore
)(World);
