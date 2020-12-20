/* eslint-disable import/no-anonymous-default-export */
export default {
  colors: {
    primaryColor: '#FF4E19',
    defaultBg: '#ffffff',
    white: '#ffffff',
    orange: '#FF4E19',
    orangeLight: '#ff8e3b',
    grayDark: '#2e2e2e',
    green: '#02e202',
    greenDark: '#002a00',
    bgGray: '#2e2e2e',
  },
  fonts: {
    primaryFont: "'Nunito Sans', sans-serif",
    secondaryFont: "'Open Sans', sans-serif;",
  },
  media: {
    xs: '@media (max-width: 480px)',
    sm: '@media (max-width: 768px)',
    md: '@media (max-width: 1024px)',
    lg: '@media (max-width: 1280px)',
    xl: '@media (max-width: 1600px)',
    xxl: '@media (max-width: 1920px)',
    breakpoints: {
      xs: 480,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1600,
      xxl: 1920,
    },
  },
  breakpoints: ['480px', '768px', '1024px', '1280px', '1600px', '1920px'],
  effects: {
    cardShadow: '0px 2px 3px rgba(0, 0, 0, 0.12)',
    dialogShadow: '0px 2px 17px rgba(0, 0, 0, 0.167395)',
    buttonClick: '0px 3px 3px rgba(0, 0, 0, 0.08)',
    buttonHover: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    buttonFocus: 'solid 2px #D7E5F4',
    contextMenu: '-2px 0px 8px rgba(0, 0, 0, 0.12)',
  },
};
