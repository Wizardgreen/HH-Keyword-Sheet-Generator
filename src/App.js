import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import Router from './Router';
import { getAllKeywords } from './services/firestore';


function App() {
  const fetch = async () => {
    const payload = await getAllKeywords();
    return payload;
  };

  // useEffect(() => {
  //   fetch();
  // }, []);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
