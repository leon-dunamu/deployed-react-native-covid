import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as s from "./Article.styled";

const Article = ({ route, navigation }) => {
  const { wrtDt, title, countryName, content } = route.params.item;

  const _goBack = () => {
    navigation.goBack();
  };

  React.useEffect(() => {
    const parent = navigation.dangerouslyGetParent();

    parent.setOptions({
      tabBarVisible: false,
    });

    return () =>
      parent.setOptions({
        tabBarVisible: true,
      });
  }, []);

  return (
    <s.PageContainer>
      <s.Header>
        <s.BackButton onPress={_goBack}>
          <Ionicons size={30} name="chevron-back-outline" />
        </s.BackButton>
        <s.sText styles={{ width: "auto" }}>코로나 기사</s.sText>
      </s.Header>
      <s.PageScroll>
        <s.sText title={true} styles={{ marginBottom: "20px" }}>
          {title}
        </s.sText>
        <s.sText styles={{ marginBottom: "14px" }}>
          {wrtDt} {countryName}{" "}
        </s.sText>
        <s.sText>{content.split("&nbsp;").join("\n")}</s.sText>
        <s.Empty />
      </s.PageScroll>
    </s.PageContainer>
  );
};

export default Article;
