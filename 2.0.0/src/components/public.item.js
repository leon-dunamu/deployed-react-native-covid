import React from "react";
import styled from "styled-components/native";

const ItemContainer = styled.View`
  margin: 1% 3%;
  padding: 3px;
  border: 1px solid gray;
  width: 94%;
  height: 36px;
  flex-direction: row;
`;

const ItemTitle = styled.View`
  border: 1px solid gray;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #9f9f9f;
  font-weight: 500;
`;

const ItemBody = styled.View`
  border: 1px solid gray;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const PublicItem = ({ item }) => {
  const {
    gubun, // 지역
    defCnt, // 확진자수
    incDec, // 전일대비
    localOccCnt, // 지역발생
  } = item;

  return (
    <ItemContainer>
      <ItemTitle>
        <Title>{gubun}</Title>
      </ItemTitle>
      <ItemBody>
        <Title>확진자수</Title>
        <Title>{defCnt}</Title>
      </ItemBody>
      <ItemBody>
        <Title>전일대비</Title>
        <Title>{incDec}</Title>
      </ItemBody>
      <ItemBody>
        <Title>지역발생</Title>
        <Title>{localOccCnt}</Title>
      </ItemBody>
    </ItemContainer>
  );
};
