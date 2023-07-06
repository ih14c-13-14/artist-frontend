import { Outlet } from 'react-router-dom';

import { ErrorBoundary } from '@/features/errorHandling';

import { LayoutProps } from './Layout.type';
import { Footer } from '../Footer/Footer.component';
import { Header } from '../Header/Header.component';

export const Layout = ({ hasFooter = false }: LayoutProps) => {
  return (
    <ErrorBoundary>
      <Header />
      <Outlet />
      {hasFooter && <Footer />}
    </ErrorBoundary>
  );
};
