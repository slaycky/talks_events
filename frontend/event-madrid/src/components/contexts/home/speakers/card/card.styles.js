import styled from 'styled-components';
import Tokens from 'assets/tokens/index';

export const AvatarBorder = styled('div')({
  height: '278px',
  width: '278px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  backgroundImage: 'linear-gradient(to top, #ffa050, #f0633d)',
});

export const Avatar = styled('div')({
  height: '254px',
  width: '254px',
  backgroundColor: '#fff',
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  borderRadius: '50%',
});

export const CardBody = styled('div')({});

export const BoxAvatar = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '20px',
  [Tokens.media.lg]: {
    justifyContent: 'center',
  },
});

export const BoxName = styled('div')({
  padding: '20px 20px 20px 0px',
  [Tokens.media.sm]: {
    textAlign: 'center',
  },
});
export const Name = styled('h2')({
  fontSize: '46px',
  fontWeight: 900,
  fontStyle: 'italic',
  color: '#15100f',
  textDecoration: 'underline',
  textDecorationColor: '#ffa050',
  textDecorationThickness: '9px',
  textEmphasisColor: 'rgba(90, 200, 160, 0.8)',

  //textUnderlineOffset: '-5px',
  // borderStyle: 'solid',
  // borderWidth: '0 0 2px 0',
  // paddingBottom: 'px',
  // marginBottom: '0px',
  // width: 'fit-content',
  // borderImage: 'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66)) 1',
});
export const Description = styled('h2')({
  fontSize: '18px',
  fontFamily: Tokens.fonts.secondaryFont,
  color: '#000',
});
