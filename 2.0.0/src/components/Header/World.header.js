import React from 'react';
import moment from 'moment';
import { ItemContainer } from '../public.styled';
import { CommonHeaderItemTitle, CommonHeaderItemBody } from './Common.Header';

export default function WorldHeader({ updatedAt }) {
  const _updatedAt = updatedAt ? moment(updatedAt).format('M.D') : '';
  const bodyTitleList = [
    {
      title: '국가',
      styles: { flex: 4 },
    },
    {
      title: '누적 확진자',
      styles: { flex: 7 },
    },
    {
      title: '누적 사망자',
      styles: {
        flex: 5,
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
}
