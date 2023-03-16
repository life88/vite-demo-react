import { HomeOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';

import globalData from '@/utils/globalData';

export default function Layout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    globalData.navigate = navigate;
  }, []);

  const onClick = () => {
    navigate('/');
  };

  return (
    <>
      <Outlet />
      <FloatButton.Group>
        <FloatButton.BackTop />
        {!isHome && <FloatButton onClick={onClick} icon={<HomeOutlined />} />}
      </FloatButton.Group>
    </>
  );
}
