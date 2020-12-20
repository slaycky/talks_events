/* eslint-disable no-dupe-keys */
import styled from 'styled-components';

import bgHeader from 'assets/images/bgOverlayHeader.png';
import logoMarca from 'assets/images/logoMarca.png';
import logoMarcaMobile from 'assets/images/logoMarcaMobile.png';
import tokens from 'assets/tokens';

export const Background = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '8%',
  paddingBottom: '5%',
  flexDirection: 'column',
  backgroundImage: `url(${bgHeader}) `,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export const MainLogo = styled('div')({
  width: '100%',
  height: '187px',
  backgroundPosition: 'center',
  backgroundImage: `url(${logoMarca}) `,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  [tokens.media.sm]: {
    backgroundImage: `url(${logoMarcaMobile}) `,
  },
});

export const TitleEvent = styled('h1')({
  paddingTop: '55px',
  fontSize: '47px',
  fontWeight: '900',
  fontStretch: 'normal',
  fontStyle: 'italic',
  textTransform: 'uppercase',
  lineHeight: '1.41',
  color: tokens.colors.white,
  [tokens.media.md]: {
    fontSize: '24px',
  },
  [tokens.media.xs]: {
    fontSize: '20px',
  },
});

export const SubTitleEvent = styled('h2')({
  fontSize: '25px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  lineHeight: '1.41',
  textTransform: 'uppercase',
  color: tokens.colors.white,
  letterSpacing: '12.5px',
  paddingTop: '20px',
  [tokens.media.md]: {
    fontSize: '12px',
    letterSpacing: '8.5px',
  },
  [tokens.media.xs]: {
    fontSize: '10px',
  },
});

export const ContainerInfo = styled('div')({
  height: '50%',
  paddingTop: '40px',
  position: 'relative',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});
export const ContainerLogo = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  maxWidth: '780px',
  [tokens.media.md]: {
    maxWidth: '580px',
  },
});

export const Separator = styled('div')({
  height: '100%',
  width: '100%',
  position: 'relative',
  borderTop: '4px solid #ff8e3b',
  paddingTop: '60px',
});
export const DateContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
});
export const CtaContainer = styled('div')({
  paddingTop: '10px',
  height: '100%',
  width: '100%',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [tokens.media.xs]: {
    paddingTop: '80px',
  },
});

export const CtaButtonContainer = styled('div')({
  position: 'absolute',
  top: '-30px',
  width: '100%',
  textAlign: 'center',
});

export const InfoContainer = styled('div')({
  display: 'flex',
  padding: '50px',
  position: 'relative',
  width: '100%',
});
