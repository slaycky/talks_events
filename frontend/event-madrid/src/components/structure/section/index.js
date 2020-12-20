/* eslint-disable no-dupe-keys */
import styled from 'styled-components';
import { variant } from 'styled-system';
import Tokens from 'assets/tokens';

const Section = styled('section')(
  {
    width: '100%',
    backgroundColor: Tokens.colors.bgWhite,
  },
  variant({
    prop: 'bg',
    variants: {
      orange: {
        backgroundColor: Tokens.colors.orange,
      },
      grayDark: {
        backgroundColor: Tokens.colors.grayDark,
      },
    },
  }),
);

export default Section;
