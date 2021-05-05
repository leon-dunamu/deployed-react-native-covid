import React from 'react';
import moment from 'moment';
import { ItemContainer } from '../public.styled';
import { CommonHeaderItemTitle, CommonHeaderItemBody } from './Common.Header';

const VaccineHeader = ({ updatedAt }) => {
  const _updatedAt = updatedAt ? moment(updatedAt).format('M.D') : '';
  const bodyTitleList = [
    {
      title: '시/도',
      styles: { flex: 3 },
    },
    {
      title: '금일 접종(1차/2차)',
      styles: { flex: 6 },
    },
    {
      title: '누적 접종(1차/2차)',
      styles: {
        flex: 7,
        marginRight: 0,
      },
    },
  ];

  return (
    <ItemContainer>
      <CommonHeaderItemTitle title={_updatedAt} />
      {bodyTitleList.map(({ title, styles }) => (
        <CommonHeaderItemBody key={title} title={title} styles={styles} />
      ))}
    </ItemContainer>
  );
};

export default VaccineHeader;
