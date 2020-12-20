/* eslint-disable no-dupe-keys */
import styled from 'styled-components';
import { variant } from 'styled-system';
import Tokens from 'assets/tokens';

const Button = styled('button')(
  {
    textDecoration: 'none',
    fontSize: '29px',
    outline: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    textAlign: 'left',
    padding: '10px 28px 8px',
    borderRadius: '32px',
    border: 'solid 3px #ffffff',
    maxHeight: '64px',
    [Tokens.media.md]: {
      fontSize: '18px',
    },
  },
  variant({
    prop: 'color',
    variants: {
      orange: {
        border: `solid 3px ${Tokens.colors.orangeLight}`,
        backgroundColor: Tokens.colors.orange,
        color: Tokens.colors.white,
        '&:hover': {
          color: Tokens.colors.white,
          backgroundColor: Tokens.colors.orangeLight,
        },
      },
      green: {
        color: Tokens.colors.greenDark,
        backgroundColor: Tokens.colors.green,
        '&:hover': {
          color: Tokens.colors.white,
          backgroundColor: Tokens.colors.greenDark,
        },
      },
    },
  }),
);

export default Button;
