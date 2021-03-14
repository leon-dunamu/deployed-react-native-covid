import styled from "styled-components/native";
import { color } from "../assets/style/color";

export const BannerContainer = styled.View`
  flex: 0.5;
  width: 100%;
  padding: 3px;
`;

export const Banner = styled.View`
  margin: 3% 3%;
  flex: 1;
  border-radius: 8px;
  flex-direction: row;
  padding: 10px;

  ${(props) => (props.styles ? props.styles : "")};
`;

export const ConditionWrapper = styled.View`
  flex: 3;
  justify-content: space-evenly;
  align-items: center;
`;

export const cFace = styled.View`
  background-color: ${(props) =>
    props.loading ? "rgba(80,80,80,0.2)" : "rgba(255,255,255,0)"};

  width: 80px;
  height: 80px;
  border-radius: 8px;
`;

export const cTextContainer = styled.View`
  background-color: ${(props) =>
    props.loading ? "rgba(80,80,80,0.2)" : "rgba(255,255,255,0)"};

  border-radius: 8px;
  height: 28px;
  width: 36px;
  justify-content: center;
  align-items: center;
`;

export const cText = styled.Text`
  font-size: 16px;
`;

export const InfoWrapper = styled.View`
  flex: 5;
  justify-content: space-evenly;
  align-items: center;
  padding: 18px 0;
`;

export const Info = styled.View`
  background-color: ${(props) =>
    props.loading ? "rgba(80,80,80,0.2)" : "rgba(255,255,255,0)"};

  flex: 1;
  margin: 6px 12px;
  border-radius: 8px;
  height: 28px;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const iAddress = styled.Text`
  ${(props) => (props.styles ? props.styles : "")};
`;

export const iCount = styled.Text`
  ${(props) => (props.styles ? props.styles : "")};
`;

export const RefreshButton = styled.TouchableOpacity``;
