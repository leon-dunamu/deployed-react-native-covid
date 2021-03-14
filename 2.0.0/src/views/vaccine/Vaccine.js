/**
 * @author wonseog
 * @description 백신 동향
 */

import React from "react";
import { View, Text, FlatList } from "react-native";
import moment from "moment";
import { getKoreaVaccine, VACCINE_BASE_DATE } from "../../api/api-vaccine";
import { connect } from "react-redux";
import {
  mapDispatchToPropsFromStore,
  mapStateToPropsFromStore,
} from "../../store/actions";
import VaccineHeader from "../../components/vaccine.header";
import { Title, TitleContainer, VaccineContainer } from "./Vaccine.styled";
import { PublicVaccineItem } from "../../components/public.item";

const Vaccine = ({ state: { VaccineReducer: stateVaccine }, saveVaccine }) => {
  React.useEffect(() => {
    const getVaccineData = async () => {
      let vcResult = null;

      try {
        const nowDate =
          new Date().getHours() > 9
            ? moment(nowDate)
            : moment(nowDate).subtract(1, "days");
        const pageIndex = nowDate.diff(VACCINE_BASE_DATE, "days") + 1;

        vcResult = await getKoreaVaccine(pageIndex);
      } catch (e) {
        console.log("vaccine api error", e);
      } finally {
        vcResult.data.data && saveVaccine(vcResult.data.data);
      }
    };

    getVaccineData();
  }, []);

  return (
    <VaccineContainer>
      <TitleContainer>
        <Title>대한민국 백신 접종 현황</Title>
      </TitleContainer>
      <VaccineHeader updatedAt={stateVaccine[0].baseDate} />
      <FlatList
        style={{ flex: 1, width: "100%", height: "100%" }}
        keyExtractor={(item, idx) => item.sido + idx}
        data={stateVaccine}
        renderItem={({ item, index }) => (
          <PublicVaccineItem item={item} index={index} />
        )}
      />
    </VaccineContainer>
  );
};

export default connect(
  mapStateToPropsFromStore,
  mapDispatchToPropsFromStore
)(Vaccine);
