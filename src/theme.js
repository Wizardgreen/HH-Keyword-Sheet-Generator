import { createTheme } from '@mui/material/styles';

export default createTheme({
  spacing: 14,
  typography: {
    fontFamily: ['Noto Sans TC', 'PingFangTC', 'Roboto'].join(','),
    h1: {
      fontWeight: '900',
      fontSize: '30px',
    },
    h2: {
      fontWeight: '700',
      fontSize: '14px',
      lineHeight: 1.5,
    },
    body1: {
      fontWeight: '400',
      fontSize: '14px',
    },
  },
  custom: {
    black: '#000',
    white: '#fff',
    active: {
      primary: '#ff9800',
      secondary: '#1976d2',
    },
  }
});