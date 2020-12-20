import styled from 'styled-components';
import Tokens from 'assets/tokens';

const Container = styled('div')({
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  '@media (min-width: 750px)': {
    width: '750px',
  },
  '@media (min-width: 992px)': {
    width: '970px',
  },
  '@media (min-width: 1200px)': {
    width: '1170px',
  },
  '@media (min-width: 1600px)': {
    width: '1580px',
  },
});

export default Container;
