/**
 * @author wonseog
 * @description 백신 동향
 */

import React from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import { mapStateToPropsFromStore } from "../../store/actions";
import VaccineHeader from "../../components/vaccine.header";
import { Title, TitleContainer, VaccineContainer } from "./Vaccine.styled";
import { PublicVaccineItem } from "../../components/public.item";

const Vaccine = ({ state: { VaccineReducer: stateVaccine } }) => {
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

export default connect(mapStateToPropsFromStore, null)(Vaccine);
