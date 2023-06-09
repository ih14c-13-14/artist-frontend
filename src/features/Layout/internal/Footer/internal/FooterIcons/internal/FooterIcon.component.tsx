import clsx from 'clsx';
import { useMemo } from 'react';

import { COLOR } from '@/constants/COLOR';
import { Icon } from '@/features/ui/Icon';
import { Stack } from '@/features/ui/Stack';

import styles from './FooterIcon.module.scss';
import { FooterIconsProps } from './FooterIcon.types';

const FooterIcon = ({ type, isSelected, onClick }: FooterIconsProps) => {
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
        <Icon type={type} fill={isSelected ? COLOR.PRIMARY : '#333'} />
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

export default FooterIcon;
