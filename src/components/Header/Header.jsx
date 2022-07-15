import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = (props) => {
  const { title, children } = props;

  return (
    <Box sx={{ pt: 1, pr: 2, pb: 1, pl: 2}} display="grid" gap={1}>
      <Typography variant='h1'>{ title }</Typography>
      {children}
    </Box>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};