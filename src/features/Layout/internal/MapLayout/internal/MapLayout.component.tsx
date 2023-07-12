import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Layout/Header/Header.component';
import { ErrorBoundary } from '@/features/errorHandling';

import styles from './MapLayout.module.scss';
import { Footer } from '../../Footer';

const MapLayout = () => {
  return (
    <ErrorBoundary>
      <div className={styles.layoutContainer}>
        <Header />
        <div className={styles.mainContentContainer}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default MapLayout;
