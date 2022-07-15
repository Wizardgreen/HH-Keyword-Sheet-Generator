import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import AppBar from '@components/AppBar';


const Layout = (props) => {
  return (
    <Container maxWidth="sm" disableGutters>
      <Box sx={{ height: '100vh' }}>
        <AppBar title="123" />
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;