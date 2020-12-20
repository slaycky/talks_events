/* eslint-disable no-dupe-keys */
import styled from 'styled-components';

import bgFooter from 'assets/images/bgFooter.png';
import tokens from 'assets/tokens';

export const Background = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '10%',
  paddingBottom: '5%',
  flexDirection: 'column',
  backgroundImage: `url(${bgFooter}) `,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});
export const LogoFooter = styled('img')({
  width: '185px',
});

export const NormalizeContent = styled('div')({
  marginTop: '80px',
});

export const FooterLogoContent = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '127px',
  width: '100%',
  position: 'relative',
  backgroundColor: tokens.colors.bgGray,
});
