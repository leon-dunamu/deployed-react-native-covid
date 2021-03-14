/**
 * @description 코로나 지수
 */

import React from "react";
import { connect } from "react-redux";
import { mapStateToPropsFromStore } from "../store/actions";
import getCoordinate from "../components/get.coordinate";
import getAddress from "../components/get.address";
import accumulateJisu from "./accumulate.jisu";
import accumulateCondition from "./accumulate.condition";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as s from "./corona.styled";
import { color } from "../assets/style/color";

const CoronaBanner = ({ state: { KoreaReducer, MapReducer } }) => {
  const [state, setState] = React.useState({
    latitude: 37.56667,
    longitude: 126.97806,
    address: "",
    patientCount: 0,
    region: "",

    // info obj
    conditionTxt: "",
    conditionFace: "",
    conditionBgColor: 6,
    isLoading: true,
  });

  const getInfo = async () => {
    if (!state.isLoading) {
      setState({
        ...state,
        isLoading: true,
      });
    }
    const coords = await getCoordinate();
    const patientCount = accumulateJisu(coords, MapReducer);
    const infoObj = accumulateCondition(patientCount);
    const [city, street, country, region] = await getAddress(coords);

    setTimeout(() => {
      setState({
        ...state,
        coords,
        address: `${city} ${street}`,
        patientCount,
        isLoading: country === "KR" ? false : true,
        region,
        ...infoObj,
      });
    }, 300);
  };

  React.useEffect(() => {
    getInfo();
  }, []);

  const regionData = KoreaReducer.find((item) => item.gubun === state.region);

  return (
    <s.BannerContainer>
      <s.Banner
        styles={{
          backgroundColor: color.theme[state.conditionBgColor],
        }}
      >
        <s.ConditionWrapper>
          <s.cFace loading={state.isLoading}>
            {state.isLoading ? null : (
              <Ionicons name={state.conditionFace} size={80}></Ionicons>
            )}
          </s.cFace>
          <s.cTextContainer loading={state.isLoading}>
            {state.isLoading ? null : <s.cText>{state.conditionTxt}</s.cText>}
          </s.cTextContainer>
        </s.ConditionWrapper>
        <s.InfoWrapper>
          <s.Info loading={state.isLoading}>
            {state.isLoading ? null : (
              <>
                <s.iAddress styles={{ fontSize: "20px" }}>
                  {state.address}
                </s.iAddress>
                <s.RefreshButton onPress={() => getInfo()}>
                  <Ionicons
                    name="refresh-outline"
                    style={{ marginLeft: 2 }}
                    size={24}
                  />
                </s.RefreshButton>
              </>
            )}
          </s.Info>
          <s.Info loading={state.isLoading}>
            {state.isLoading ? null : (
              <>
                <s.iCount>최근 주변 확진자 수 : </s.iCount>
                <s.iCount styles={{ fontSize: "17px", fontWeight: "bold" }}>
                  {state.patientCount} 명
                </s.iCount>
              </>
            )}
          </s.Info>
          <s.Info loading={state.isLoading}>
            {state.isLoading ? null : (
              <>
                <s.iCount styles={{ fontWeight: "bold" }}>
                  {regionData.gubun}
                </s.iCount>
                <s.iCount> | 누적</s.iCount>
                <s.iCount
                  styles={{
                    fontWeight: "bold",
                    marginLeft: "12px",
                    fontSize: "18px",
                  }}
                >
                  {regionData.defCnt}명
                </s.iCount>
              </>
            )}
          </s.Info>
          <s.Info loading={state.isLoading}>
            {state.isLoading ? null : (
              <>
                <Ionicons name="caret-up" color={color.red} />
                <s.iCount styles={{ color: color.red, marginRight: "8px" }}>
                  {regionData.incDec}
                </s.iCount>
                <s.iCount>
                  (지역 : {regionData.localOccCnt}명 / 해외 :{" "}
                  {regionData.overFlowCnt}명)
                </s.iCount>
              </>
            )}
          </s.Info>
        </s.InfoWrapper>
      </s.Banner>
    </s.BannerContainer>
  );
};

export default connect(mapStateToPropsFromStore, null)(CoronaBanner);
