import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { RouteObject, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { keyToPath } from '@/utils';

const modules = import.meta.glob(['./pages/**/*.{js,jsx,tsx}', '!**/components/**', '!**/model.{ts,js}', '!**/services.{ts,js}']);

function LoadingComponent({ element }: { element: React.LazyExoticComponent<any> }) {
  const Component = element;
  return (
    <Suspense
      fallback={
        <div className="page-loading">
          <Spin />
        </div>
      }
    >
      <Component />
    </Suspense>
  );
}

function App() {
  const routes: RouteObject[] = [];
  Object.keys(modules).map((key) => {
    const path = keyToPath(key);
    const module = modules[key] as () => Promise<{ default: any }>;
    routes.push({
      path: path || '/',
      element: <LoadingComponent element={React.lazy(module)} />,
    });
  });
  console.log('routes ', routes);

  let basename = undefined;
  if (import.meta.env.VITE_BUILD_ENV === 'gh-pages') {
    basename = '/vite-demo-react';
  }

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <LoadingComponent element={React.lazy(() => import('@/layouts'))} />,
        children: routes,
      },
    ],
    {
      basename,
    },
  );

  return <RouterProvider router={router} />;
}

export default App;
