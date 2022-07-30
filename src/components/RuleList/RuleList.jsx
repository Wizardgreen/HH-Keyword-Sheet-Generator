import { useMemo, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import AutoSizer from 'react-virtualized-auto-sizer';
import { VariableSizeList } from 'react-window';
import RuleItem from './RuleItem';


const RuleList = (props) => {
  const { data } = props;
  const listRef = useRef();
  const sizeMap = useRef({});

  const getSpacing = useTheme().spacing;

  const setSize = useCallback((index, size) => {
    sizeMap.current = { ...sizeMap.current, [index]: size };
    listRef.current.resetAfterIndex(index);
  }, []);

  const getSize = index => sizeMap.current[index] || 50;
  const formattedData = useMemo(() => Object.values(data), [data]);

  return (
    <Grid className="rule-list" item xs>
      <AutoSizer>
        {({height, width}) => {
          const listStyle = {
            margin: getSpacing(0.5, 0),
          };
          return (
            <VariableSizeList
              className="fixed-size-list"
              ref={listRef}
              height={height}
              itemCount={formattedData.length}
              itemSize={getSize}
              width={width}
              itemData={formattedData}
              style={listStyle}
            >
              {({ data, index, style }) => (
                <div style={style}>
                  <RuleItem
                    data={data[index]}
                    index={index}
                    setSize={setSize}
                    key={data[index][0]}
                  />
                </div>
              )}
            </VariableSizeList>
          );}}
      </AutoSizer>
    </Grid>
  );
};

export default RuleList;

RuleList.propTypes = {
  data: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};