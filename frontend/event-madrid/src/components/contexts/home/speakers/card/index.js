import React from 'react';

import * as S from './card.styles';

const Card = ({ data }) => {
  return (
    <S.CardBody>
      <S.BoxAvatar>
        <S.AvatarBorder>
          <S.Avatar
            style={{ backgroundImage: `url('${data.avatar}')` }}
          ></S.Avatar>
        </S.AvatarBorder>
      </S.BoxAvatar>
      <S.BoxName>
        <S.Name>{data.title}</S.Name>
        <S.Description>{data.jobTitle}</S.Description>
      </S.BoxName>
    </S.CardBody>
  );
};
export default Card;
