/* eslint-disable no-dupe-keys */
import React from 'react';

import * as S from './MoreInfo.styles';

const MoreInfo = ({ textLeft, textRight }) => (
  <S.Content>
    <S.Left>{textLeft}</S.Left>
    <S.Right>{textRight}</S.Right>
  </S.Content>
);

export default MoreInfo;
