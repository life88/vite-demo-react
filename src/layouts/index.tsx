import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import globalData from '@/utils/globalData';

export default function Layout() {
  const navigate = useNavigate();
  useEffect(() => {
    globalData.navigate = navigate;
  }, []);

  return <Outlet />;
}
