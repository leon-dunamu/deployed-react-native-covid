import React from "react";
import * as s from "./public.styled";

export const PublicItem = ({ item }) => {
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
            {defCnt}
          </s.Title>
          <s.Title
            styles={{
              flex: 2,
            }}
          >
            {incDec}
          </s.Title>
        </s.ItemBody>
        <s.ItemBody
          styles={{
            marginRight: "3px",
          }}
          hazard={hazard()}
        >
          <s.Title>{localOccCnt}</s.Title>
          <s.Title>{overFlowCnt}</s.Title>
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
            {isolClearCnt}
          </s.Title>
          <s.Title
            styles={{
              flex: 3,
            }}
          >
            {isolIngCnt}
          </s.Title>
        </s.ItemBody>
      </s.ItemContainer>
    </>
  );
};
