import React from "react";
import moment from "moment";
import * as s from "./public.styled";
import { color } from "../assets/style/color";

const WorldHeader = ({ updatedAt }) => {
  const _updatedAt = updatedAt ? moment(updatedAt).format("M.D") : "";

  return (
    <s.ItemContainer>
      <s.ItemTitle
        styles={{
          marginRight: "2px",
          backgroundColor: color.light_purple,
          flex: 2,
        }}
      >
        <s.Title styles={{ color: "#fafafa", fontSize: "12px" }}>
          {_updatedAt}
        </s.Title>
      </s.ItemTitle>
      <s.ItemBody
        styles={{
          marginRight: "4px",
          backgroundColor: color.light_purple,
          flex: 4,
        }}
      >
        <s.Title styles={{ color: "#fafafa" }}>국가</s.Title>
      </s.ItemBody>
      <s.ItemBody
        styles={{
          marginRight: "4px",
          backgroundColor: color.light_purple,
          flex: 7,
        }}
      >
        <s.Title styles={{ color: "#fafafa" }}>누적 확진자</s.Title>
      </s.ItemBody>
      <s.ItemBody
        styles={{
          flex: 5,
          backgroundColor: color.light_purple,
        }}
      >
        <s.Title styles={{ color: "#fafafa" }}>누적 사망자</s.Title>
      </s.ItemBody>
    </s.ItemContainer>
  );
};

export default WorldHeader;
