import styled from 'styled-components';
import Tokens from 'assets/tokens/index';

export const Title = styled('div')({
  padding: '60px 0px',
});
export const SpeakerContent = styled('div')({
  display: 'grid',
  gridTemplateColumns: '33% 33% 33%',
  gridGap: '15px',
  backgroundColor: '#fff',
  color: '#444',
  [Tokens.media.lg]: {
    gridTemplateColumns: '50% 50%',
  },
  [Tokens.media.sm]: {
    gridTemplateColumns: '100%',
  },
});

export const ActionButtonContent = styled('div')({
  textAlign: 'center',
  padding: '100px',
  [Tokens.media.xs]: {
    padding: '100px 0px',
  },
});
