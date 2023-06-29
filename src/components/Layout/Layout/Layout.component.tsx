import { Outlet } from 'react-router-dom';

import { LayoutProps } from './Layout.type';
import { Footer } from '../Footer/Footer.component';
import { Header } from '../Header/Header.component';

export const Layout = ({
  hasHeader = false,
  hasFooter = false,
}: LayoutProps) => {
  return (
    <>
      {hasHeader && <Header />}
      <Outlet />
      {hasFooter && <Footer />}
    </>
  );
};
