import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const RuleItem = (props) => {
  const { data } = props;
  return (
    <Box className="rule-item">
      <Typography variant="h2">{data[0]}</Typography>
      <Typography variant="h2">{data[1]}</Typography>
      <Typography variant="body1">{data[3]}</Typography>
    </Box>
  );
};

export default RuleItem;

RuleItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};
