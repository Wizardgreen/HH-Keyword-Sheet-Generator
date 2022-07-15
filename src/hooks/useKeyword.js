import { useState, useEffect } from 'react';
import get from 'lodash/get';
import { getAllKeywords, getKeywordLastUpdate } from '@/services/firestore';
import { KEYWORD, LAST_UPDATE, METADATA } from '@/services/firestore/constants';

const getInitData = () => {
  const localData = JSON.parse(localStorage.getItem(KEYWORD));
  if (localData) {
    return {
      loading: false,
      data: localData,
    };
  }
  return {
    loading: false,
    data: {},
  };
};

const useKeyword = () => {
  const [state, setState] = useState(getInitData());

  const fetchKeyword = async () => {
    setState({ ...state, loading: true });

    const prevLastUpdate = get(state, ['data', METADATA, LAST_UPDATE]);
    const newLastUpdate = await getKeywordLastUpdate();

    if (newLastUpdate !== prevLastUpdate) {
      const result = await getAllKeywords();
      localStorage.setItem(KEYWORD, JSON.stringify(result));
      setState({ loading: false, data: result });
      return;
    }
    setState({ ...state, loading: false,  });
  };

  useEffect(() => {
    fetchKeyword();
  }, []);

  return [ state.data, state.loading ];
};

export default useKeyword;
