import { Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import MyList from '@pages/MyList';
import Search from '@pages/Search';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MyList />} />
        <Route path="search" element={<Search />} />
      </Route>
    </Routes>
  );
};

export default Router;
