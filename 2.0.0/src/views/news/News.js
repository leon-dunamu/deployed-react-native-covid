/**
 * @author wonseog
 * @description 뉴스
 */

import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { getNews } from "../../api/api-news";
import { PublicNewsItem } from "../../components/public.item";
import {
  mapDispatchToPropsFromStore,
  mapStateToPropsFromStore,
} from "../../store/actions";
import { Title, TitleContainer } from "../world/World.styled";

const News = ({
  state: { NewsReducer: stateNews },
  saveMoreNews,
  navigation,
}) => {
  const [index, setIndex] = React.useState(2);

  const _handleLoadMore = () => {
    getNewsData();
  };

  const getNewsData = async () => {
    let nwResult = null;

    try {
      nwResult = await getNews(index);
    } catch (e) {
      console.log(e);
    } finally {
      const item = nwResult.data.response.body.items.item;
      if (item) {
        saveMoreNews(item);

        setIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <TitleContainer>
        <Title>코로나 관련 뉴스</Title>
      </TitleContainer>
      <FlatList
        style={{ flex: 1, width: "100%", height: "100%" }}
        keyExtractor={(item, idx) => `${Math.random()}`}
        data={stateNews}
        renderItem={({ item, index }) => (
          <PublicNewsItem item={item} index={index} navigation={navigation} />
        )}
        onEndReached={_handleLoadMore}
        onEndReachedThreshold={1}
      />
    </SafeAreaView>
  );
};

export default connect(
  mapStateToPropsFromStore,
  mapDispatchToPropsFromStore
)(News);
