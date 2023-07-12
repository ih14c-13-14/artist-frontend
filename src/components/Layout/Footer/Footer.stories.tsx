import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { ComponentMeta } from '@/utils/storybook';

import { Footer } from './Footer.component';

const FooterStory: ComponentMeta<typeof Footer> = {
  component: Footer,
};

export default FooterStory;

// NOTE: reserveとcancelのモック用のパス
const dummyPath = {
  map: {
    path: '/map/show/',
  },
  qr: {
    path: '/qr/read/',
  },
  search: {
    path: '/search/',
  },
};

export const FooterDemo = () => {
  return (
    <MemoryRouter initialEntries={[dummyPath.map.path]}>
      <Routes>
        <Route path={dummyPath.map.path} element={<Footer />} />
        <Route path={dummyPath.qr.path} element={<Footer />} />
        <Route path={dummyPath.search.path} element={<Footer />} />
      </Routes>
    </MemoryRouter>
  );
};
