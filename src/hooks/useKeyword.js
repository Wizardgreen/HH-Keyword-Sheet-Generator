import { useState, useEffect } from 'react';
import { get } from 'lodash-es';
import { getAllKeywords, getKeywordLastUpdate } from '@/services/firestore';
import { KEYWORD, LAST_UPDATE, METADATA } from '@/services/firestore/constants';

const getInitData = () => {
  const localData = JSON.parse(localStorage.getItem(KEYWORD));
  if (localData) {
    return {
      completed: false,
      data: localData,
    };
  }
  return {
    completed: false,
    data: {},
  };
};

const useKeyword = () => {
  const [state, setState] = useState(getInitData());

  const fetchKeyword = async () => {
    const prevLastUpdate = get(state, ['data', METADATA, LAST_UPDATE]);
    const newLastUpdate = await getKeywordLastUpdate();

    if (newLastUpdate !== prevLastUpdate) {
      const result = await getAllKeywords();
      localStorage.setItem(KEYWORD, JSON.stringify(result));
      setState({ completed: true, data: result });
      return;
    }
    setState({ ...state, completed: true,  });
  };

  useEffect(() => {
    fetchKeyword();
  }, []);

  return [ state.data, state.completed ];
};

export default useKeyword;
