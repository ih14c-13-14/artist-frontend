import { LayoutProps } from './Layout.type';
import { Footer } from '../Footer/Footer.component';
import { Header } from '../Header/Header.component';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />

      {children}

      <Footer />
    </div>
  );
};
