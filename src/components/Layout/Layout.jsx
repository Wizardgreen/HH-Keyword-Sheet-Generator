import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import AppBar from '@components/AppBar';

const Layout = (props) => {
  return (
    <Container maxWidth="sm" disableGutters>
      <Grid container direction="column" sx={{ height: '100vh' }}>
        <AppBar title="123" />
        <Outlet />
      </Grid>
    </Container>
  );
};

export default Layout;