/**
 * @author wonseog
 * @description 전국현황
 */

import React from "react";
import { connect } from "react-redux";
import { mapStateToPropsFromStore } from "../../store/actions";
import { PublicKoreaItem } from "../../components/public.item";
import KoreaHeader from "../../components/korea.header";
import { HomeContainer, PublicScroll } from "./Home.styled";
import CoronaBanner from "../../components/corona.banner";
import { StatusBar } from "react-native";

const Home = ({ state: { KoreaReducer: stateKorea } }) => {
  return (
    <HomeContainer>
      <StatusBar />
      <CoronaBanner />
      <KoreaHeader updatedAt={stateKorea[0].createDt} />
      <PublicScroll>
        {stateKorea.map((item, idx) => (
          <PublicKoreaItem item={item} key={item.gubun + idx} />
        ))}
      </PublicScroll>
    </HomeContainer>
  );
};

export default connect(mapStateToPropsFromStore, null)(Home);
