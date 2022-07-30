import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Header = (props) => {
  const { title, children } = props;

  return (
    <Grid sx={{ pt: 0.5, pr: 1, pb: 0.5, pl: 1}} display="grid" gap={1}>
      <Typography variant='h1'>{ title }</Typography>
      {children}
    </Grid>
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