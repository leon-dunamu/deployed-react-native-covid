import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  mapDispatchToPropsFromStore,
  mapStateToPropsFromStore,
} from '../../store/actions';
import * as s from '../public.styled';
import { color } from '../../assets/style/color';

function KoreaHeaderBody({ title, onPress, ...rest }) {
  return (
    <s.TouchItemBody
      styles={{
        marginRight: '3px',
        backgroundColor: color.light_purple,
      }}
      onPress={onPress}
    >
      <s.Title styles={{ color: '#fafafa' }}>{title}</s.Title>
    </s.TouchItemBody>
  );
}

function KoreaHeaderTitle({ title }) {
  return (
    <s.TouchItemTitle
      styles={{
        marginRight: '3px',
        backgroundColor: color.light_purple,
      }}
    >
      <s.Title styles={{ color: '#fafafa', fontSize: '12px' }}>{title}</s.Title>
    </s.TouchItemTitle>
  );
}

export default function KoreaHeader({
  state: { KoreaReducer: stateKorea },
  sortKoreaByIncDec,
  sortKoreaByRegion,
  updatedAt,
}) {
  const _updatedAt = updatedAt ? moment(updatedAt).format('M.D') : '';

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

  const bodyTitleList = [
    { title: '확진자수', styles: { flex: 7 }, onPress: onSortIncDec },
    { title: '지역 | 해외', onPress: onSortRegion },
    { title: '격리해제', styles: { flex: 7 } },
  ];

  return (
    <s.ItemContainer>
      <KoreaHeaderTitle title={_updatedAt} />
      {bodyTitleList.map(({ title, onPress, styles }) => (
        <KoreaHeaderBody
          key={title}
          title={title}
          onPress={() => {
            onPress?.();
          }}
          styles={styles}
        />
      ))}
    </s.ItemContainer>
  );
}

export default connect(
  mapStateToPropsFromStore,
  mapDispatchToPropsFromStore,
)(KoreaHeader);
