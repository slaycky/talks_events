/* eslint-disable no-dupe-keys */
import styled from 'styled-components';
import { variant } from 'styled-system';
import Tokens from 'assets/tokens';

export const Content = styled('div')({
  display: 'flex',

  [Tokens.media.md]: {
    display: 'block',
  },
});
export const TextLeft = styled('h3')({
  fontSize: '84px',
  fontWeight: '900',
  fontStyle: 'italic',
  lineHeight: '1.06',
  textAlign: 'left',
  color: '#ffffff',
});
export const TextRight = styled('span')(
  {
    fontFamily: Tokens.fonts.secondaryFont,
    fontSize: '18px',
    fontWeight: '300',
    fontStyle: 'normal',
    lineHeight: '1.39',
    textAlign: 'left',
    color: '#ffffff',
  },
  variant({
    prop: 'weight',
    variants: {
      bold: {
        fontWeight: '800',
        fontStyle: 'italic',
      },
      semibold: {
        fontWeight: '600',
      },
    },
  }),
);
export const Left = styled('div')({
  padding: '60px 20px 60px 0px',
  width: '50%',
  [Tokens.media.lg]: {
    width: '100%',
    padding: '60px 80px 60px 80px',
  },
  [Tokens.media.xl]: {
    padding: '20px',
  },
});
export const Right = styled('div')({
  width: '50%',
  padding: '110px 0px 60px 110px',
  [Tokens.media.lg]: {
    padding: '60px 80px 60px 80px',
    width: '100%',
  },
  [Tokens.media.xl]: {
    padding: '20px',
  },
});
