import React from "react";
import { splitNumber } from "../components/split.number";
import Ionicons from "react-native-vector-icons/Ionicons";
import { color } from "../assets/style/color";
import * as s from "./public.styled";
import moment from "moment";

export const PublicKoreaItem = ({ item }) => {
  const {
    gubun, // 지역
    defCnt, // 확진자수
    incDec, // 전일대비
    localOccCnt, // 지역발생
    overFlowCnt, // 해외유입
    isolIngCnt, // 격리중
    isolClearCnt, // 격리해제
  } = item;

  const hazard = () => {
    if (parseInt(incDec) > 80) return 5;
    else if (parseInt(incDec) > 40) return 4;
    else if (parseInt(incDec) > 10) return 3;
    else if (parseInt(incDec) > 5) return 2;
    else if (parseInt(incDec) >= 0 && gubun) return 1;
    else return 6;
  };

  return (
    <>
      <s.ItemContainer>
        <s.ItemTitle
          styles={{
            marginRight: "3px",
          }}
          hazard={hazard()}
        >
          <s.Title>{gubun}</s.Title>
        </s.ItemTitle>
        <s.ItemBody
          styles={{
            marginRight: "3px",
            flex: 7,
          }}
          hazard={hazard()}
        >
          <s.Title
            styles={{
              flex: 3,
            }}
          >
            {splitNumber(defCnt)}
          </s.Title>
          <s.UpView styles={{ flex: 2 }}>
            {incDec ? <Ionicons name="caret-up" color={color.red} /> : null}
            <s.Title styles={incDec ? upstyles : nonestyles}>
              {splitNumber(incDec)}
            </s.Title>
          </s.UpView>
        </s.ItemBody>
        <s.ItemBody
          styles={{
            marginRight: "3px",
          }}
          hazard={hazard()}
        >
          <s.Title>{splitNumber(localOccCnt)}</s.Title>
          <s.Title>{splitNumber(overFlowCnt)}</s.Title>
        </s.ItemBody>
        <s.ItemBody
          styles={{
            flex: 7,
          }}
          hazard={hazard()}
        >
          <s.Title
            styles={{
              flex: 4,
            }}
          >
            {splitNumber(isolClearCnt)}
          </s.Title>
          <s.UpView styles={{ flex: 4 }}>
            {isolIngCnt ? (
              <Ionicons name="caret-up" color={color.dark_blue} />
            ) : null}
            <s.Title
              styles={
                isolIngCnt
                  ? { ...upstyles, color: color.dark_blue }
                  : { ...nonestyles }
              }
            >
              {splitNumber(isolIngCnt)}
            </s.Title>
          </s.UpView>
        </s.ItemBody>
      </s.ItemContainer>
    </>
  );
};

const upstyles = { textAlign: "left", marginLeft: "1.5px", color: color.red };
const nonestyles = { textAlign: "left", marginLeft: "8px", color: color.black };

export const PublicWorldItem = ({ item, index }) => {
  let backgroundColor = "";
  if (item.nationNm) {
    if (index < 3) {
      backgroundColor = color.theme[5];
    } else if (index < 10) {
      backgroundColor = color.theme[4];
    } else if (index < 20) {
      backgroundColor = color.theme[3];
    } else if (index < 50) {
      backgroundColor = color.theme[2];
    } else if (index < 100) {
      backgroundColor = color.theme[1];
    } else {
      backgroundColor = color.theme[6];
    }
  } else {
    backgroundColor = color.theme[6];
  }

  return (
    <>
      <s.ItemContainer>
        <s.ItemTitle
          styles={{
            marginRight: "3px",
            flex: 6,
            backgroundColor: backgroundColor,
          }}
        >
          <s.Title>{item.nationNm}</s.Title>
        </s.ItemTitle>
        <s.ItemBody
          styles={{
            marginRight: "3px",
            flex: 7,
            backgroundColor: backgroundColor,
          }}
        >
          <s.Title>
            {item.natDefCnt ? `${splitNumber(item.natDefCnt)}명` : ""}
          </s.Title>
        </s.ItemBody>
        <s.ItemBody
          styles={{
            flex: 5,
            backgroundColor: backgroundColor,
          }}
        >
          <s.Title>
            {item.natDeathCnt ? `${splitNumber(item.natDeathCnt)}명` : ""}
          </s.Title>
        </s.ItemBody>
      </s.ItemContainer>
    </>
  );
};

export const PublicVaccineItem = ({ item }) => (
  <s.ItemContainer>
    <s.ItemTitle
      styles={{
        marginRight: "3px",
        flex: 5,
        backgroundColor: color.theme[3],
      }}
    >
      <s.Title>{item.sido}</s.Title>
    </s.ItemTitle>
    <s.ItemBody
      styles={{
        marginRight: "3px",
        flex: 6,
        backgroundColor: color.theme[6],
      }}
    >
      <s.Title>
        {item.firstCnt >= 0 ? `${splitNumber(item.firstCnt)}명 /` : ""}
        {item.secondCnt >= 0 ? ` ${splitNumber(item.secondCnt)}명` : ""}
      </s.Title>
    </s.ItemBody>
    <s.ItemBody
      styles={{
        flex: 7,
        backgroundColor: color.theme[6],
      }}
    >
      <s.Title>
        {item.totalFirstCnt >= 0
          ? `${splitNumber(item.totalFirstCnt)}명 /`
          : ""}
        {item.totalSecondCnt >= 0
          ? ` ${splitNumber(item.totalSecondCnt)}명`
          : ""}
      </s.Title>
    </s.ItemBody>
  </s.ItemContainer>
);

export const PublicNewsItem = ({ item, navigation }) => {
  const onPressArticle = () => {
    navigation.push("ARTICLE", { item });
  };

  return (
    <s.ItemContainer>
      <s.TouchItemTitle
        onPress={onPressArticle}
        styles={{
          marginRight: "3px",
          flex: 2,
          backgroundColor: color.theme[3],
        }}
      >
        <s.Title>
          {item.wrtDt ? moment(item.wrtDt).format("YYMMDD") : ""}
        </s.Title>
      </s.TouchItemTitle>
      <s.TouchItemBody
        onPress={onPressArticle}
        styles={{
          marginRight: "3px",
          flex: 8,
          backgroundColor: color.theme[6],
        }}
      >
        <s.Title styles={{ textAlign: "left", paddingLeft: "8px" }}>
          {item.title ? `${item.title.substr(0, 18)} ..` : ""}
        </s.Title>
      </s.TouchItemBody>
      <s.TouchItemBody
        onPress={onPressArticle}
        styles={{
          flex: 3,
          backgroundColor: color.theme[6],
        }}
      >
        <s.Title>{item.countryName ? item.countryName : ""}</s.Title>
      </s.TouchItemBody>
    </s.ItemContainer>
  );
};
