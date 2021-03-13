import styled from "styled-components/native";
import { color } from "../assets/style/color";

export const ItemContainer = styled.View`
  margin: 0.3% 3%;
  padding: 3px;
  width: 94%;
  height: 42px;
  flex-direction: row;
  ${(props) => (props.styles ? props.styles : "")}
`;

export const ItemTitle = styled.View`
  justify-content: center;
  align-items: center;
  flex: 3;
  flex-direction: row;
  border-radius: 8px;

  ${(props) => (props.styles ? props.styles : "")};
  ${(props) =>
    props.hazard
      ? `
    background-color: ${color.theme[props.hazard]};
  `
      : null}
`;

export const TouchItemTitle = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 3;
  flex-direction: row;
  border-radius: 8px;

  ${(props) => (props.styles ? props.styles : "")};
  ${(props) =>
    props.hazard
      ? `
    background-color: ${color.theme[props.hazard]};
  `
      : null}
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #555;
  font-weight: 500;
  flex: 1;
  text-align: center;

  ${(props) => (props.styles ? props.styles : "")};
`;

export const ItemBody = styled.View`
  flex: 5;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;

  ${(props) => (props.styles ? props.styles : "")};
  ${(props) =>
    props.hazard
      ? `
    background-color: ${color.theme[props.hazard]};
  `
      : null}
`;

export const TouchItemBody = styled.TouchableOpacity`
  flex: 5;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 8px;

  ${(props) => (props.styles ? props.styles : "")};
  ${(props) =>
    props.hazard
      ? `
    background-color: ${color.theme[props.hazard]};
  `
      : null}
`;
