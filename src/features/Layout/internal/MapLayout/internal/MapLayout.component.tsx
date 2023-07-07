import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Layout/Footer/Footer.component';
import { Header } from '@/components/Layout/Header/Header.component';
import { ErrorBoundary } from '@/features/errorHandling';

const MapLayout = () => {
  return (
    <ErrorBoundary>
      <Header />
      <Outlet />
      <Footer />
    </ErrorBoundary>
  );
};

export default MapLayout;
