import clsx from 'clsx';
import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Icon } from '@/features/ui/Icon';
import { Stack } from '@/features/ui/Stack';
import { getRoutes } from '@/routes/getRoutes';

import styles from './Footer.module.scss';

type FooterSelection = 'Map' | 'Qr' | 'Search';

const FooterIcons = ({
  type,
  isSelected,
  onClick,
}: {
  type: FooterSelection;
  isSelected: boolean;
  onClick: () => void;
}) => {
  const title = useMemo(() => {
    switch (type) {
      case 'Map':
        return 'マップ';
      case 'Qr':
        return 'QRリーダ';
      case 'Search':
        return 'さがす';
    }
  }, [type]);

  return (
    <div className={styles.buttonContainer} onClick={onClick}>
      <Stack width="100%" alignItems="center" gap="0">
        <Icon type={type} fill={isSelected ? '#e60010' : '#333'} />
        <p
          className={clsx(
            styles.label,
            isSelected ? styles.selected : undefined
          )}
        >
          {title}
        </p>
      </Stack>
    </div>
  );
};

export const Footer = () => {
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
      [key in Lowercase<FooterSelection>]: boolean;
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

  return (
    <Stack direction="row" height="64px" alignItems="center">
      <FooterIcons type="Map" isSelected={selected.map} onClick={onMapClick} />
      <FooterIcons type="Qr" isSelected={selected.qr} onClick={onQrClick} />
      <FooterIcons
        type="Search"
        isSelected={selected.search}
        onClick={onSearchClick}
      />
    </Stack>
  );
};
