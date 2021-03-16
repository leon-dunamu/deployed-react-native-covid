import styled from "styled-components/native";

export const PageContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const PageScroll = styled.ScrollView`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 3%;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  height: 54px;
  border-bottom-width: 1px;
  border-bottom-color: #dadada;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 32px;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10px;

  ${(props) => (props.styles ? props.styles : "")};
`;

export const sText = styled.Text`
  width: 100%;

  font-size: ${(props) => (props.title ? "28px" : "18px")};
  font-weight: ${(props) => (props.title ? "bold" : "500")};

  ${(props) => (props.styles ? props.styles : "")};

  text-align: justify;
`;

export const Empty = styled.View`
  height: 120px;
  width: 100%;
`;
