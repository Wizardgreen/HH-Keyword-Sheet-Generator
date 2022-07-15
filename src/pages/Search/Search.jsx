import { useState, useMemo }from 'react';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import isEmpty from 'lodash/isEmpty';

import Header from '@components/Header';
import RuleList from '@components/RuleList';
import useKeyword from '@hooks/useKeyword';
import { UNIVERSAL_SPECIAL_RULE, ASTARTE_SPECIAL_RULE, LEGION_SPECIAL_RULE, WARGEAR } from '@/services/firestore/constants';

const tabSetting = [
  {value: UNIVERSAL_SPECIAL_RULE, label: '通用'},
  {value: ASTARTE_SPECIAL_RULE, label: '阿斯塔特'},
  {value: LEGION_SPECIAL_RULE, label: '軍團'},
  {value: WARGEAR, label: '戰爭裝備'},
];

const TabWrapper = styled(Box)(({theme}) => ({
  backgroundColor: theme.custom.active.secondary,
  color: theme.custom.white,
  width: '100%',
  '& 	.MuiTabs-indicator': {
    backgroundColor: theme.custom.active.primary
  }
}));


const Search = (props) => {
  const [tab, setTab] = useState(tabSetting[0].value);
  const [data, loading] = useKeyword();

  const dropdownOptionMap = useMemo(() => {
    const payload = {};
    if (loading) return payload;
    const types = Object.keys(data);
    types.forEach((type) => {
      const keys = Object.keys(data[type]);
      payload[type] = keys.map((key) => ({value: key, label: data[type][key][0]}));
    });
    return payload;
  }, [data, loading]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box className="search">data
      <Header title="123">
        {!isEmpty(dropdownOptionMap) && (
          <Autocomplete
            options={dropdownOptionMap[tab]}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (<TextField {...params} hiddenLabel />)}
          />
        )}
      </Header>
      <TabWrapper>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant="fullWidth"
          textColor="inherit"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          {tabSetting.map((option) => (
            <Tab
              value={option.value}
              label={option.label}
              key={option.label}
            />
          ))}
        </Tabs>
      </TabWrapper>
      { !loading && <RuleList data={data[tab]}/> }
    </Box>
  );
};

export default Search;