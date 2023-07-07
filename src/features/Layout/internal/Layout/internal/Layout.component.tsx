import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Layout/Footer/Footer.component';
import { Header } from '@/components/Layout/Header/Header.component';
import { ErrorBoundary } from '@/features/errorHandling';

import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.types';

const Layout = ({ hasFooter = false }: LayoutProps) => {
  return (
    <ErrorBoundary>
      <Header />
      <div className={styles.mainContentContainer}>
        <Outlet />
      </div>
      {hasFooter && <Footer />}
    </ErrorBoundary>
  );
};

export default Layout;