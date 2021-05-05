import React from 'react';
import * as s from './public.styled';
import { color } from '../assets/style/color';

export function CommonHeaderItemBody({ title, ...rest }) {
  return (
    <s.ItemBody
      styles={{
        marginRight: '4px',
        backgroundColor: color.light_purple,
      }}
      {...rest}
    >
      <s.Title styles={{ color: '#fafafa' }}>{title}</s.Title>
    </s.ItemBody>
  );
}

export function CommonHeaderItemTitle({ title, ...rest }) {
  return (
    <s.ItemTitle
      styles={{
        marginRight: '2px',
        backgroundColor: color.light_purple,
        flex: 2,
      }}
      {...rest}
    >
      <s.Title styles={{ color: '#fafafa', fontSize: '12px' }}>{title}</s.Title>
    </s.ItemTitle>
  );
}
