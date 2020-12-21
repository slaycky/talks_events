import styled from 'styled-components';

const Content = styled('div')({
  margin: '0 auto',
  padding: '20px',
  '@media (min-width: 750px)': {
    width: '750px',
  },
  '@media (min-width: 992px)': {
    width: '970px',
  },
  '@media (min-width: 1200px)': {
    width: '1170px',
  },
});

export default Content;
