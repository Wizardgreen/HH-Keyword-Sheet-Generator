import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const RuleItem = (props) => {
  const { data, index, setSize } = props;
  const itemRef = useRef();

  useEffect(() => {
    setSize(index, itemRef.current.getBoundingClientRect().height);
  }, [setSize, index]);

  return (
    <Box className="rule-item" ref={itemRef} sx={{ pb: 1, pr:1, pl: 1}}>
      <Typography variant="h2">{data[0]}</Typography>
      <Typography variant="h2">{data[1]}</Typography>
      <Typography variant="body1">{data[3]}</Typography>
    </Box>
  );
};

export default RuleItem;

RuleItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  setSize: PropTypes.func.isRequired,
};
