import React from "react";
import moment from "moment";
import * as s from "./public.styled";
import { color } from "../assets/style/color";

const VaccineHeader = ({ updatedAt }) => {
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
          flex: 3,
        }}
      >
        <s.Title styles={{ color: "#fafafa" }}>시/도</s.Title>
      </s.ItemBody>
      <s.ItemBody
        styles={{
          marginRight: "4px",
          backgroundColor: color.light_purple,
          flex: 6,
        }}
      >
        <s.Title styles={{ color: "#fafafa" }}>금일 접종(1차/2차)</s.Title>
      </s.ItemBody>
      <s.ItemBody
        styles={{
          flex: 7,
          backgroundColor: color.light_purple,
        }}
      >
        <s.Title styles={{ color: "#fafafa" }}>누적 접종(1차/2차)</s.Title>
      </s.ItemBody>
    </s.ItemContainer>
  );
};

export default VaccineHeader;
