/* eslint-disable no-dupe-keys */
import styled from 'styled-components';
import { variant } from 'styled-system';
import Tokens from 'assets/tokens';

const Text = styled('span')(
  {
    lineHeight: '1.06',
    textAlign: 'left',
  },
  variant({
    prop: 'color',
    variants: {
      orange: {
        color: Tokens.colors.orange,
      },
      white: {
        color: Tokens.colors.white,
      },
    },
  }),
  variant({
    prop: 'fontStyle',
    variants: {
      italic: {
        fontStyle: 'italic',
      },
    },
  }),
  variant({
    prop: 'weight',
    variants: {
      bold: {
        fontWeight: '800',
      },
      semibold: {
        fontWeight: '600',
      },
      light: {
        fontWeight: '300',
      },
    },
  }),
  variant({
    prop: 'size',
    variants: {
      small: {
        fontFamily: Tokens.fonts.secondaryFont,
        fontSize: '18px',
        lineHeight: '1.41',
      },
      middle: {
        fontSize: '47px',
      },
      bigger: {
        fontSize: '84px',
        [Tokens.media.md]: {
          fontSize: '54px',
        },
        [Tokens.media.xs]: {
          fontSize: '44px',
        },
      },
    },
  }),
);

export default Text;
