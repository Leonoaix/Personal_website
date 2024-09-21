import { Route, Routes } from 'react-router-dom';
import Login from '@/pages/Login/index.tsx';
import Dashboard from '@/pages/DashBoard/index.tsx';
import Register from '@/pages/Register/index.tsx';
import NotFound from '@/pages/Error/notFound';
import DesignPage from '@/pages/DesignPage';

/**
 * 静态路由配置
 *
 * @returns 返回一个包含多个路由配置的JSX元素
 */
const StaticRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/design' element={<DesignPage />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default StaticRouters;
