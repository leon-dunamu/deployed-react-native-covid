/**
 * @author wonseog
 * @description 전국현황
 */

import React from 'react';
import { connect } from 'react-redux';
import { mapStateToPropsFromStore } from '../../store/actions';
import { PublicWorldItem } from '../../components/public.item';

import WorldHeader from '../../components/Header/World.header';
import { WorldContainer, TitleContainer, Title } from './World.styled';
import { FlatList } from 'react-native';

const World = ({ state: { WorldReducer: stateWorld } }) => {
  return (
    <WorldContainer>
      <TitleContainer>
        <Title>세계 코로나 확진 현황</Title>
      </TitleContainer>
      <WorldHeader updatedAt={stateWorld[0].createDt} />
      <FlatList
        style={{ flex: 1, width: '100%', height: '100%' }}
        keyExtractor={(item, idx) => item.nationNm + idx}
        data={stateWorld}
        renderItem={({ item, index }) => (
          <PublicWorldItem item={item} index={index} />
        )}
      />
    </WorldContainer>
  );
};

export default connect(mapStateToPropsFromStore, null)(World);
