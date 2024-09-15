import { useNavigate } from 'react-router-dom';
import StaticRouters from './modules/StaticRouters';
import { useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/query';
import { useEffect } from 'react';
import Loading from '../pages/Loading';

const AppRouter = () => {
  const { loading } = useSelector((state: RootState) => state.globalStore);
  const navigate = useNavigate();
  const token = true;
  //这里后期应该根据token判断是否登录，这里只是模拟一下
  //在没有token的人访问页面的时候跳转到登录界面
  //在又token的人访问的时候应该呆在原界面。
  //这里的load是一个跳板页面，也就是说在页面切换的时候如果数据没有加载完成，那么就显示一个loading页面。
  //我感觉这个地方的逻辑有点不优雅，但是目前来说只能先这样写。
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  });
  return <>{loading ? <Loading /> : <StaticRouters />}</>;
};

export default AppRouter;
