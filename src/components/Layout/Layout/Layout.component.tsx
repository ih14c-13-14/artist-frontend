import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer/Footer.component';
import { Header } from '../Header/Header.component';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
