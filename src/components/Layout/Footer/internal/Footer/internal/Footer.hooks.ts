import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getRoutes } from '@/routes/getRoutes';

import { FooterType } from '../../types';

export const useFooter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const routes = getRoutes();

  const [pathBase] = useMemo(() => {
    return location.pathname.split('/').filter(v => v !== '');
  }, [location.pathname]);

  const selected = useMemo(() => {
    return {
      map: pathBase === 'map',
      qr: pathBase === 'qr',
      search: pathBase === 'search',
    } satisfies {
      [key in Lowercase<FooterType>]: boolean;
    };
  }, [pathBase]);

  const onMapClick = useCallback(() => {
    navigate(routes.mapShow.path);
  }, [navigate, routes.mapShow.path]);

  const onQrClick = useCallback(() => {
    // TODO: 確認モーダル挟む
    navigate(routes.qrRead.path);
  }, [navigate, routes.qrRead.path]);

  const onSearchClick = useCallback(() => {
    navigate(routes.search.path);
  }, [navigate, routes.search.path]);

  return {
    selected,
    onMapClick,
    onQrClick,
    onSearchClick,
  };
};
