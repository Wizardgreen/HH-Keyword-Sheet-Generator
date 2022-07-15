import { useMemo } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import RuleItem from './RuleItem';

const RuleList = (props) => {
  const { data } = props;
  const formattedData = useMemo(() => Object.values(data), [data]);

  return (
    <Box className="rule-list" sx={{ pt: 1, pr: 2, pb: 1, pl: 2}} display="grid" gap={1}>
      {formattedData.map((item) => <RuleItem data={item} key={item[0]} />)}
    </Box>
  );
};

export default RuleList;

RuleList.propTypes = {
  data: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};