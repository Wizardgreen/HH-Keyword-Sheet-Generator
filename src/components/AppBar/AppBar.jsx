import PropTypes from 'prop-types';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.custom.black,
}));

export default function AppBar(props) {
  return (
    <Box>
      <StyledAppBar position="static">
        <Toolbar sx={{ pl: 1, pr: 1}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

AppBar.propTypes = {
  // title: PropTypes.string.isRequired,
};