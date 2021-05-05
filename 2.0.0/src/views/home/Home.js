/**
 * @author wonseog
 * @description 전국현황
 */

import React from 'react';
import { RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import {
  mapDispatchToPropsFromStore,
  mapStateToPropsFromStore,
} from '../../store/actions';
import { PublicKoreaItem } from '../../components/public.item';

import KoreaHeader from '../../components/Header/Korea.header';
import { HomeContainer, PublicScroll } from './Home.styled';
import CoronaBanner from '../../components/corona.banner';
import { toastMessage } from '../../components/toast.message';
import { fetchDataPriority } from '../../components/fetch.data';

const Home = ({
  state: { KoreaReducer: stateKorea },
  saveCoronamap,
  saveKorea,
}) => {
  const [refresh, setRefresh] = React.useState(false);

  const _onRefresh = async () => {
    setRefresh(true);
    const resultError = await fetchDataPriority(saveCoronamap, saveKorea);

    setRefresh(false);
    if (resultError) {
      toastMessage('데이터를 불러오는데 실패하였습니다');
    } else {
      toastMessage('최신 데이터를 조회하였습니다');
    }
  };

  return (
    <HomeContainer>
      <CoronaBanner />
      <KoreaHeader updatedAt={stateKorea[0].createDt} />
      <PublicScroll
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={_onRefresh} />
        }
      >
        {stateKorea.map((item, idx) => (
          <PublicKoreaItem item={item} key={item.gubun + idx} />
        ))}
      </PublicScroll>
    </HomeContainer>
  );
};

export default connect(
  mapStateToPropsFromStore,
  mapDispatchToPropsFromStore,
)(Home);
