import { DefaultTheme } from 'styled-components';
import breakpoints from './breakpoints';

const theme: DefaultTheme = {
  fontFamily: {
    primary: 'sans-serif',
  },
  fontWeight: {
    primary: {
      light: 300,
      medium: 500,
      bold: 700,
    },
  },
  colors: {
    primary: '#9469FE',
    primarySubtle: '#DCD0FF',
    primaryAccent: '#F0EAFF',
    light: '#F8F5FE',
    black: '#0B0020',
    gray: '#6E6386',
    red: '#F48088',
    green: '#31D0AA',
  },
  breakpoints,
};

export default theme;
