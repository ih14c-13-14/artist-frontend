import { BrowserRouter } from 'react-router-dom';

import { Layout } from '@/components/Layout/Layout/Layout.component';

import { RoutesConfig } from './RoutesConfig';

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Layout>
        <RoutesConfig />
      </Layout>
    </BrowserRouter>
  );
};
