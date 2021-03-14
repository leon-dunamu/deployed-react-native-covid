import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import {
  mapDispatchToPropsFromStore,
  mapStateToPropsFromStore,
} from "../store/actions";
import * as s from "./public.styled";
import { color } from "../assets/style/color";

const KoreaHeader = ({
  state: { KoreaReducer: stateKorea },
  sortKoreaByIncDec,
  sortKoreaByRegion,
  updatedAt,
}) => {
  const _updatedAt = updatedAt ? moment(updatedAt).format("M.D") : "";

  const [order, setOrder] = React.useState({
    incDec: true,
    region: true,
  });

  const onSortIncDec = () => {
    sortKoreaByIncDec(stateKorea, !order.incDec);
    setOrder({
      ...order,
      incDec: !order.incDec,
    });
  };

  const onSortRegion = () => {
    sortKoreaByRegion(stateKorea, !order.region);
    setOrder({
      ...order,
      region: !order.region,
    });
  };

  return (
    <s.ItemContainer>
      <s.TouchItemTitle
        styles={{
          marginRight: "3px",
          backgroundColor: color.light_purple,
        }}
      >
        <s.Title styles={{ color: "#fafafa", fontSize: "12px" }}>
          {_updatedAt}
        </s.Title>
      </s.TouchItemTitle>
      <s.TouchItemBody
        onPress={onSortIncDec}
        styles={{
          marginRight: "3px",
          backgroundColor: color.light_purple,
          flex: 7,
        }}
      >
        <s.Title styles={{ color: "#fafafa" }}>확진자수</s.Title>
      </s.TouchItemBody>
      <s.TouchItemBody
        onPress={onSortRegion}
        styles={{
          marginRight: "3px",
          backgroundColor: color.light_purple,
        }}
      >
        <s.Title styles={{ color: "#fafafa" }}>지역 | 해외</s.Title>
      </s.TouchItemBody>
      <s.ItemBody
        styles={{
          flex: 7,
          backgroundColor: color.light_purple,
        }}
      >
        <s.Title styles={{ color: "#fafafa" }}>격리해제</s.Title>
      </s.ItemBody>
    </s.ItemContainer>
  );
};

export default connect(
  mapStateToPropsFromStore,
  mapDispatchToPropsFromStore
)(KoreaHeader);
